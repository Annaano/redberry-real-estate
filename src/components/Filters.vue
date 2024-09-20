<template>
    <div
        class="w-auto h-full flex justify-start items-center p-1 border border-gray rounded-[10px] space-x-6"
    >
        <div
            class="w-auto h-full px-2 rounded-md flex justify-center items-center space-x-1"
        >
            <p class="text-black font-medium">რეგიონი</p>
            <Icon icon="down-arrow" size="size-5" color="text-black" />
        </div>
        <div
            class="w-auto h-full px-2 rounded-md flex justify-center items-center space-x-1"
        >
            <p class="text-black font-medium">საფასო კატეგორია</p>
            <Icon icon="down-arrow" size="size-5" color="text-black" />
        </div>
        <div
            class="w-auto h-full px-2 rounded-md flex justify-center items-center space-x-1"
        >
            <p class="text-black font-medium">ფართობი</p>
            <Icon icon="down-arrow" size="size-5" color="text-black" />
        </div>
        <div
            class="w-auto h-full px-2 rounded-md flex justify-center items-center space-x-1"
        >
            <p class="text-black font-medium">საძინებლის რაოდენობა</p>
            <Icon icon="down-arrow" size="size-5" color="text-black" />
        </div>
    </div>
</template>
<script setup>
import Icon from '@/components/Icon.vue'
</script>