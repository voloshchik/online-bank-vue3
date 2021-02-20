<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from '@/TheNavbar'

export default {
  components: { TheNavbar },
}
</script>

<style></style>
