<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <app-alert></app-alert>
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from '@/TheNavbar'
import AppAlert from '../components/ui/AppAlert.vue'

export default {
  components: { TheNavbar, AppAlert },
}
</script>
AppAlert

<style></style>
