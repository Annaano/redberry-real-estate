<template>
    <div
        :class="[
            'w-[382px] h-auto bg-white border-gray shadow-lg rounded-2xl absolute top-[calc(100%+14px)] left-0 duration-150 z-50 flex flex-col justify-start items-start origin-top p-6',
            isOpen ? 'scale-100 border' : 'scale-0',
        ]"
    >
        <p class="text-black font-medium">ფასის მიხედვით</p>
        <div
            class="w-full h-auto flex justify-center items-center mt-4 space-x-6"
        >
            <div
                class="w-1/2 h-10 rounded-lg border border-black flex justify-center items-center"
            >
                <input
                    type="text"
                    v-model="minPrice"
                    class="w-4/5 h-full border-none bg-transparent outline-none px-2"
                    placeholder="დან"
                />
                <div class="w-1/5 h-full flex justify-center items-center">
                    <p class="text-lg text-black">₾</p>
                </div>
            </div>
            <div
                class="w-1/2 h-10 rounded-lg border border-black flex justify-center items-center"
            >
                <input
                    type="text"
                    v-model="maxPrice"
                    class="w-4/5 h-full border-none bg-transparent outline-none px-2"
                    placeholder="მდე"
                />
                <div class="w-1/5 h-full flex justify-center items-center">
                    <p class="text-lg text-black">₾</p>
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
                <p class="text-black font-semibold">მინ. ფასი</p>
                <p
                    @click="minPrice = 50000"
                    class="text-black text-sm mt-1 cursor-pointer"
                >
                    50,0000 ₾
                </p>
                <p
                    @click="minPrice = 100000"
                    class="text-black text-sm mt-1 cursor-pointer"
                >
                    100,0000 ₾
                </p>
                <p
                    @click="minPrice = 150000"
                    class="text-black text-sm mt-1 cursor-pointer"
                >
                    150,0000 ₾
                </p>
                <p
                    @click="minPrice = 200000"
                    class="text-black text-sm mt-1 cursor-pointer"
                >
                    200,0000 ₾
                </p>
            </div>
            <div class="w-1/2 h-auto flex flex-col justify-start items-start">
                <p class="text-black font-semibold">მაქს. ფასი</p>
                <p
                    @click="maxPrice = 50000"
                    class="text-black text-sm mt-1 cursor-pointer"
                >
                    50,0000 ₾
                </p>
                <p
                    @click="maxPrice = 100000"
                    class="text-black text-sm mt-1 cursor-pointer"
                >
                    100,0000 ₾
                </p>
                <p
                    @click="maxPrice = 150000"
                    class="text-black text-sm mt-1 cursor-pointer"
                >
                    150,0000 ₾
                </p>
                <p
                    @click="maxPrice = 200000"
                    class="text-black text-sm mt-1 cursor-pointer"
                >
                    200,0000 ₾
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
import useFilterStore from '@/store/filters'
import { ref, watch } from 'vue'

const filterStore = useFilterStore()
const maxPrice = ref()
const minPrice = ref()
const errorText = ref('')

const emits = defineEmits(['close'])

watch(
    () => maxPrice.value,
    () => {
        ;+maxPrice.value < +minPrice.value
            ? (errorText.value = 'გთხოვთ შეიყვანოთ ვალიდური რიცხვები')
            : (errorText.value = '')
    }
)

watch(
    () => minPrice.value,
    () => {
        ;+maxPrice.value < +minPrice.value
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

const clickHandler = () => {
    filterStore.price.max = +maxPrice.value
    filterStore.price.min = +minPrice.value
    emits('close')
}
</script>