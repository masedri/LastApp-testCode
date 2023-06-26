<template>
  <NuxtLayout
    name="detail"
    @open-search="openSearch"
  >
    <template
      v-if="currentRestaurant"
      #header
    >
      <Restaurant
        main
        v-bind="currentRestaurant"
      />
    </template>
    <UILastTabs
      v-model="currentTab"
      :tabs="tabs"
    ></UILastTabs>
    <div
      v-if="show"
      class="grid grid-flow-row grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 h-full content-start overflow-y-scroll"
    >
      <TransitionGroup
        name="fade"
        appear
      >
        <Product
          v-for="product in products"
          :key="product.name"
          v-bind="product"
          v-model="product.amount"
          @add-product="calcTotal"
          @remove-product="calcTotal"
        >
        </Product>
      </TransitionGroup>
      <Transition
        name="fade"
        appear
      >
        <div class="flex absolute w-full bottom-5 justify-center">
          <button
            class="w-full md:w-1/2 lg:w-1/3 max-h-[56px] text-center rounded-2xl bg-[#262638] p-4 text-white cursor-pointer text-lg"
            :class="{ 'opacity-70': !total }"
            :disabled="!total"
            @click="openPayModal = true"
          >
            TOTAL ({{ +total.toFixed(2) }} €)
          </button>
        </div>
      </Transition>
    </div>
  </NuxtLayout>
  <ProductSearchModal
    v-model="openSearchModal"
    @add-product="addProduct"
  ></ProductSearchModal>
  <UILastPayModal v-model="openPayModal"></UILastPayModal>
</template>

<script lang="ts" setup>
import { IRestaurantResponse } from '~/repositories/restaurants/types'
import { IProduct } from '~/repositories/catalog/types'

definePageMeta({
  layout: false,
})
const { $api } = useNuxtApp()

const route = useRoute()
const restaurants = useState<IRestaurantResponse[]>('restaurants')
const currentTab = ref(0)
const show = ref(false)
const openPayModal = ref(false)
const openSearchModal = ref(false)
const total = ref(0)

const currentRestaurant = restaurants?.value?.find((restaurant) => restaurant?.id === route.params?.id)
const catalog = await $api.catalog?.getCatalog(currentRestaurant?.id!)
const catalogState = useState<Record<string, IProduct[]>>('catalog', () => catalog?.entities!)
nextTick(() => (catalogState.value = catalog?.entities!))

const tabs = catalog?.categories!
const products = ref<IProduct[]>([])

watch(
  [currentTab, () => catalogState.value],
  () => {
    products.value = catalogState.value[tabs[currentTab.value]]
  },
  { immediate: true, deep: true }
)
setTimeout(() => (show.value = true), 100)

const openSearch = () => (openSearchModal.value = true)
const calcTotal = (value: number) => (total.value += value)
// improve this logic separating and delegating responsibility
const addProduct = (currentProduct: IProduct) => {
  calcTotal(currentProduct.price)
  catalogState.value = toEntities(
    tabs.flatMap((tab) => ({
      name: tab,
      products: catalogState.value[tab].map((product) => ({
        ...product,
        amount: product.name === currentProduct.name ? product.amount + currentProduct.amount : product.amount,
      })),
    }))
  )
}
</script>

<style scoped>
.fade-enter-active {
  transition: all 0.7s ease-in;
}
.fade-leave-active {
  transition: all 0.1s ease-out;
}
.fade-leave-to,
.fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
</style>
