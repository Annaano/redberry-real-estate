<template>
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="uiStore.closeAgentModal" class="relative z-10">
            <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <div class="fixed inset-0 bg-black/25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div
                    class="flex min-h-full items-center justify-center p-4 text-center"
                >
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95"
                    >
                        <DialogPanel
                            class="w-1/2 transform overflow-hidden rounded-2xl bg-white p-14 shadow-xl transition-all"
                        >
                            <div
                                class="w-full h-auto flex justify-center items-center"
                            >
                                <p class="text-black text-3xl font-medium">
                                    აგენტის დამატება
                                </p>
                            </div>
                            <div
                                class="w-full h-auto flex justify-center items-center space-x-6 mt-8"
                            >
                                <div
                                    class="w-1/2 h-auto flex flex-col justify-start items-start space-y-2"
                                >
                                    <p class="text-sm font-medium">სახელი *</p>
                                    <input
                                        type="text"
                                        v-model="agentStore.name"
                                        class="w-full h-10 rounded-lg border border-black px-2 text-sm"
                                    />
                                    <p
                                        :class="[
                                            'text-sm',
                                            formErrors.name
                                                ? 'text-red-500'
                                                : 'text-black',
                                        ]"
                                    >
                                        მინიმუმ 2 სიმბოლო
                                    </p>
                                </div>
                                <div
                                    class="w-1/2 h-auto flex flex-col justify-start items-start space-y-2"
                                >
                                    <p class="text-sm font-medium">გვარი *</p>
                                    <input
                                        type="text"
                                        v-model="agentStore.surname"
                                        class="w-full h-10 rounded-lg border border-black px-2 text-sm"
                                    />
                                    <p
                                        :class="[
                                            'text-sm',
                                            formErrors.surname
                                                ? 'text-red-500'
                                                : 'text-black',
                                        ]"
                                    >
                                        მინიმუმ 2 სიმბოლო
                                    </p>
                                </div>
                            </div>
                            <div
                                class="w-full h-auto flex justify-center items-center space-x-6 mt-6"
                            >
                                <div
                                    class="w-1/2 h-auto flex flex-col justify-start items-start space-y-2"
                                >
                                    <p class="text-sm font-medium">
                                        ელ-ფოსტა *
                                    </p>
                                    <input
                                        type="text"
                                        v-model="agentStore.email"
                                        class="w-full h-10 rounded-lg border border-black px-2 text-sm"
                                    />
                                    <p
                                        :class="[
                                            'text-sm',
                                            formErrors.email
                                                ? 'text-red-500'
                                                : 'text-black',
                                        ]"
                                    >
                                        გამოიყენეთ @redberry.ge ელ-ფოსტა
                                    </p>
                                </div>
                                <div
                                    class="w-1/2 h-auto flex flex-col justify-start items-start space-y-2"
                                >
                                    <p class="text-sm font-medium">
                                        ტელეფონის ნომერი *
                                    </p>
                                    <input
                                        v-model="agentStore.phone"
                                        type="number"
                                        class="w-full h-10 rounded-lg border border-black px-2 text-sm"
                                    />
                                    <p
                                        :class="[
                                            'text-sm',
                                            formErrors.phone
                                                ? 'text-red-500'
                                                : 'text-black',
                                        ]"
                                    >
                                        მხოლოდ რიცხვები
                                    </p>
                                </div>
                            </div>
                            <div
                                class="w-full h-auto flex flex-col justify-start items-start mt-6 space-y-2"
                            >
                                <p
                                    :class="[
                                        'text-sm font-medium',
                                        formErrors.image
                                            ? 'text-red-500'
                                            : 'text-black',
                                    ]"
                                >
                                    ატვირთეთ ფოტო *
                                </p>
                                <div
                                    class="w-full relative cursor-pointer h-[120px] border border-black border-dashed rounded-xl flex justify-center items-center"
                                >
                                    <input
                                        type="file"
                                        class="absolute top-0 left-0 w-full h-full opacity-0"
                                        @input="handleImageUpload"
                                    />
                                    <Icon icon="add-photo" size="size-6" />
                                </div>
                            </div>
                            <div
                                class="w-full h-auto flex justify-end items-center mt-10 space-x-4"
                            >
                                <Button
                                    @click="submit"
                                    title="დაამატე აგენტი"
                                    :disabled="submitDisabled"
                                />
                                <Button
                                    @click="uiStore.closeAgentModal"
                                    title="გაუქმება"
                                    type="outline"
                                />
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
} from '@headlessui/vue'
import useUiStore from '@/store/ui'
import Icon from '@/components/Icon.vue'
import Button from '@/components/Button.vue'
import useAgentStore from '@/store/agent'
import { computed, reactive, watch } from 'vue'
import axios from '@/plugins/axios'

defineProps({
    isOpen: {
        type: Boolean,
        required: true,
    },
})

const uiStore = useUiStore()
const agentStore = useAgentStore()

const formErrors = reactive({
    name: 'მინიმუმ 2 სიმბოლო',
    surname: 'მინიმუმ 2 სიმბოლო',
    email: 'გამოიყენეთ @redberry.ge ელ-ფოსტა',
    image: 'დაამატეთ ფორო',
    phone: 'მხოლოდ რიცხვები',
})

watch(
    () => agentStore.name,
    () => {
        if (agentStore.name.length >= 2) {
            formErrors.name = ''
        } else {
            formErrors.name = 'მინიმუმ 2 სიმბოლო'
        }
    }
)

watch(
    () => agentStore.surname,
    () => {
        if (agentStore.surname.length >= 2) {
            formErrors.surname = ''
        } else {
            formErrors.surname = 'მინიმუმ 2 სიმბოლო'
        }
    }
)

watch(
    () => agentStore.email,
    () => {
        if (
            agentStore.email.length > 0 &&
            agentStore.email.slice(-12) === '@redberry.ge'
        ) {
            formErrors.email = ''
        } else {
            formErrors.email = 'მეილი უნდა მთავრდებოდეს @redberry.ge-ით'
        }
    }
)

watch(
    () => agentStore.phone,
    () => {
        if (
            String(agentStore.phone)[0] === '5' &&
            String(agentStore.phone).length === 9
        ) {
            formErrors.phone = ''
        } else {
            formErrors.phone = 'მხოლოდ ციფრები'
        }
    }
)

const submitDisabled = computed(() => {
    if (
        !formErrors.email &&
        !formErrors.image &&
        !formErrors.name &&
        !formErrors.phone &&
        !formErrors.surname
    ) {
        return false
    } else {
        return true
    }
})

const handleImageUpload = (e) => {
    agentStore.image = e.target.files[0]
    formErrors.image = ''
}

const submit = async () => {
    if (
        !formErrors.email &&
        !formErrors.image &&
        !formErrors.name &&
        !formErrors.phone &&
        !formErrors.surname
    ) {
        const formData = new FormData()
        formData.append('name', agentStore.name)
        formData.append('surname', agentStore.surname)
        formData.append('avatar', agentStore.image)
        formData.append('phone', agentStore.phone)
        formData.append('email', agentStore.email)

        await axios.post('/agents', formData)
    }
}
</script>