<template>
  <div class="container">
    <app-alert></app-alert>
    <router-view></router-view>
  </div>
</template>

<script>
import AppAlert from '@/components/ui/AppAlert'
export default {
  components: { AppAlert },
}
</script>

<style></style>
