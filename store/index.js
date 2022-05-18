export const state = () => ({
  firstLoad: true,
  splashParam: 0.0,
  studioModalOpen: false,
  studioModalData: {},
})

export const mutations = {
  toggleFirstLoad(state) {
    state.firstLoad = false
  },
  changeSplashParam(state) {
    state.splashParam = Math.random()
  },
  toggleStudioModal(state) {
    state.studioModalOpen = !state.studioModalOpen
  },
  setStudioModalData(state, data) {
    state.studioModalData = data
  },
}
