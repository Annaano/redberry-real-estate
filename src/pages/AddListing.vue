<template>
    <Header />
    <div class="w-full h-auto flex justify-center items-center py-16">
        <div class="w-1/2 h-auto flex flex-col justify-start items-start">
            <div class="w-full h-10 flex justify-center items-center">
                <p class="text-black font-medium text-3xl">
                    ლისტინგის დამატება
                </p>
            </div>
            <div
                class="w-full h-14 flex flex-col justify-start items-start mt-16 space-y-6"
            >
                <p class="text-black">გარიგების ტიპი</p>
                <div
                    class="w-full h-auto flex justify-start items-center space-x-6"
                >
                    <span class="flex justify-start items-center space-x-3">
                        <input
                            type="radio"
                            name="is_rental"
                            :value="1"
                            v-model="apartmentStore.is_rental"
                        />
                        <p class="text-black">ქირავდება</p>
                    </span>
                    <span class="flex justify-start items-center space-x-3">
                        <input
                            type="radio"
                            name="is_rental"
                            :value="0"
                            v-model="apartmentStore.is_rental"
                        />
                        <p class="text-black">იყიდება</p>
                    </span>
                </div>
            </div>
            <div
                class="w-full h-auto mt-20 flex flex-col justify-start items-start space-y-8"
            >
                <div class="w-full h-auto flex justify-start items-center">
                    <p class="text-xl text-black font-medium">მდებარეობა</p>
                </div>
                <div
                    class="w-full h-auto flex justify-center items-center space-x-6"
                >
                    <div
                        class="w-1/2 h-auto flex flex-col justify-start items-start space-y-2"
                    >
                        <p class="text-sm text-black">მისამართი *</p>
                        <input
                            v-model="apartmentStore.address"
                            type="text"
                            class="w-full h-10 rounded-xl border border-black px-2 text-sm"
                        />
                        <p
                            :class="[
                                ' text-sm',
                                formErrors.address
                                    ? 'text-red-500'
                                    : 'text-black',
                            ]"
                        >
                            მინიმუმ 2 სიმბოლო
                        </p>
                    </div>
                    <div
                        class="w-1/2 h-auto flex flex-col justify-start items-start space-y-2"
                    >
                        <p class="text-sm text-black">საფოსტო ინდექსი *</p>
                        <input
                            v-model="apartmentStore.zip_code"
                            type="text"
                            class="w-full h-10 rounded-xl border border-black px-2 text-sm"
                        />
                        <p
                            :class="[
                                ' text-sm',
                                formErrors.zip_code
                                    ? 'text-red-500'
                                    : 'text-black',
                            ]"
                        >
                            მხოლოდ ციფრები
                        </p>
                    </div>
                </div>
                <div
                    class="w-full h-auto flex justify-center items-center space-x-6"
                >
                    <div
                        class="w-1/2 h-auto flex flex-col justify-start items-start space-y-2"
                    >
                        <p
                            :class="[
                                ' text-sm',
                                formErrors.region_id
                                    ? 'text-red-500'
                                    : 'text-black',
                            ]"
                        >
                            რეგიონი *
                        </p>
                        <select
                            v-model="apartmentStore.region_id"
                            class="w-full h-10 rounded-xl border border-black px-2"
                        >
                            <option
                                v-for="region in regions"
                                :key="region.id"
                                :value="region.id"
                            >
                                {{ region.name }}
                            </option>
                        </select>
                    </div>
                    <div
                        class="w-1/2 h-auto flex flex-col justify-start items-start space-y-2"
                    >
                        <p
                            :class="[
                                ' text-sm',
                                formErrors.city_id
                                    ? 'text-red-500'
                                    : 'text-black',
                            ]"
                        >
                            ქალაქი *
                        </p>
                        <select
                            v-model="apartmentStore.city_id"
                            name="city_id"
                            class="w-full h-10 rounded-xl border border-black px-2"
                        >
                            <option
                                v-for="city in filteredCities"
                                :key="city.id"
                                :value="city.id"
                            >
                                {{ city.name }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <div
                class="w-full h-auto mt-16 flex flex-col justify-start items-start space-y-8"
            >
                <p class="text-xl font-medium text-black">ბინის დეტალები</p>
                <div
                    class="w-full h-auto flex justify-start items-start space-x-6"
                >
                    <div
                        class="w-1/2 h-auto flex flex-col justify-start items-start space-y-2"
                    >
                        <p class="text-sm text-black">ფასი *</p>
                        <input
                            v-model="apartmentStore.price"
                            type="number"
                            class="w-full h-10 rounded-xl border border-black px-2 text-sm"
                        />
                        <p
                            :class="[
                                ' text-sm',
                                formErrors.price
                                    ? 'text-red-500'
                                    : 'text-black',
                            ]"
                        >
                            მხოლოდ ციფრები
                        </p>
                    </div>
                    <div
                        class="w-1/2 h-auto flex flex-col justify-start items-start space-y-2"
                    >
                        <p class="text-sm text-black">ფართობი *</p>
                        <input
                            v-model="apartmentStore.area"
                            type="number"
                            class="w-full h-10 rounded-xl border border-black px-2 text-sm"
                        />
                        <p
                            :class="[
                                ' text-sm',
                                formErrors.area ? 'text-red-500' : 'text-black',
                            ]"
                        >
                            მხოლოდ ციფრები
                        </p>
                    </div>
                </div>
                <div
                    class="w-full h-auto flex justify-start items-start space-x-6"
                >
                    <div
                        class="w-1/2 h-auto flex flex-col justify-start items-start space-y-2"
                    >
                        <p class="text-sm text-black">
                            საძინებლების რაოდენობა *
                        </p>
                        <input
                            v-model="apartmentStore.bedrooms"
                            type="number"
                            class="w-full h-10 rounded-xl border border-black px-2 text-sm"
                        />
                        <p
                            :class="[
                                ' text-sm',
                                formErrors.bedrooms
                                    ? 'text-red-500'
                                    : 'text-black',
                            ]"
                        >
                            მხოლოდ ციფრები
                        </p>
                    </div>
                </div>
                <div
                    class="w-full h-auto flex flex-col justify-start items-start space-y-3"
                >
                    <p class="text-black">აღწერა *</p>
                    <textarea
                        v-model="apartmentStore.description"
                        class="w-full h-[135px] border border-black rounded-xl"
                    ></textarea>
                    <p
                        :class="[
                            ' text-sm',
                            formErrors.address ? 'text-red-500' : 'text-black',
                        ]"
                    >
                        მინიმუმ 5 სიტყვა
                    </p>
                </div>
                <div
                    class="w-full h-auto flex flex-col justify-start items-start space-y-3"
                >
                    <p
                        :class="[
                            ' text-sm',
                            formErrors.image ? 'text-red-500' : 'text-black',
                        ]"
                    >
                        ატვირთეთ ფოტო *
                    </p>
                    <div
                        class="w-full h-[135px] border border-black border-dashed flex justify-center items-center rounded-xl relative"
                    >
                        <input
                            type="file"
                            class="absolute top-0 left-0 w-full h-full opacity-0"
                            @input="handleImageUpload"
                        />
                        <Icon icon="add-photo" size="size-6" />
                    </div>
                </div>
                <div
                    class="w-full h-auto mt-20 flex flex-col justify-start items-start space-y-6"
                >
                    <div class="w-full h-auto flex justify-start items-center">
                        <p class="text-xl text-black font-medium">აგენტი</p>
                    </div>
                    <div
                        class="w-full h-auto flex justify-start items-center space-x-6"
                    >
                        <div
                            class="w-1/2 h-auto flex flex-col justify-start items-start space-y-2"
                        >
                            <p
                                :class="[
                                    ' text-sm',
                                    formErrors.address
                                        ? 'text-red-500'
                                        : 'text-black',
                                ]"
                            >
                                აირჩიეთ *
                            </p>
                            <select
                                v-model="apartmentStore.agent_id"
                                name=""
                                id=""
                                class="w-full h-10 rounded-xl border border-black px-2"
                            >
                                <option
                                    v-for="agent in agents"
                                    :key="agent.id"
                                    :value="agent.id"
                                >
                                    {{ agent.name + ' ' + agent.surname }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="mt-10 w-full flex justify-end items-center h-auto space-x-4"
            >
                <Button @click="router.push('/')" title="გაუქმება" type="outline" />
                <Button
                    :disabled="submitDisabled"
                    @click="submit"
                    title="დაამატე ლისტინგი"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Button from '@/components/Button.vue'
import Icon from '@/components/Icon.vue'
import useApartmentStore from '@/store/apartment.js'
import axios from '@/plugins/axios'
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const apartmentStore = useApartmentStore()
const router=useRouter()

const regions = ref([])
const cities = ref([])
const filteredCities = ref([])
const agents = ref([])
const formErrors = reactive({
    address: 'მინიმუმ 2 სიმბოლო',
    is_rental: '',
    zip_code: 'მხოლოდ ციფრები',
    region_id: 'required',
    city_id: 'required',
    description: 'მინიმუმ 5 სიტყვა',
    price: 'მხოლოდ ციფრები',
    area: 'მხოლოდ ციფრები',
    bedrooms: 'მხოლოდ ციფრები',
    image: 'required',
})

onMounted(async () => {
    const fetchedRegions = await axios.get('/regions')
    regions.value = fetchedRegions.data
    const fetchedCities = await axios.get('/cities')
    cities.value = fetchedCities.data
    const fetchedAgents = await axios.get('/agents')
    agents.value = fetchedAgents.data
})

watch(
    () => apartmentStore.address,
    () => {
        if (apartmentStore.address.length > 2) {
            formErrors.address = ''
        } else {
            formErrors.address = 'სავალდებულო ველი მინიმუმ ორი სიმბოლო'
        }
    }
)

watch(
    () => apartmentStore.region_id,
    () => {
        if (apartmentStore.region_id) {
            formErrors.region_id = ''
        }
        filteredCities.value = cities.value.filter(
            (city) => city.region_id === apartmentStore.region_id
        )
    }
)

watch(
    () => apartmentStore.city_id,
    () => {
        if (apartmentStore.city_id) {
            formErrors.city_id = ''
        }
    }
)

watch(
    () => apartmentStore.zip_code,
    () => {
        apartmentStore.zip_code = apartmentStore.zip_code.replace(/\D/g, '')
        if (apartmentStore.zip_code.length > 0) {
            formErrors.zip_code = ''
        } else {
            formErrors.zip_code = 'სავალდებულო'
        }
    }
)

watch(
    () => apartmentStore.area,
    () => {
        if (apartmentStore.area) {
            formErrors.area = ''
        }
    }
)

watch(
    () => apartmentStore.bedrooms,
    () => {
        if (apartmentStore.bedrooms) {
            formErrors.bedrooms = ''
        }
    }
)

watch(
    () => apartmentStore.price,
    () => {
        if (apartmentStore.price) {
            formErrors.price = ''
        }
    }
)

watch(
    () => apartmentStore.description,
    () => {
        if (
            apartmentStore.description
                .trim()
                .split(/\s+/)
                .filter((word) => word.length > 0).length >= 5
        ) {
            formErrors.description = ''
        } else {
            formErrors.description = 'მინიმუმ 5 სიტყვა'
        }
    }
)

const handleImageUpload = (e) => {
    apartmentStore.image = e.target.files[0]
    formErrors.image = ''
}

const isEmpty = (value) => {
    return (
        value === null ||
        value === undefined ||
        value === '' ||
        (Array.isArray(value) && value.length === 0)
    )
}

const checkIfAllEmpty = (obj) => {
    return Object.values(obj).every(isEmpty)
}

const submitDisabled = computed(() => {
    if (!checkIfAllEmpty(formErrors)) {
        return true
    } else {
        return false
    }
})

const submit = async () => {
    if (checkIfAllEmpty(formErrors)) {
        const formData = new FormData()
        formData.append('address', apartmentStore.address)
        formData.append('zip_code', apartmentStore.zip_code)
        formData.append('is_rental', apartmentStore.is_rental)
        formData.append('agent_id', apartmentStore.agent_id)
        formData.append('region_id', apartmentStore.region_id)
        formData.append('city_id', apartmentStore.city_id)
        formData.append('description', apartmentStore.description)
        formData.append('price', apartmentStore.price)
        formData.append('area', apartmentStore.area)
        formData.append('bedrooms', apartmentStore.bedrooms)
        formData.append('image', apartmentStore.image)

        const result = await axios.post('/real-estates', formData)

        if (result.status == 201) {
            localStorage.removeItem('apartment')
            window.location.href = '/'
        }
    }
}
</script>