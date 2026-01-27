<script setup lang="ts">
import Header from '@/pages/clientPages/header/ClientHeaderPage.vue'
import Footer from '@/pages/footer/footerView.vue'
import Artist from '@/pages/clientPages/artists/artistView.vue'
import ActionCard from '@/components/actionFeature/clientActionFeature.vue'

const handleCardAction = (payload: { id?: string; index: number }) => {
  if (payload.id === undefined) {
    console.log('Button action clicked:', payload)
  } else {
    console.log('Link action clicked:', payload)
  }
}
</script>

<template>
  <div class="main-container1">
    <Header />

    <main class="main1">
      <router-view />
    </main>

    <Artist />

    <ActionCard
      :title="`OG TATTOO AND\nBARBER STUDIOS`"
      :actions="[{ type: 'button', label: 'Book Now' }]"
      @action="handleCardAction"
    />

    <Footer />
  </div>
</template>
