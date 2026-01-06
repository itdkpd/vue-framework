<script setup lang="ts">
import mainStore from '@/stores/mainStore'
import { computed } from 'vue'
// Stores
const store = mainStore()

// Computed
const userDetails = computed(() => store.userDetails)
</script>

<template>
  <div class="header-container">
    <RouterLink to="/" class="logo">Kitcode</RouterLink>
    <input id="header-menu-btn" class="header-menu-btn" type="checkbox" />
    <label class="header-menu-icon" for="header-menu-btn"><span class="navicon"></span></label>
    <ul class="header-menu">
      <li><RouterLink to="/about">About</RouterLink></li>
      <li>
        <a href="" :class="{ hide: userDetails.role }">{{ userDetails.role }}</a>
      </li>
      <li>
        <a href="" :class="{ hide: userDetails.userName }">{{ userDetails.userName }}</a>
      </li>
      <li><a href="">Logout</a></li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use './headerView';
</style>
