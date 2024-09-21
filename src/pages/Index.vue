<template>
    <Header />
    <AgentModal :isOpen="uiStore.agentModalOpen" />
    <div class="w-full h-12 mb-4 px-40 mt-8">
        <div class="w-full h-full flex justify-between items-center">
            <Filters />
            <div
                class="w-auto h-auto flex justify-center items-center space-x-4"
            >
                <Button title="ლისტინგის დამატება" icon="plus" />
                <Button
                    @click="uiStore.openAgentModal"
                    title="აგენტის დამატება"
                    type="outline"
                    icon="plus"
                />
            </div>
        </div>
    </div>
    <div v-if="isFiltering" class="w-full h-auto px-40 py-4 flex space-x-4">
        <div
            v-if="filterStore.region.name"
            class="w-auto px-4 py-1 rounded-2xl border border-gray flex justify-center items-center space-x-2"
        >
            <p>{{ filterStore.region.name }}</p>
            <Icon
                @click="filterStore.region = {}"
                icon="close"
                size="size-5 cursor-pointer"
            />
        </div>
        <div
            v-if="filterStore.area.min"
            class="w-auto px-4 py-1 rounded-2xl border border-gray flex justify-center items-center space-x-2"
        >
            <p>
                {{ `${filterStore.area.min} მ2 - ${filterStore.area.max} მ2` }}
            </p>
            <Icon
                @click="filterStore.area = { min: null, max: null }"
                icon="close"
                size="size-5 cursor-pointer"
            />
        </div>
        <div
            v-if="filterStore.price.min"
            class="w-auto px-4 py-1 rounded-2xl border border-gray flex justify-center items-center space-x-2"
        >
            <p>
                {{ `${filterStore.price.min} ლ - ${filterStore.price.max} ლ` }}
            </p>
            <Icon
                @click="filterStore.price = { min: null, max: null }"
                icon="close"
                size="size-5 cursor-pointer"
            />
        </div>
        <div
            v-if="filterStore.bedrooms"
            class="w-auto px-4 py-1 rounded-2xl border border-gray flex justify-center items-center space-x-2"
        >
            <p>
                {{ `საძინებელი ${filterStore.bedrooms}` }}
            </p>
            <Icon
                @click="filterStore.bedrooms = null"
                icon="close"
                size="size-5 cursor-pointer"
            />
        </div>
    </div>
    <div class="w-full h-auto px-40 grid grid-cols-4 gap-5 pb-16 mt-8">
        <Card
            v-for="apartment in filteredApartments"
            :key="apartment.id"
            :apartment="apartment"
        />
    </div>
</template>
<script setup>
import Header from '@/components/Header.vue'
import Button from '@/components/Button.vue'
import Card from '@/components/Card.vue'
import Icon from '@/components/Icon.vue'
import Filters from '@/components/Filters.vue'
import AgentModal from '@/components/AgentModal.vue'
import useUiStore from '@/store/ui'
import useFilterStore from '@/store/filters'
import { computed, onMounted, ref, watch } from 'vue'
import axios from '@/plugins/axios'

const uiStore = useUiStore()
const filterStore = useFilterStore()
const apartments = ref([])

const isFiltering = computed(() => {
    if (
        filterStore.region.id ||
        filterStore.region.name ||
        filterStore.area.min ||
        filterStore.area.max ||
        filterStore.price.min ||
        filterStore.area.max ||
        filterStore.bedrooms
    ) {
        return true
    } else {
        return false
    }
})

const filteredApartments = computed(() => {
    return apartments.value.filter((apartment) => {
        // Determine if a filter is set for stricter matching
        const isRegionSet = filterStore.region.id !== null
        const isAreaSet =
            filterStore.area.min !== null || filterStore.area.max !== null
        const isPriceSet =
            filterStore.price.min !== null || filterStore.price.max !== null
        const isBedroomsSet = filterStore.bedrooms !== null

        // If at least one filter is set, apply all active filters
        const matchRegion =
            !isRegionSet || apartment.city.region.id === filterStore.region.id
        const matchArea =
            !isAreaSet ||
            ((!filterStore.area.min ||
                apartment.area >= filterStore.area.min) &&
                (!filterStore.area.max ||
                    apartment.area <= filterStore.area.max))
        const matchPrice =
            !isPriceSet ||
            ((!filterStore.price.min ||
                apartment.price >= filterStore.price.min) &&
                (!filterStore.price.max ||
                    apartment.price <= filterStore.price.max))
        const matchBedrooms =
            !isBedroomsSet || apartment.bedrooms === filterStore.bedrooms

        // Return true only if all filters that are set match
        return matchRegion && matchArea && matchPrice && matchBedrooms
    })
})

onMounted(async () => {
    const data = await axios.get('/real-estates')
    apartments.value = data.data
})
</script>