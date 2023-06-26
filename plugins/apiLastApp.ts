export default defineNuxtPlugin(() => {
  return {
    provide: {
      api: repositories,
    },
  }
})
