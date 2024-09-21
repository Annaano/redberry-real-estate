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
                    class="w-4/5 h-full border-none bg-transparent outline-none px-2"
                    placeholder="მდე"
                />
                <div class="w-1/5 h-full flex justify-center items-center">
                    <p class="text-lg text-black">₾</p>
                </div>
            </div>
        </div>
        <div
            class="w-full h-auto flex justify-center items-center mt-6 space-x-6"
        >
            <div class="w-1/2 h-auto flex flex-col justify-start items-start">
                <p class="text-black font-semibold">მინ. ფასი</p>
                <p class="text-black text-sm mt-1">50,0000 ₾</p>
                <p class="text-black text-sm mt-1">100,0000 ₾</p>
                <p class="text-black text-sm mt-1">150,0000 ₾</p>
                <p class="text-black text-sm mt-1">200,0000 ₾</p>
            </div>
            <div class="w-1/2 h-auto flex flex-col justify-start items-start">
                <p class="text-black font-semibold">მაქს. ფასი</p>
                <p class="text-black text-sm mt-1">50,0000 ₾</p>
                <p class="text-black text-sm mt-1">100,0000 ₾</p>
                <p class="text-black text-sm mt-1">150,0000 ₾</p>
                <p class="text-black text-sm mt-1">200,0000 ₾</p>
            </div>
        </div>
        <div class="w-full h-auto mt-6 flex justify-end items-center">
            <Button title="არჩევა" />
        </div>
    </div>
</template>
<script setup>
import Button from '@/components/Button.vue'
defineProps({
    isOpen: {
        type: Boolean,
        required: true,
    },
})
</script>
src/components/RegionFilterDropdown.vue
