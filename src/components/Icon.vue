<template>
    <component :is="icon" :class="[size, color, extraClass]" />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const props = defineProps({
    icon: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        default: 'w-10 h-10',
    },
    color: {
        type: String,
        default: undefined,
    },
    extraClass: {
        type: Array,
        default: [],
    },
})
const icon = defineAsyncComponent(() =>
    import(`@/assets/icons/${props.icon}.svg`)
)
</script>