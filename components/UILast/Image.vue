<template>
  <img
    v-bind="props"
    :src="imageValidUrl"
  />
</template>
<script setup lang="ts">
const props = defineProps<{
  src: string
  alt?: string
}>()
import { isImgUrl } from '@/utils/index'

const imageValidUrl = (await isImgUrl(props.src))
  ? props.src
  : 'https://www.charlotteathleticclub.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png'
</script>
