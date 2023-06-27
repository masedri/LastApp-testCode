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
          <div class="flex gap-1 items-center">
            <UILastIcon name="mini-start" />
            <div>{{ `${ratings.average} (${ratings.total})` }}</div>
          </div>
          <div class="flex gap-1 items-center">
            <UILastIcon name="mark" />
            <div>{{ distanceInKm }}km</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IRestaurantResponse } from '@/repositories/restaurants/types'
import { getDistance } from '~/utils/location'
import { useLocation } from '@/composables/useLocation'
const props = defineProps<IRestaurantResponse>()
const { coords } = useLocation()
const distanceInKm = ref(0)
watch(
  () => coords.value,
  () => {
    distanceInKm.value = getDistance(coords.value!, props.coordinates)
  }
)
</script>

<style scoped></style>
