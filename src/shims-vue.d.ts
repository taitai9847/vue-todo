import { Store } from '@/store';

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
  interface ComponentCustomProperties {
    $store: Store;
  }
}
