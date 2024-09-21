<template>
    <div
        :class="[
            'w-[382px] h-auto bg-white border-gray shadow-lg rounded-2xl absolute top-[calc(100%+14px)] left-0 duration-150 z-50 flex flex-col justify-start items-start origin-top p-6',
            isOpen ? 'scale-100 border' : 'scale-0',
        ]"
    >
        <p class="text-black font-medium">ფართობის მიხედვით</p>
        <div
            class="w-full h-auto flex justify-center items-center mt-4 space-x-6"
        >
            <div
                class="w-1/2 h-10 rounded-lg border border-black flex justify-center items-center"
            >
                <input
                    v-model="minArea"
                    type="text"
                    class="w-4/5 h-full border-none bg-transparent outline-none px-2"
                    placeholder="დან"
                />
                <div class="w-1/5 h-full flex justify-center items-center">
                    <p class="text-black">მ2</p>
                </div>
            </div>
            <div
                class="w-1/2 h-10 rounded-lg border border-black flex justify-center items-center"
            >
                <input
                    v-model="maxArea"
                    type="text"
                    class="w-4/5 h-full border-none bg-transparent outline-none px-2"
                    placeholder="მდე"
                />
                <div class="w-1/5 h-full flex justify-center items-center">
                    <p class="text-black">მ2</p>
                </div>
            </div>
        </div>
        <div class="w-full h-auto flex justify-start items-center py-2">
            <p v-if="errorText" class="text-red-500 text-sm">
                გთხოვთ შეიყვანოთ ვალიდური რიცხვები
            </p>
        </div>
        <div
            class="w-full h-auto flex justify-center items-center mt-6 space-x-6"
        >
            <div class="w-1/2 h-auto flex flex-col justify-start items-start">
                <p class="text-black font-semibold">მინ. ფართობი</p>
                <p
                    @click="minArea = 50"
                    class="text-black text-sm mt-1 cursor-pointer"
                >
                    50
                </p>
                <p
                    @click="minArea = 100"
                    class="text-black text-sm mt-1 cursor-pointer"
                >
                    100
                </p>
                <p
                    @click="minArea = 150"
                    class="text-black text-sm mt-1 cursor-pointer"
                >
                    150
                </p>
                <p
                    @click="minArea = 200"
                    class="text-black text-sm mt-1 cursor-pointer"
                >
                    200
                </p>
            </div>
            <div class="w-1/2 h-auto flex flex-col justify-start items-start">
                <p class="text-black font-semibold">მაქს. ფართობი</p>
                <p
                    @click="maxArea = 50"
                    class="text-black text-sm mt-1 cursor-pointer"
                >
                    50
                </p>
                <p
                    @click="maxArea = 100"
                    class="text-black text-sm mt-1 cursor-pointer"
                >
                    100
                </p>
                <p
                    @click="maxArea = 150"
                    class="text-black text-sm mt-1 cursor-pointer"
                >
                    150
                </p>
                <p
                    @click="maxArea = 200"
                    class="text-black text-sm mt-1 cursor-pointer"
                >
                    200
                </p>
            </div>
        </div>
        <div class="w-full h-auto mt-6 flex justify-end items-center">
            <Button
                :disabled="errorText.length > 0"
                @click="clickHandler"
                title="არჩევა"
            />
        </div>
    </div>
</template>

<script setup>
import Button from '@/components/Button.vue'
import { ref, watch } from 'vue'
import useFilterStore from '@/store/filters'

const filterStore = useFilterStore()
const emits = defineEmits(['close'])

const maxArea = ref()
const minArea = ref()
const errorText = ref('')

const clickHandler = () => {
    filterStore.area.max = +maxArea.value
    filterStore.area.min = +minArea.value

    emits('close')
}

watch(
    () => maxArea.value,
    () => {
        ;+maxArea.value < +minArea.value
            ? (errorText.value = 'გთხოვთ შეიყვანოთ ვალიდური რიცხვები')
            : (errorText.value = '')
    }
)

watch(
    () => minArea.value,
    () => {
        ;+maxArea.value < +minArea.value
            ? (errorText.value = 'გთხოვთ შეიყვანოთ ვალიდური რიცხვები')
            : (errorText.value = '')
    }
)

defineProps({
    isOpen: {
        type: Boolean,
        required: true,
    },
})
</script>