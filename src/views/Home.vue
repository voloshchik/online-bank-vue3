<template>
  <app-page title="список заявок">
    <template #header>
      <button class="btn primary" @click="modal = true">Создать</button>
    </template>
    <request-table :requests="[]"></request-table>
    <teleport to="body">
      <app-modal v-if="modal" @close="close" title="Создать заявку">
        <request-modal />
      </app-modal>
    </teleport>
  </app-page>
</template>

<script>
import AppPage from '@/components/ui/AppPage'
import RequestTable from '../components/request/RequestTable.vue'
import { ref } from 'vue'
import AppModal from '../components/ui/AppModal.vue'
import RequestModal from '@/components/request/RequestModal'

export default {
  name: 'Home',
  setup() {
    const modal = ref(false)

    return {
      modal,
      close: () => (modal.value = false),
    }
  },
  components: { AppPage, RequestTable, AppModal, RequestModal },
}
</script>
