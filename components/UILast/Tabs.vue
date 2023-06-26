<template>
  <div
    v-if="tabs?.length"
    class="flex gap-5 py-2 relative"
  >
    <div
      v-for="(tab, index) in tabs"
      :key="tab"
      class="w-20 h-10 justify-center flex items-center font-sans capitalize cursor-pointer tab hover:shadow hover:rounded-full"
      :class="{ 'text-white active': currentTabIndex === index }"
      @click="setIndexTab(index)"
    >
      {{ tab }}
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{ tabs: string[] }>()

const currentTabIndex = defineModel<number>({ required: true })
const directionX = ref('')

const setIndexTab = (index: number) => {
  if (index === currentTabIndex.value) return
  directionX.value = currentTabIndex.value > index ? '-5em' : '5em'
  currentTabIndex.value = index
}
</script>
<style scoped>
.tab::before {
  content: '';
  z-index: -1;
  width: 5em;
  height: 2.5em;
  position: absolute;
  border-radius: 99px;
  transform: translateX(v-bind(directionX));
}

.active::before {
  transform: translateX(0px);
  background-color: #262638;
  transition: 0.25s ease-in-out;
}
</style>
