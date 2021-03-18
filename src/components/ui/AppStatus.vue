<template>
  <span :class="['badge', className]">{{ text }}</span>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    type: {
      type: String,
      requered: true,
      validator(val) {
        return ['active', 'cancelled', 'done', 'pending'].includes(val)
      },
    },
  },
  setup(props) {
    const classesMap = {
      active: 'primary',
      cancelled: 'danger',
      done: 'primary',
      pending: 'warning',
    }

    const textMap = {
      active: 'Активен',
      concelled: 'Отменен',
      done: 'Выполнен',
      pending: 'Выполняется',
    }
    const className = ref(classesMap[props.type])
    const text = ref(textMap[props.type])
    return {
      className,
      text,
    }
  },
}
</script>

<style></style>
