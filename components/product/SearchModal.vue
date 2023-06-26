<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="open"
        class="flex flex-col absolute top-0 h-full w-full z-50 bg-white px-5 py-14 gap-3"
      >
        <UILastSearch
          v-model="query"
          class="mb-5"
          @close="close"
        ></UILastSearch>
        <TransitionGroup
          tag="ul"
          name="fade"
          appear
        >
          <li
            v-for="product in products"
            :key="product?.name"
            class="cursor-pointer flex justify-between items-center hover:drop-shadow bg-white transition ease-in p-4 rounded-xl"
            @click="addProduct(product)"
          >
            <div class="flex gap-5 items-center">
              <UILastImage
                :src="product?.image"
                class="w-[60px] rounded-xl object-contain"
              />
              <div class="flex flex-col">
                <UILastText :text="product?.name"></UILastText>

                <div class="font-semibold">{{ product?.price }} €</div>
              </div>
            </div>
            <div class="bg-[#262638] rounded-full flex transform rotate-180">
              <UILastIcon name="arrow" />
            </div>
          </li>
        </TransitionGroup>
      </div>
    </Transition>
  </Teleport>
</template>
<script setup lang="ts">
import { IProduct } from '~/repositories/catalog/types'

const open = defineModel<boolean>()
const query = ref('')
const catalog = useState<Record<string, IProduct[]>>('catalog')

const emit = defineEmits<{ addProduct: [product: IProduct] }>()

const products = computed<IProduct[]>(() =>
  Object.values(catalog.value)
    .flat()
    .filter((product) => product.name.toLocaleLowerCase().includes(query.value))
)
const addProduct = (product: IProduct) => {
  emit('addProduct', { ...product, amount: 1 })
  close()
}

const close = () => {
  open.value = false
  query.value = ''
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
