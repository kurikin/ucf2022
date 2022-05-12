export const state = () => ({
  firstLoad: true,
})

export const getters = {
  firstLoad: (state) => state.firstLoad,
}

export const mutations = {
  toggleFirstLoad(state) {
    state.firstLoad = false
  },
}
