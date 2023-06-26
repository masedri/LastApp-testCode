<template>
  <div class="flex justify-between gap-2 bg-[#F9F9FB] rounded-xl items-center px-4">
    <UILastIcon
      name="search"
      class="fill-black"
    />
    <UILastInput
      v-model="filter"
      class="w-full bg-[#F9F9FB] h-[48px]"
    ></UILastInput>
    <UILastIcon
      name="close"
      class="hover:drop-shadow"
      @click="$emit('close')"
    />
  </div>
</template>
<script setup lang="ts">
const filter = defineModel()
defineEmits<{
  close: [...playload: []]
}>()
</script>
