import { IAPIRepositories } from './repositories/types'

declare module '#app' {
  interface NuxtApp {
    $api: IAPIRepositories
  }
}

export {}
