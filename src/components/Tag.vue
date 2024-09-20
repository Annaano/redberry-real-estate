<template>
    <div class="w-auto h-6 px-2 rounded-2xl bg-gray text-white text-sm">
        {{ title }}
    </div>
</template>
<script setup>
defineProps({
    title: {
        type: String,
        required: true,
        validator: (value) => ['იყიდება', 'ქირავდება'],
    },
})
</script>