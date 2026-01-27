<script setup lang="ts">
import Header from '@/pages/header/headerView.vue'
import SideMenu from '@/pages/sideMenu.vue'
import FooterView from '@/pages/footer/footerView.vue'

// Computed
// const userDetails = computed(() => store.userDetails)
</script>

<template>
  <main>
    <div class="main-container">
      <!-- <header class="header">
        <div id="notificationBoard" />
        <h1>Trade Finance System</h1>
        <div id="app-header-nav">
          <span id="app-user-details">
            <span
              id="app-user-role"
              :class="{
                hide: userDetails.role,
              }"
            >
              {{ userDetails.role }}
            </span>
            <span
              id="app-user-name"
              onClick=""
              :class="{
                hide: userDetails.userName,
              }"
            >
              {{ userDetails.userName }}
            </span>
            <span
              id="app-date-time"
              :class="{
                hide: userDetails.currentDate,
              }"
            >
              <span id="app-date">
                Today is {moment(userDetails.currentDate).format('dddd LL')}
              </span>
              &nbsp;
              <span id="app-time" />
            </span>
            <span id="app-logout" onClick="">
              <span>Logout</span>
            </span>
          </span>
        </div>
      </header> -->
      <div class="header">
        <Header />
      </div>
      <div class="menu">
        <SideMenu />
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
      <div class="main">
        <FooterView />
      </div>
    </div>
  </main>
</template>
