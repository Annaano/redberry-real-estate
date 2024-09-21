import { defineStore } from 'pinia'
const useApartmentStore = defineStore('apartment', {
    state: () => {
        return {
            address: '',
            image: '',
            region_id: 0,
            description: '',
            city_id: 0,
            zip_code: '',
            price: 0,
            area: 0,
            bedrooms: 0,
            is_rental: 0,
            agent_id: 0,
        }
    },
    persist: true,
})
export default useApartmentStore