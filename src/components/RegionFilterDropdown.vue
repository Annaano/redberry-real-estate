<template>
    <div
        :class="[
            'w-[700px] h-[284px] bg-white border-gray shadow-lg rounded-2xl absolute top-[calc(100%+14px)] left-0 duration-150 z-[100]  flex flex-col justify-start items-start',
            isOpen ? 'p-6 border scale-100 origin-top' : 'scale-0 origin-top',
        ]"
    >
        <p class="font-medium">რეგიონის მიხედვით</p>
        <div class="w-full h-auto grid grid-cols-3 gap-4 py-4">
            <span
                v-for="n in 12"
                :key="n"
                class="col-span-1 flex justify-start items-center space-x-3"
            >
                <input type="checkbox" name="region" />
                <p class="text-sm text-black">ქართლი</p>
            </span>
        </div>
        <div class="w-full mt-4 flex justify-end items-center">
            <Button title="არჩევა" @click="console.log('hee')" />
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