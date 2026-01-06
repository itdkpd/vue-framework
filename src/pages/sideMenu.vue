<script lang="ts" setup>
import CmpSvgLoader from '@/components/svgLoader/CmpSvgLoader.vue'
import { computed, ref } from 'vue'

const collapsed = ref(false)
const toggleMenu = () => (collapsed.value = !collapsed.value)

// const menuItems = [
//   { label: 'Dashboard', icon: 'dashboard-icon' },
//   { label: 'Settings', icon: 'settings-icon' },
//   { label: 'Profile', icon: 'profile-icon' },
//   { label: 'Logout', icon: 'logout-icon' },
// ]

const menuItems = computed(() => [
  { label: 'Dashboard', icon: 'dashboard-icon' },
  { label: 'Settings', icon: 'settings-icon' },
  { label: 'Profile', icon: 'profile-icon' },
  { label: 'Logout', icon: 'logout-icon' },
])
</script>

<!-- SideMenu.vue -->
<!-- <template>
  <div class="side-menu">
    <div class="side-menu-container">
      <div class="side-menu-menu-btn-container">
        <button class="menu-btn mobile-visible" @click="toggleMenu" aria-label="menu-button">
          <span>
            <CmpSvgLoader name="hamburger-icon" />
          </span>
        </button>
      </div>
      <nav :class="['side-menu-navigation', { collapsed }]">
        <div class="side-menu-navigation-menu-btn-container">
          <button class="menu-btn" @click="toggleMenu" aria-label="menu-button">
            <span>
              <CmpSvgLoader name="hamburger-icon" />
            </span>
          </button>
        </div>
        <ul>
          <li v-for="item in menuItems" :key="item.label">
            <CmpSvgLoader :name="item.icon" />
            <span v-if="!collapsed">{{ item.label }}</span>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template> -->

<template>
  <div class="side-menu">
    <div class="side-menu__button-group">
      <button
        class="side-menu__button side-menu__button--mobile"
        @click="toggleMenu"
        aria-label="menu-button"
      >
        <span>
          <CmpSvgLoader name="hamburger-icon" />
        </span>
      </button>
    </div>

    <nav :class="['side-menu__navigation', { 'side-menu__navigation--collapsed': collapsed }]">
      <div class="side-menu__button-group">
        <button class="side-menu__button" @click="toggleMenu" aria-label="menu-button">
          <span>
            <CmpSvgLoader name="hamburger-icon" />
          </span>
        </button>
      </div>

      <ul class="side-menu__list">
        <li class="side-menu__item" v-for="item in menuItems" :key="item.label">
          <CmpSvgLoader :name="item.icon" />
          <span v-if="!collapsed">{{ item.label }}</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.side-menu {
  height: 100%;
  border-bottom: solid 1px var(--secondary-color);

  &__button-group {
    display: flex;
    width: 100%;
  }

  &__button {
    background: none;
    border: none;
    color: var(--color-text);
    padding: 1rem;
    cursor: pointer;
    text-align: left;

    &:hover {
      background: var(--secondary-color);
    }

    &--mobile {
      display: none;

      @media only screen and (width <= 600px) {
        display: flex;
      }
    }
  }

  &__navigation {
    height: 100%;
    width: 15.625rem;
    background-color: var(--primary-color);
    box-shadow: 0.0625rem 0.0625rem 0.25rem 0 rgb(0 0 0 / 10%);
    transition: width 0.3s ease;
    color: var(--color-text);
    overflow: hidden;

    &--collapsed {
      width: 3.75rem;
    }

    @media only screen and (width <= 600px) {
      position: fixed;
      height: 100%;
      z-index: 2;
      transition: transform 0.3s ease;
      transform: translateX(0);
      top: 3.5rem;

      &--collapsed {
        @media only screen and (width <= 600px) {
          transform: translateX(-100%);
          width: 15.625rem;
        }
      }
    }
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__item {
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: var(--secondary-color);
    }

    span {
      white-space: nowrap;
    }
  }
}
</style>

<!-- <style scoped lang="scss">
.side-menu-container {
  height: 100%;

  .side-menu-menu-btn-container {
    display: flex;
    width: 100%;

    .menu-btn {
      background: none;
      border: none;
      color: var(--color-text);
      padding: 1rem;
      cursor: pointer;
      text-align: left;

      &:hover {
        background: var(--secondary-color);
      }
    }

    .mobile-visible {
      display: none;
    }

    @media only screen and (width <= 600px) {
      .mobile-visible {
        display: flex;
      }
    }
  }

  border-bottom: solid 1px var(--secondary-color);
}

.side-menu-navigation {
  height: 100%;
  width: 15.625rem;
  background-color: var(--primary-color);
  box-shadow: 0.0625rem 0.0625rem 0.25rem 0 rgb(0 0 0 / 10%);
  transition: width 0.3s ease;
  color: var(--color-text);
  overflow: hidden;

  &.collapsed {
    width: 3.75rem;
  }

  .side-menu-navigation-menu-btn-container {
    display: flex;
    width: 100%;

    .menu-btn {
      background: none;
      border: none;
      color: var(--color-text);
      padding: 1rem;
      cursor: pointer;
      text-align: left;

      &:hover {
        background: var(--secondary-color);
      }
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: center;
      padding: 1rem;
      gap: 1rem;
      cursor: pointer;
      transition: background 0.2s;

      &:hover {
        background: var(--secondary-color);
      }

      span {
        white-space: nowrap;
      }
    }
  }

  @media only screen and (width <= 600px) {
    position: fixed;
    height: 100%;
    z-index: 2;
    transition: transform 0.3s ease;
    transform: translateX(0);
    top: 3.5rem;

    .mobile-visible {
      display: flex;
    }

    &.collapsed {
      transform: translateX(-100%);
      width: 15.625rem;
    }
  }
}
</style> -->
