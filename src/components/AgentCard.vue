<template>
    <div
        class="w-full h-auto rounded-xl border border-gray p-6 flex flex-col justify-start items-start space-y-4"
    >
        <div class="w-auto h-auto flex justify-start items-start space-x-6">
            <div class="size-[72px] rounded-full overflow-hidden">
                <img
                    :src="agent?.avatar"
                    class="w-full h-full object-cover object-center"
                    alt=""
                />
            </div>
            <span class="flex flex-col justify-start items-start">
                <p class="text-black">
                    {{ agent?.name + ' ' + agent?.surname }}
                </p>
                <p class="text-gray">აგენტი</p>
            </span>
        </div>
        <div class="flex flex-col w-auto h-auto">
            <span class="flex justify-start items-center space-x-2">
                <Icon icon="mail" size="size-5" color="text-gray" />
                <p class="text-gray">{{ agent?.email }}</p>
            </span>
            <span class="flex justify-start items-center space-x-2">
                <Icon icon="phone" size="size-5" color="text-gray" />
                <p class="text-gray">{{ agent?.phone }}</p>
            </span>
        </div>
    </div>
</template>

<script setup>
import Icon from '@/components/Icon.vue'

defineProps(['agent'])
</script>