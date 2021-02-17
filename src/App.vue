<template>
  <!-- <main-layout></main-layout> -->
  <!-- <auth-layout></auth-layout> -->
  <!-- <div class="card">
    <h4>{{ layout }}</h4>
  </div> -->
  <component :is="layout + '-layout'" v-if="layout" />
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from '@/layout/MainLayout'
import AuthLayout from '@/layout/AuthLayout'

export default {
  setup() {
    const route = useRoute()
    console.log('meta', route.meta)

    const layout = computed(() => route.meta.layout)
    return {
      layout,
    }
  },
  components: { MainLayout, AuthLayout },
}
</script>
