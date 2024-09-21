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
                                        class="w-full h-10 rounded-lg border border-black px-2 text-sm"
                                    />
                                    <p class="text-sm">მინიმუმ 2 სიმბოლო</p>
                                </div>
                                <div
                                    class="w-1/2 h-auto flex flex-col justify-start items-start space-y-2"
                                >
                                    <p class="text-sm font-medium">გვარი *</p>
                                    <input
                                        type="text"
                                        class="w-full h-10 rounded-lg border border-black px-2 text-sm"
                                    />
                                    <p class="text-sm">მინიმუმ 2 სიმბოლო</p>
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
                                        class="w-full h-10 rounded-lg border border-black px-2 text-sm"
                                    />
                                    <p class="text-sm">
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
                                        type="text"
                                        class="w-full h-10 rounded-lg border border-black px-2 text-sm"
                                    />
                                    <p class="text-sm">მხოლოდ რიცხვები</p>
                                </div>
                            </div>
                            <div
                                class="w-full h-auto flex flex-col justify-start items-start mt-6 space-y-2"
                            >
                                <p class="text-sm font-medium">
                                    ატვირთეთ ფოტო *
                                </p>
                                <div
                                    class="w-full h-[120px] border border-black border-dashed rounded-xl flex justify-center items-center"
                                >
                                    <Icon icon="add-photo" size="size-6" />
                                </div>
                            </div>
                            <div
                                class="w-full h-auto flex justify-end items-center mt-10 space-x-4"
                            >
                                <Button title="დაამატე აგენტი" />
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
defineProps({
    isOpen: {
        type: Boolean,
        required: true,
    },
})
const uiStore = useUiStore()
</script>