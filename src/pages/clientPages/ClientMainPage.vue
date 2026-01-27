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
<style scoped lang="scss">
.main-container1 {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

.main1 {
  flex: 1;
  padding-top: 96px; 
}
</style>