<script setup lang="ts">
import Header from '@/pages/clientPages/header/ClientHeaderPage.vue'
import Footer from '@/pages/footer/footerView.vue'
import Artist from '@/pages/clientPages/artists/artistView.vue'
</script>

<template>
  <div class="main-container1">
    <Header />

    <main class="main1">
      <router-view />
    </main>

    <Artist />

    <Footer />
  </div>
</template>
