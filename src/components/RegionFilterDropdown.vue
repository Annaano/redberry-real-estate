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
                v-for="region in regions"
                :key="region.id"
                class="col-span-1 flex justify-start items-center space-x-3"
            >
                <input
                    type="radio"
                    :value="region"
                    :name="`region-${region.id}`"
                    :id="`region-${region.id}`"
                    v-model="checkedRegion"
                />
                <label
                    :for="`region-${region.id}`"
                    class="text-sm text-black"
                    >{{ region?.name }}</label
                >
            </span>
        </div>
        <div class="w-full mt-4 flex justify-end items-center">
            <Button
                :disabled="checkedRegion == null"
                title="არჩევა"
                @click="clickHandler"
            />
        </div>
    </div>
</template>

<script setup>
import Button from '@/components/Button.vue'
import axios from '@/plugins/axios'
import { onMounted, ref } from 'vue'
import useFiltersStore from '@/store/filters'

const emits = defineEmits(['close'])
const filtersStore = useFiltersStore()

const regions = ref([])
const checkedRegion = ref()

defineProps({
    isOpen: {
        type: Boolean,
        required: true,
    },
})

onMounted(async () => {
    const data = await axios.get('/regions')
    regions.value = data.data
})

const clickHandler = () => {
    emits('close')
    filtersStore.region.id = checkedRegion.value.id
    filtersStore.region.name = checkedRegion.value.name
}
</script>