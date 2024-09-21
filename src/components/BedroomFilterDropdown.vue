<template>
    <div
        :class="[
            'w-[282px] h-[198px] bg-white border-gray shadow-lg rounded-2xl absolute top-[calc(100%+14px)] left-0 duration-150 z-50 flex flex-col justify-start items-start origin-top p-6',
            isOpen ? 'scale-100 border' : 'scale-0',
        ]"
    >
        <p class="text-black font-medium">საძინებლების რაოდენობა</p>
        <input
            v-model="bedrooms"
            type="number"
            class="w-1/5 h-10 rounded-lg px-2 outline-none border border-black bg-transparent mt-2"
        />
        <div class="w-full h-auto mt-6 flex justify-end items-center">
            <Button @click="clickHandler" title="არჩევა" />
        </div>
    </div>
</template>

<script setup>
import Button from '@/components/Button.vue'
import useFilterStore from '@/store/filters'
import { ref } from 'vue'

const filterStore = useFilterStore()
const bedrooms = ref(0)

const emits = defineEmits(['close'])

defineProps({
    isOpen: {
        type: Boolean,
        required: true,
    },
})

const clickHandler = () => {
    emits('close')
    filterStore.bedrooms = bedrooms.value
}
</script>