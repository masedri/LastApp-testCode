<template>
  <div class="flex flex-col">
    <UILastText
      :text="title"
      class="uppercase font-semibold"
    ></UILastText>
    <UILastText
      :text="subtitle"
      class="first-letter:capitalize font-light text-sm text-gray-400"
    ></UILastText>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>

<style></style>
