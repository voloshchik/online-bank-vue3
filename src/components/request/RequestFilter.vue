<template>
  <div class="filter">
    <div class="form-control">
      <input type="text" placeholder="Начитнайте писать имя" v-model="name" />
    </div>
    <div class="form-control">
      <select v-model="status">
        <option disabled selected>Выберети статус</option>
        <option value="done">Завершен</option>
        <option value="cancelled">Отменет</option>
        <option value="active">Активен</option>
        <option value="panging">Выполяняется</option>
      </select>
    </div>
    <button class="btn warning" @click="reset" v-if="isActive">Очистить</button>
  </div>
</template>

<script>
import { ref, watch, computed } from 'vue'
export default {
  emits: ['update:modelValue'],
  props: ['modelValue'],
  setup(_, { emit }) {
    const name = ref()
    const status = ref()
    watch([name, status], (values) => {
      emit('update:modelValue', {
        name: values[0],
        status: values[1],
      })
    })
    const isActive = computed(() => name.value || status.value)
    return {
      name,
      status,
      isActive,
      reset: () => {
        name.value = ''
        status.value = ''
      },
    }
  },
}
</script>

<style></style>
