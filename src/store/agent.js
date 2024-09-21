import { defineStore } from 'pinia'
const useAgentStore = defineStore('agent', {
    state: () => {
        return {
            name: '',
            surname: '',
            email: '',
            phone: '',
            image: '',
        }
    },
})
export default useAgentStore