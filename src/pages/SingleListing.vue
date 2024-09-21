<template>
    <Header />
    <div class="w-full h-auto flex justify-start items-center px-40 mt-8">
        <Icon
            @click="router.push('/')"
            icon="back-arrow"
            size="size-8"
            color="text-black cursor-pointer"
        />
    </div>
    <div class="w-full h-[714px] px-40 flex justify-center items-center mt-8">
        <div class="w-full h-full flex justify-center items-center gap-16">
            <div
                class="w-3/5 h-full border-purple-500 border rounded-3xl flex justify-center items-center"
            >
                <img
                    :src="apartment?.image"
                    class="w-full h-full object-cover object-center"
                    alt=""
                />
            </div>
            <div
                class="w-2/5 h-full flex flex-col justify-start items-start py-8"
            >
                <p class="text-black text-5xl font-bold">
                    {{ apartment?.price }}ლ
                </p>
                <div
                    class="w-full h-auto flex flex-col justify-start items-start space-y-4 mt-6"
                >
                    <span class="flex justify-start items-center gap-[6px]">
                        <Icon
                            icon="marker"
                            size="size-[22px]"
                            color="text-gray"
                        />
                        <p class="text-gray text-2xl">
                            {{ apartment?.address }}
                        </p>
                    </span>
                    <span class="flex justify-start items-center gap-[6px]">
                        <Icon
                            icon="area"
                            size="size-[22px]"
                            color="text-gray"
                        />
                        <p class="text-gray text-2xl">
                            ფართი {{ apartment?.area }}
                        </p>
                    </span>
                    <span class="flex justify-start items-center gap-[6px]">
                        <Icon icon="bed" size="size-[22px]" color="text-gray" />
                        <p class="text-gray text-2xl">
                            საძინებელი {{ apartment?.bedrooms }}
                        </p>
                    </span>
                    <span class="flex justify-start items-center gap-[6px]">
                        <Icon
                            icon="postal"
                            size="size-[22px]"
                            color="text-gray"
                        />
                        <p class="text-gray text-2xl">
                            ფოსტის კოდი {{ apartment?.zip_code }}
                        </p>
                    </span>
                </div>
                <p class="text-gray mt-10">
                    {{ apartment?.description }}
                </p>
                <div class="w-full h-auto mt-8">
                    <AgentCard :agent="apartment?.agent" />
                </div>
                <div class="w-auto h-auto mt-8">
                    <Button
                        title="ლისტინგის წაშლა"
                        type="outline"
                        color="gray"
                    />
                </div>
            </div>
        </div>
    </div>
    <div class="w-full h-10 px-40 flex justify-center items-center mt-6">
        <p class="text-gray">
            გამოქვეყნების თარიღი:
            {{ String(apartment?.created_at).slice(0, 10) }}
        </p>
    </div>
    <div
        class="w-full h-auto flex justify-start items-center px-40 mt-16 mb-10"
    >
        <p class="text-black font-bold text-3xl">ბინები მსგავს ლოკაციაზე</p>
    </div>
    <div
        class="w-full h-[455px] px-40 flex justify-center items-center relative"
    >
        <CardSlider :apartments="sameLocationApartments" />
        <div
            id="prev-button"
            class="size-12 absolute left-20 top-1/2 -translate-y-1/2 z-50 flex justify-center items-center cursor-pointer"
        >
            <Icon icon="slider-arrow" size="size-10" />
        </div>
        <div
            id="next-button"
            class="size-12 absolute right-20 top-1/2 -translate-y-1/2 z-50 flex justify-center items-center cursor-pointer"
        >
            <Icon icon="slider-arrow" size="size-10 rotate-180" />
        </div>
    </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Icon from '@/components/Icon.vue'
import AgentCard from '@/components/AgentCard.vue'
import Button from '@/components/Button.vue'
import CardSlider from '@/components/CardSlider.vue'
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import axios from '@/plugins/axios'

const route = useRoute()
const router = useRouter()
const apartment = ref()
const sameLocationApartments = ref([])

const getSameLocationApartments = async () => {
    const data = await axios.get('/real-estates')
    sameLocationApartments.value = data.data.filter(
        (ap) =>
            ap.city_id === apartment.value.city_id &&
            ap.id !== apartment.value.id
    )
}

onMounted(async () => {
    const data = await axios.get(`/real-estates/${route.params.id}`)
    apartment.value = data.data
    await getSameLocationApartments()
})
</script>