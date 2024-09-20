import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/Index.vue'
import SingleListing from '@/pages/SingleListing.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'index', component: Index },
        {
            path: '/listings/:id',
            name: 'single-listing',
            component: SingleListing,
        },
    ],
})

export default router