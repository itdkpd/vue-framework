import { defineStore } from 'pinia'

export default defineStore('login', {
  state: () => ({
    username: '',
    password: '',
  }),
  actions: {
    login() {
      console.log(this.username, this.password)
    },
    clearFields() {
      this.username = ''
      this.password = ''
    },
  },
})
