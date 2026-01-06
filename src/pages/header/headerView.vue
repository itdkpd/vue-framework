<script setup lang="ts">
import { ref, computed } from 'vue'
import CmpSvgLoader from '@/components/svgLoader/CmpSvgLoader.vue'
import mainStore from '@/stores/mainStore'

// Store
const store = mainStore()

// Computed
const userDetails = computed(() => store.userDetails)

// Toggle state
const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <div class="header-container">
    <RouterLink to="/" class="logo">Kitcode</RouterLink>
    <div class="menu-btn">
      <button @click="toggleMenu">
        <span>
          <CmpSvgLoader name="hamburger-icon" />
        </span>
      </button>
    </div>
    <ul class="header-menu" :class="{ open: isMenuOpen }">
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
.header-container {
  // 🔷 Base layout
  background-color: var(--secondary-color);
  box-shadow: 0.0625rem 0.0625rem 0.25rem rgb(0 0 0 / 10%);
  width: 100%;
  height: 3.5rem;
  z-index: 3;
  padding: 0 1rem;
  display: flex;
  flex-direction: row; // Mobile-first: horizontal layout
  align-items: center;
  justify-content: space-between;
  position: relative;

  // Optional: smooth gradient animation
  transition: background 0.5s ease-in-out;

  // 🔹 Logo
  .logo {
    font-size: 1.7rem;
    text-decoration: none;
    color: var(--white);
  }

  // 🍔 Menu button (visible on mobile)
  .menu-btn {
    display: flex;

    button {
      background: none;
      border: none;
      font-size: 1rem;
      cursor: pointer;
      color: var(--white);
    }
  }

  // 📂 Dropdown menu
  .header-menu {
    position: absolute;
    top: 3.5rem;
    left: 0;
    width: 100%;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    background-color: var(--secondary-color);
    padding: 0;

    &.open {
      max-height: 16rem;
    }

    li {
      list-style: none;

      a {
        display: block;
        padding: 1rem;
        text-decoration: none;
        color: var(--white);

        &:hover {
          background-color: var(--secondary-color);
        }
      }
    }
  }

  // 🖥️ Desktop layout (≥ 48em / 768px)
  @media (width >= 48em) {
    height: auto;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: var(--secondary-color);

    .logo {
      margin-bottom: 0;
      color: var(--color-text);
    }

    .menu-btn {
      display: none; // Hide menu button on desktop
    }

    .header-menu {
      position: static;
      max-height: none;
      display: flex;
      width: auto;

      li a {
        padding: 1rem 1.5rem;
        color: var(--color-text);
      }
    }
  }
}
</style>
