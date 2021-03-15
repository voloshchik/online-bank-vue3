<template>
  <app-page title="список заявок">
    <template #header>
      <button class="btn primary" @click="modal = true">Создать</button>
    </template>
    <request-table :requests="requests"></request-table>
    <teleport to="body">
      <app-modal v-if="modal" @close="close" title="Создать заявку">
        <request-modal @created="modal = false" />
      </app-modal>
    </teleport>
  </app-page>
</template>

<script>
import AppPage from '@/components/ui/AppPage'
import RequestTable from '../components/request/RequestTable.vue'
import { computed, ref } from 'vue'
import AppModal from '../components/ui/AppModal.vue'
import RequestModal from '@/components/request/RequestModal'
import { useStore } from 'vuex'

export default {
  name: 'Home',
  setup() {
    const modal = ref(false)
    const store = useStore()

    const requests = computed(() => store.getters['request/requests'])
    return {
      modal,
      close: () => (modal.value = false),
      requests,
    }
  },
  components: { AppPage, RequestTable, AppModal, RequestModal },
}
</script>
