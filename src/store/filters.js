import { defineStore } from 'pinia'

const useFilterStore = defineStore('filters', {
    state: () => {
        return {
            region: {
                id: null,
                title: null,
            },
            area: {
                min: null,
                max: null,
            },
            price: {
                min: null,
                max: null,
            },
            bedrooms: null,
        }
    },
})

export default useFilterStore