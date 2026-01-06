<script setup lang="ts">
import CmpInput from '@/components/input/CmpInput.vue'
import loginStore from '@/pages/login/store'
import { TriggerType } from '@/components/input/enums'

// Stores
const store = loginStore()

// Methods
const authenticate = () => {
  store.login()
}

const clearFields = () => {
  store.clearFields()
}
</script>

<template>
  <div class="login-container">
    <div class="flex-row">
      <div class="flex-24">
        <h1>Sign In</h1>
      </div>
    </div>
    <div class="login-form-container">
      <form @submit.prevent="authenticate">
        <div class="flex-row">
          <div class="flex-24">
            <label htmlFor="Username">User Name</label>
          </div>
          <div class="flex-23">
            <CmpInput
              v-model="store.username"
              :trigger="TriggerType.CHANGE"
              name="username"
              required
            />
          </div>
        </div>
        <div class="flex-row mt-2">
          <div class="flex-24">
            <label htmlFor="Password">Password</label>
          </div>
          <div class="flex-23">
            <CmpInput
              v-model="store.password"
              :trigger="TriggerType.CHANGE"
              type="password"
              name="password"
              required
            />
          </div>
        </div>
        <div class="flex-row mt-5">
          <div class="flex-24">
            <input
              type="submit"
              value="Login"
              class="btn-success"
              :disabled="!store.username || !store.password"
            />
          </div>
        </div>
        <div class="flex-row mt-5">
          <div class="flex-24">
            <input type="button" value="Clear" class="btn-success" @click="clearFields" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './loginPage';
</style>
