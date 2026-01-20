<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="['site-header', { scrolled }]">
    <nav class="nav-container">
      <div class="logo">
        <RouterLink to="/">
          <img class="logo-img" src="@/assets/images/OGLogo.png" alt="Logo" />
        </RouterLink>
      </div>

      <ul class="nav-links">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">Book</RouterLink></li>
        <li><RouterLink to="/contact">Tattoo After Care Products</RouterLink></li>
        <li><RouterLink to="/contact">More</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.site-header {
  background: transparent;
  color: var(--white);
  padding: 1.5rem 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  /* Smooth transitions */
  transition:
    background 0.4s ease,
    margin 0.4s ease,
    padding 0.4s ease,
    box-shadow 0.4s ease,
    height 0.4s ease,
    width 0.4s ease,
    backdrop-filter 0.4s ease;

  .nav-container {
    // display: flex;
    // justify-content: space-between;
    // align-items: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 75rem;
    margin: 0 auto;
  }

  .logo-img {
    transition:
      height 0.4s ease,
      width 0.4s ease;
    width: 22.25rem;
    height: 4rem;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    list-style-type: none;
    padding: 0;

    a {
      color: var(--white);
      text-decoration: none;
      position: relative;
      transition: color 0.3s ease;

      &:hover {
        color: var(--white);
      }

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -0.25rem;
        width: 0%;
        height: 0.125rem;
        background: var(--white);
        transition: width 0.3s ease;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
}

/* Smooth scroll state */
.site-header.scrolled {
  background: rgb(0 0 0 / 85%);
  padding: 0.8rem 2rem;
  backdrop-filter: blur(0.375rem);
  box-shadow: 0 0.125rem 0.625rem rgb(0 0 0 / 40%);

  .logo-img {
    width: 15.375rem;
    height: 2.75rem;
  }
}
</style>
