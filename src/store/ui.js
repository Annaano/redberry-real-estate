import { defineStore } from 'pinia'
const useUiStore = defineStore('ui', {
    state: () => {
        return {
            agentModalOpen: false,
        }
    },
    actions: {
        openAgentModal() {
            this.agentModalOpen = true
        },
        closeAgentModal() {
            this.agentModalOpen = false
        },
    },
})
export default useUiStore