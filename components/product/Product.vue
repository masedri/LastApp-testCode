<template>
  <div class="flex flex-col gap-1 hover:drop-shadow bg-white rounded-xl p-2 transition ease-in">
    <UILastImage
      :src="image"
      class="h-[120px] rounded-xl object-contain"
    />
    <UILastText :text="name"></UILastText>
    <div class="flex justify-between font-semibold items-center text-center">
      <div>{{ price }} €</div>
      <div class="flex items-center gap-3">
        <UILastIcon
          name="rest"
          class="hover:scale-110 transition"
          :class="{ 'opacity-50': !amount }"
          @click="removeAmount"
        />
        <UILastText
          class="w-3"
          :text="modelValue.toString()"
        ></UILastText>
        <div
          class="bg-[#262638] rounded-full scale-105 p-0.5 hover:scale-125 transition"
          @click="addAmount"
        >
          <UILastIcon name="plus" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IProduct } from '@/repositories/catalog/types'
const props = defineProps<IProduct>()
const emit = defineEmits<{
  removeProduct: [price: number]
  addProduct: [price: number]
}>()

const modelValue = defineModel({ default: 0 })

watch(
  () => props.amount,
  () => {
    modelValue.value = props.amount
  },
  { immediate: true }
)

const addAmount = () => {
  modelValue.value += 1
  emit('addProduct', props.price)
}
const removeAmount = () => {
  if (modelValue.value === 0) return
  modelValue.value -= 1
  emit('removeProduct', -props.price)
}
</script>

<style scoped></style>
