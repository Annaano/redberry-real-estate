<template>
    <Header />
    <AgentModal :isOpen="uiStore.agentModalOpen" />
    <div
        :class="[
            'h-16 bg-primary fixed right-0 top-20 flex justify-start items-center rounded-l-lg cursor-pointer duration-150 shadow-2xl',
            infoIsOpen ? 'w-96' : 'w-16',
        ]"
    >
        <div
            @click="infoIsOpen = true"
            :class="[
                'flex justify-center items-center',
                infoIsOpen ? 'w-16 h-full' : 'w-full h-full',
            ]"
        >
            <Icon icon="info" color="text-white" size="size-6" />
        </div>
        <div
            :class="[
                'h-full flex justify-center items-center  bg-white',
                infoIsOpen ? 'w-full px-4' : 'w-0',
            ]"
        >
            <p v-if="infoIsOpen" class="text-primary text-sm">
                I know it is not best work but its all i can do :D
            </p>
        </div>
        <Icon
            v-if="infoIsOpen"
            @click="infoIsOpen = false"
            icon="close"
            size="size-5"
            color="text-black absolute right-1 top-1"
        />
    </div>
    <div class="w-full h-12 mb-4 px-40 mt-8">
        <div class="w-full h-full flex justify-between items-center">
            <Filters />
            <div
                class="w-auto h-auto flex justify-center items-center space-x-4"
            >
                <Button
                    @click="router.push('/add-listing')"
                    title="ლისტინგის დამატება"
                    icon="plus"
                />
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
import { useRouter } from 'vue-router'

const uiStore = useUiStore()
const filterStore = useFilterStore()
const apartments = ref([])
const router = useRouter()
const infoIsOpen = ref(false)

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