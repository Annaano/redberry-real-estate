<template>
    <div
        :class="[
            'w-[282px] h-[198px] bg-white border-gray shadow-lg rounded-2xl absolute top-[calc(100%+14px)] left-0 duration-150 z-50 flex flex-col justify-start items-start origin-top p-6',
            isOpen ? 'scale-100 border' : 'scale-0',
        ]"
    >
        <p class="text-black font-medium">საძინებლების რაოდენობა</p>
        <input
            type="number"
            class="w-1/5 h-10 rounded-lg px-2 outline-none border border-black bg-transparent mt-2"
        />
    </div>
</template>
<script setup>
defineProps({
    isOpen: {
        type: Boolean,
        required: true,
    },
})
</script>