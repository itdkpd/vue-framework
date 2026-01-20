<script setup lang="ts">
import Header from '@/pages/clientPages/header/ClientHeaderPage.vue'
// Computed
// const userDetails = computed(() => store.userDetails)
</script>

<template>
  <main>
    <div class="main-container1">
      <Header />
      <div class="main1">
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>
