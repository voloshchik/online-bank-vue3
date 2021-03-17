<template>
  <h4 v-if="requests.length === 0" class="text-center">Заявок пока нету!</h4>
  <table v-else class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>ФИО</th>
        <th>Телефон</th>
        <th>Сумма</th>
        <th>Статус</th>
        <th>Действия</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(r, idx) in requests" :key="r.id">
        <td>{{ idx + 1 }}</td>
        <td>{{ r.fio }}</td>
        <td>{{ r.phone }}</td>
        <td>{{ r.amount }}</td>
        <td>{{ r.status }}</td>
        <td>
          <router-link
            v-slot="{ navigate }"
            :to="{
              name: 'Request',
              params: {
                id: r.id,
              },
            }"
            custom
          >
            <button class="btn primary" @click="navigate">Open</button>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['requests'],
}
</script>

<style></style>
