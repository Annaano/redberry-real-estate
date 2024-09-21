<template>
    <Header />
    <AgentModal :isOpen="uiStore.agentModalOpen" />
    <div class="w-full h-12 mb-4 px-40 mt-8">
        <div class="w-full h-full flex justify-between items-center">
            <Filters @filter="filterApartments" />
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
    <div class="w-full h-auto px-40 grid grid-cols-4 gap-5 pb-16 mt-8">
        <Card
            v-for="apartment in isFiltering ? filteredApartments : apartments"
            :key="apartment.id"
            :apartment="apartment"
        />
    </div>
</template>
<script setup>
import Header from '@/components/Header.vue'
import Button from '@/components/Button.vue'
import Card from '@/components/Card.vue'
import Filters from '@/components/Filters.vue'
import AgentModal from '@/components/AgentModal.vue'
import useUiStore from '@/store/ui'
import { onMounted, ref } from 'vue'
import axios from '@/plugins/axios'

const uiStore = useUiStore()
const apartments = ref([])
const filteredApartments = ref([])
const isFiltering = ref(false)

const filterApartments = (filter) => {
    isFiltering.value = true
    if ((filter.type = 'region')) {
        filteredApartments.value = apartments.value.filter((ap) =>
            filter.data.includes(ap.city.region_id)
        )
    }

    console.log(filteredApartments.value)
}

onMounted(async () => {
    const data = await axios.get('/real-estates')
    apartments.value = data.data
})
</script>