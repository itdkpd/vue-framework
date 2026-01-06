<script setup lang="ts">
// Computed
// const userDetails = computed(() => store.userDetails)
</script>

<template>
  <main>
    <div class="main-container">
      <div class="header">
        <Header />
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>
