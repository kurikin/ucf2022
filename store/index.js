export const state = () => ({
  firstLoad: true,
  splashParam: 0.0,
})

export const getters = {
  firstLoad: (state) => state.firstLoad,
  splashParam: (state) => state.splashParam,
}

export const mutations = {
  toggleFirstLoad(state) {
    state.firstLoad = false
  },
  changeSplashParam(state) {
    state.splashParam = Math.random()
  },
}
