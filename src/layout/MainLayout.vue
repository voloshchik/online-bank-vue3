<template>
  <the-navbar></the-navbar>
  <the-sidebar />
  <div class="container with-nav">
    <app-alert></app-alert>
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from '@/TheNavbar'
import AppAlert from '../components/ui/AppAlert.vue'
import TheSidebar from '@/components/TheSidebar'

export default {
  components: { TheNavbar, AppAlert, TheSidebar },
}
</script>
AppAlert

<style></style>
