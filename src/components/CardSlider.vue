<template>
    <Swiper
        v-bind="sliderSettings"
        class="w-full h-full flex justify-center items-center"
    >
        <SwiperSlide v-for="apartment in apartments" :key="apartment.id">
            <Card :apartment="apartment" />
        </SwiperSlide>
    </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import Card from '@/components/Card.vue'

import 'swiper/css'
import 'swiper/css/navigation'

defineProps(['apartments'])

const sliderSettings = {
    slidesPerView: 4,
    spaceBetween: 20,
    modules: [Navigation],
    navigation: {
        enabled: true,
        nextEl: '#next-button',
        prevEl: '#prev-button',
    },
    loop: false,
}
</script>