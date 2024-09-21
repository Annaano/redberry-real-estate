import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/Index.vue'
import SingleListing from '@/pages/SingleListing.vue'
import AddListing from '@/pages/AddListing.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'index', component: Index },
        {
            path: '/listings/:id',
            name: 'single-listing',
            component: SingleListing,
        },
        {
            path: '/add-listing',
            name: 'add-listing',
            component: AddListing,
        },
    ],
})