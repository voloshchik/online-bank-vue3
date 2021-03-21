<template>
  <app-loader v-if="loading"></app-loader>
  <app-page back v-else-if="request" title="Заявка">
    <p><strong>Имя влалеца</strong>:{{ request.fio }}</p>
    <p><strong>Teлефон владельца</strong>:{{ request.phone }}</p>
    <p><strong>Сумма</strong>:{{ currency(request.amount) }}</p>
    <p><strong>Статус</strong>:<app-status :type="request.status" /></p>
  </app-page>
  <h3 class="text-center text-white" v-else>Заявки с id {{ id }}} не найдено</h3>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import AppPage from '@/components/ui/AppPage'
import { useStore } from 'vuex'
import AppLoader from '@/components/ui/AppLoader'
import AppStatus from '@/components/ui/AppStatus'
import { currency } from '@/utils/currency'

export default {
  setup() {
    const loading = ref(false)
    const route = useRoute()
    const store = useStore()
    const request = ref({})
    console.log(route.params.id)
    onMounted(async () => {
      loading.value = true
      request.value = await store.dispatch('request/loadById', route.params.id)
      console.log(request.value)
      loading.value = false
    })
    return {
      request,
      loading,
      id: route.params.id,
      currency,
    }
  },
  components: { AppLoader, AppStatus, AppPage },
}
</script>

<style></style>
