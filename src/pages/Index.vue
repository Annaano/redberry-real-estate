<template>
  <Header />
  <div class="w-full h-auto flex justify-center items-center mt-8">
      <div class="w-4/5 h-auto grid grid-cols-3 gap-6">
          <Card />
      </div>
  </div>
</template>
<script setup>
import Header from '@/components/Header.vue'
import Card from '@/components/Card.vue'
</script>