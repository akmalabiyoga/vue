import { defineStore } from 'pinia'
import { mainlink } from '../router/mainroute'
// Using the navlink array from mainroute.js to populate the store
export const useNavlinkStore = defineStore('navlink', {
  state: () => ({
    links: mainlink
  }),
  getters: {
    getLinks: (state) => state.links
  }
})