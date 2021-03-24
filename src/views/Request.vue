<template>
  <app-loader v-if="loading"></app-loader>

  <app-page back v-else-if="request" title="Заявка">
    <p><strong>Имя влалеца</strong>:{{ request.fio }}</p>
    <p><strong>Teлефон владельца</strong>:{{ request.phone }}</p>
    <p><strong>Сумма</strong>:{{ currency(request.amount) }}</p>
    <p><strong>Статус</strong>:<app-status :type="request.status" /></p>

    <div class="form-control">
      <label for="status">Статус</label>
      <select id="status" v-model="status">
        <option value="done">Завершен</option>
        <option value="cancelled">Отменен</option>
        <option value="active">Активный</option>
        <option value="pending">Выполняется</option>
      </select>
    </div>

    <button class="btn danger" @click="remove">Удалить</button>
    <button class="btn " @click="update" v-if="hasChanges">Обновить</button>
  </app-page>
  <h3 class="text-center text-white" v-else>Заявки с id {{ id }}} не найдено</h3>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AppPage from '@/components/ui/AppPage'
import { useStore } from 'vuex'
import AppLoader from '@/components/ui/AppLoader'
import AppStatus from '@/components/ui/AppStatus'
import { currency } from '@/utils/currency'

export default {
  setup() {
    const loading = ref(false)
    const status = ref()
    const route = useRoute()
    const store = useStore()
    const request = ref({})
    const router = useRouter()
    const hasChanges = computed(() => request.value.status !== status.value)
    console.log(route.params.id)
    const remove = async () => {
      console.log('remove')
      await store.dispatch('request/remove', route.params.id)
      router.push('/')
    }
    const update = async () => {
      console.log('update')
      const data = { ...request, id: route.params.id, status: status.value }
      await store.dispatch('request/update', data)

      request.value.status = status.value
    }
    onMounted(async () => {
      loading.value = true
      request.value = await store.dispatch('request/loadById', route.params.id)
      status.value = request.value.status
      loading.value = false
    })
    return {
      hasChanges,
      request,
      status,
      loading,
      id: route.params.id,
      currency,
      remove,
      update,
    }
  },
  components: { AppLoader, AppStatus, AppPage },
}
</script>

<style></style>
