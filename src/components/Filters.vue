<template>
    <div
        class="w-auto h-full flex justify-start items-center p-1 border border-gray rounded-[10px] space-x-6"
    >
        <div
            :class="[
                'w-auto h-full px-2 rounded-md flex justify-center items-center relative cursor-pointer',
                regionDropdown && 'bg-gray/10',
            ]"
        >
            <div
                @click="toggleRegionDropDown"
                class="flex items-center space-x-1"
            >
                <p class="text-black font-medium">რეგიონი</p>
                <Icon
                    icon="down-arrow"
                    size="size-5"
                    color="text-black duration-150"
                    :extra-class="[
                        'duration-150',
                        regionDropdown ? 'rotate-180' : 'rotate-0',
                    ]"
                />
            </div>
            <RegionFilterDropdown :isOpen="regionDropdown" />
        </div>
        <div
            :class="[
                'w-auto h-full px-2 rounded-md flex justify-center items-center space-x-1 relative cursor-pointer',
                priceDropdown && 'bg-gray/10',
            ]"
        >
            <div class="flex items-center" @click="togglePriceDropDown">
                <p class="text-black font-medium">საფასო კატეგორია</p>
                <Icon
                    icon="down-arrow"
                    size="size-5"
                    color="text-black duration-150"
                    :extra-class="[
                        'duration-150',
                        priceDropdown ? 'rotate-180' : 'rotate-0',
                    ]"
                />
            </div>
            <PriceFilterDropdown :isOpen="priceDropdown" />
        </div>
        <div
            :class="[
                'w-auto h-full px-2 rounded-md flex justify-center items-center space-x-1 relative cursor-pointer',
                areaDropdown && 'bg-gray/10',
            ]"
        >
            <div
                @click="toggleAreaDropDown"
                class="flex items-center space-x-1"
            >
                <p class="text-black font-medium">ფართობი</p>
                <Icon
                    icon="down-arrow"
                    size="size-5"
                    color="text-black duration-150"
                    :extra-class="[
                        'duration-150',
                        areaDropdown ? 'rotate-180' : 'rotate-0',
                    ]"
                />
            </div>
            <AreaFilterDropDown :is-open="areaDropdown" />
        </div>
        <div
            :class="[
                'w-auto h-full px-2 rounded-md flex justify-center items-center space-x-1 relative cursor-pointer',
                bedroomsDropdown && 'bg-gray/10',
            ]"
        >
            <div
                @click="toggleBedroomsDropDown"
                class="flex justify-center space-x-1"
            >
                <p class="text-black font-medium">საძინებლების რაოდენობა</p>
                <Icon
                    icon="down-arrow"
                    size="size-5"
                    color="text-black duration-150"
                    :extra-class="[
                        'duration-150',
                        bedroomsDropdown ? 'rotate-180' : 'rotate-0',
                    ]"
                />
            </div>
            <BedroomFilterDropdown :is-open="bedroomsDropdown" />
        </div>
    </div>
</template>
<script setup>
import Icon from '@/components/Icon.vue'
import { ref } from 'vue'
import PriceFilterDropdown from '@/components/PriceFilterDropdown.vue'
import RegionFilterDropdown from '@/components/RegionFilterDropdown.vue'
import AreaFilterDropDown from '@/components/AreaFilterDropDown.vue'
import BedroomFilterDropdown from '@/components/BedroomFilterDropdown.vue'
const regionDropdown = ref(false)
const priceDropdown = ref(false)
const areaDropdown = ref(false)
const bedroomsDropdown = ref(false)
const toggleRegionDropDown = () => {
    regionDropdown.value = !regionDropdown.value
    priceDropdown.value = false
    areaDropdown.value = false
    bedroomsDropdown.value = false
}
const togglePriceDropDown = () => {
    regionDropdown.value = false
    priceDropdown.value = !priceDropdown.value
    areaDropdown.value = false
    bedroomsDropdown.value = false
}
const toggleAreaDropDown = () => {
    regionDropdown.value = false
    priceDropdown.value = false
    areaDropdown.value = !areaDropdown.value
    bedroomsDropdown.value = false
}
const toggleBedroomsDropDown = () => {
    regionDropdown.value = false
    priceDropdown.value = false
    areaDropdown.value = false
    bedroomsDropdown.value = !bedroomsDropdown.value
}
</script>