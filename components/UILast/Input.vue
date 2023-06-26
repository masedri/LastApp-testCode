<template>
  <input v-model="modelValue" />
</template>
<script setup lang="ts">
const modelValue = defineModel()
</script>
<style scoped>
*:focus {
  outline: none;
}
</style>
