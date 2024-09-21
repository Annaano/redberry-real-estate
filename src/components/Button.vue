<template>
    <button
        :class="[
            'w-auto h-10 px-[10px] gap-2 rounded-xl flex justify-center items-center text-sm',
            buttonColor,
            disabled && 'cursor-not-allowed',
        ]"
        :disabled="disabled"
    >
        <Icon v-if="icon" :icon="icon" size="size-[22px]" :color="iconColor" />
        {{ title }}
    </button>
</template>

<script setup>
import Icon from '@/components/Icon.vue'
import { computed } from 'vue'

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    disabled: {
        type: Boolean,
        required: false,
        default: false,
    },
    color: {
        type: String,
        required: false,
        default: 'primary',
    },
    type: {
        type: String,
        required: false,
        default: 'filled',
        validator: (value) => ['filled', 'outline'].includes(value),
    },
    icon: {
        type: String,
        required: false,
        default: '',
    },
})

const buttonColor = computed(() => {
    switch (props.color) {
        case 'primary':
            return props.type === 'outline'
                ? 'border border-primary text-primary'
                : 'bg-primary hover:bg-primary-darker duration-150 text-white'
        case 'gray':
            return props.type === 'outline'
                ? 'border border-gray text-gray'
                : 'bg-gray text-white'
        default:
            return props.type === 'outline'
                ? 'border border-primary text-primary'
                : 'bg-primary hover:bg-primary-darker duration-150 text-white'
    }
})

const iconColor = computed(() => {
    switch (props.color) {
        case 'primary':
            return props.type === 'outline' ? 'text-primary' : 'text-white'
        case 'gray':
            return props.type === 'outline' ? 'text-gray' : 'text-white'
        default:
            return props.type === 'outline' ? 'text-primary' : 'text-white'
    }
})
</script>