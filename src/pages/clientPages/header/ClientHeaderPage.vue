<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
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

      <!-- Hamburger -->
      <button class="hamburger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Navigation -->
      <ul class="nav-links" :class="{ open: menuOpen }">
        <li>
          <RouterLink to="/" @click="menuOpen = false">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about" @click="menuOpen = false">Book</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" @click="menuOpen = false"
            >Tattoo After Care Products</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/contact" @click="menuOpen = false">More</RouterLink>
        </li>
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
  transition: all 0.4s ease;

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 75rem;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .logo-img {
    width: 100%;
    max-width: 22.25rem;
    height: auto;
    transition: all 0.4s ease;
  }

  .hamburger {
    display: none;
    flex-direction: column;
    gap: 0.4rem;
    background: none;
    border: none;
    cursor: pointer;

    span {
      width: 1.5rem;
      height: 0.15rem;
      background: var(--white);
      display: block;
    }
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;

    a {
      color: var(--white);
      text-decoration: none;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -0.25rem;
        width: 0;
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

/* Scroll effect */
.site-header.scrolled {
  background: rgb(0 0 0 / 85%);
  padding: 0.8rem 0;
  backdrop-filter: blur(0.375rem);
  box-shadow: 0 0.125rem 0.625rem rgb(0 0 0 / 40%);

  .logo-img {
    max-width: 15.375rem;
    height: auto;
  }
}

/* 📱 Mobile & Tablet */
@media (width <= 768px) {
  .site-header {
    .hamburger {
      display: flex;
    }
  }

  .nav-links {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 18rem;
    flex-direction: column;
    background: rgb(0 0 0 / 95%);
    padding-top: 6rem;
    transform: translateX(-100%);
    transition: transform 0.4s ease;
    z-index: 1001;

    &.open {
      transform: translateX(0);
    }

    li {
      padding: 1rem 1.5rem;
      text-align: left;
    }
  }
}

@media (width <= 1024px) {
  .logo-img {
    max-width: 18rem;
  }
}

@media (width <= 768px) {
  .logo-img {
    max-width: 14rem;
  }
}

@media (width <= 480px) {
  .logo-img {
    max-width: 11.5rem;
  }
}
</style>
