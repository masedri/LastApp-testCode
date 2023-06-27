<template>
  <div class="flex flex-col h-screen relative">
    <UILastHeader />

    <slot name="header"></slot>
    <div class="flex justify-between px-5 w-full absolute top-20">
      <UILastIcon
        name="arrow"
        class="hover:scale-110 transition"
        @click="$router.back()"
      />
      <div class="flex gap-2">
        <UILastIcon
          name="search"
          class="bg-[#262638] opacity-80 rounded-full fill-white hover:scale-110 transition"
          @click="$emit('openSearch')"
        />
        <UILastIcon
          name="start"
          class="opacity-80 bg-[#262638] hover:bg-yellow-400 rounded-full hover:scale-110 transition"
          :class="{ 'bg-yellow-400': fav }"
          @click="fav = !fav"
        />
      </div>
    </div>
    <div class="flex flex-col gap-5 relative m-5 h-full overflow-hidden">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineEmits<{ openSearch: [...payload: any[]] }>()
const fav = ref(false)
</script>

<style scoped></style>
