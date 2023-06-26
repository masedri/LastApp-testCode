<template>
  <div
    class="min-h-[201px] min-w-[313px] flex-col flex justify-start cursor-pointer gap-1"
    :class="{ 'max-w-[500px]': !main }"
  >
    <UILastImage
      :src="image"
      class="max-h-[121px] object-cover"
      :class="{ 'rounded-t-2xl': !main }"
    />
    <div
      class="relative pl-24"
      :class="{ 'pl-28': main }"
    >
      <UILastImage
        :src="logo"
        class="absolute -top-9 left-5 rounded-2xl"
        :class="[main ? 'w-20' : 'w-16']"
      />
      <div class="min-h-[60px] w-full flex flex-col gap-0.5 items-left text-left">
        <UILastTitle
          :title="name"
          subtitle="comida rápida"
        ></UILastTitle>
        <div class="flex gap-5 font-thin text-xs text-gray-400">
          <div>{{ `${ratings.average} (${ratings.total})` }}</div>
          <div>{{ coordinates.latitude }}</div>
          <div>{{ coordinates.longitude }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IRestaurantResponse } from '@/repositories/restaurants/types'
defineProps<IRestaurantResponse>()
</script>

<style scoped></style>
