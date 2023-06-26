<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="open"
        ref="modal-backdrop"
        class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50 w-full h-full flex items-center justify-center px-5"
        @click.stop="open = false"
      >
        <div
          class="bg-white rounded-lg flex flex-col items-center justify-start overflow-hidden shadow-xl p-5 max-w-1/2 max-h-1/3 w-full h-[150px]"
          @click.stop=""
        >
          <div class="w-full justify-end flex">
            <UILastIcon
              name="close"
              @click.stop="close"
            ></UILastIcon>
          </div>
          <div
            ref="modal"
            class="h-full items-center flex"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            Compra realiza correctamente
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<script setup lang="ts">
const open = defineModel<boolean>()
const router = useRouter()
const close = () => {
  open.value = false
  router.push('/')
}
</script>
<style scoped>
.fade-enter-active {
  transition: opacity 0.7s ease;
}
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
