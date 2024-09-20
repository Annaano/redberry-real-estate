<template>
    <div
        class="col-span-1 h-[455px] bg-white shadow-lg flex flex-col justify-start items-start rounded-2xl overflow-hidden"
    >
        <div
            class="w-full h-[307px] border border-green-500 flex justify-center items-center relative"
        >
            <p class="text-black text-2xl">Image Goes Here</p>
            <div class="w-auto h-auto absolute left-3 top-3">
                <Tag title="იყიდება" />
            </div>
        </div>
        <div class="w-full flex-grow p-6 space-y-5">
            <div
                class="w-full h-auto flex flex-col justify-start items-start gap-[6px]"
            >
                <p class="text-black font-bold text-[28px]">80 000$</p>
                <div class="w-auto h-auto flex space-x-1">
                    <Icon icon="marker" size="size-5" color="text-gray" />
                    <p class="text-gray">თბილისი, ი. ჭავჭავაძის 53</p>
                </div>
            </div>
            <div
                class="w-full h-auto flex justify-start items-center space-x-8"
            >
                <span class="flex justify-start items-center space-x-[5px]">
                    <Icon icon="bed" size="size-6" color="text-gray" />
                    <p class="text-gray">2</p>
                </span>
                <span class="flex justify-start items-center space-x-[5px]">
                    <Icon icon="area" size="size-6 mt-2" color="text-gray" />
                    <p class="text-gray">54</p>
                </span>
                <span class="flex justify-start items-center space-x-[5px]">
                    <Icon icon="postal" size="size-6" color="text-gray" />
                    <p class="text-gray">0127</p>
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import Icon from '@/components/Icon.vue'
import Tag from '@/components/Tag.vue'
</script>