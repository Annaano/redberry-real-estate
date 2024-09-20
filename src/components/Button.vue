<template>
    <button class="w-auto h-12 px-[10px] gap-2 text-white">{{ title }}</button>
</template>
<script setup>
const props = defineProps(['title', 'color', 'disabled', 'icon'])
</script>