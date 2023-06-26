<template>
  <component
    :is="icon"
    class="cursor-pointer"
  />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const props = defineProps<{
  name: string
}>()

const icon = defineAsyncComponent(() => import(`../../assets/icons/${props.name.toLowerCase()}.svg?component`))
</script>
