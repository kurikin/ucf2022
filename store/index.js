export const state = () => ({
  firstLoad: true,
  splashParam: 0.0,
  studioModalOpen: false,
  imageModalOpen: false,
  applyModalOpen: false,
  studioModalData: {},
  imageModalData: {},
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
  toggleImageModal(state) {
    state.imageModalOpen = !state.imageModalOpen
  },
  toggleApplyModal(state) {
    state.applyModalOpen = !state.applyModalOpen
  },
  setStudioModalData(state, data) {
    state.studioModalData = data
  },
  setImageModalData(state, data) {
    state.imageModalData = data
  },
}
