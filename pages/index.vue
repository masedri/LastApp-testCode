<template>
  <div>
    <UILastText
      text="Restaurantes"
      class="uppercase font-semibold"
    />
    <div class="grid mt-5 grid-flow-row sm:grid-cols-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
      <Restaurant
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        v-bind="restaurant"
        class="rounded-2xl shadow cursor-pointer"
        @click="navigateTo({ path: `/restaurants/${restaurant.id}` })"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IRestaurantResponse } from '~/repositories/restaurants/types'

const { $api } = useNuxtApp()
const restaurants = await $api.restaurants?.getRestaurants()
useState<IRestaurantResponse[]>('restaurants', () => restaurants?.value!)
</script>

<style scoped></style>
