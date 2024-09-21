<template>
    <div
        class="w-full h-[100px] px-[162px] border-b border-b-[#DBDBDB] flex justify-start items-center"
    >
        <img
            @click="router.push('/')"
            class="cursor-pointer"
            src="@/assets/imgs/logo.png"
            alt=""
        />
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>