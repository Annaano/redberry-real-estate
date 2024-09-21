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
            v-for="apartment in apartments"
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
import { computed, onMounted, ref } from 'vue'
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
        false
    }
})

onMounted(async () => {
    const data = await axios.get('/real-estates')
    apartments.value = data.data
})
</script>