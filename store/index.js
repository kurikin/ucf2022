export const state = () => ({
  firstLoad: true,
  splashParam: 0.0,
  studioModalOpen: false,
  imageModalOpen: false,
  movieModalOpen: true,
  applyModalOpen: false,
  speakersModalOpen: false,
  studioModalData: {},
  imageModalData: {},
  speakersModalData: {
    eventName: '',
    speakers: [],
  },
  studioSecretOn: false,
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
  toggleMovieModal(state) {
    state.movieModalOpen = !state.movieModalOpen
  },
  toggleApplyModal(state) {
    state.applyModalOpen = !state.applyModalOpen
  },
  toggleSpeakersModal(state) {
    state.speakersModalOpen = !state.speakersModalOpen
  },
  setStudioModalData(state, data) {
    state.studioModalData = data
  },
  setImageModalData(state, data) {
    state.imageModalData = data
  },
  setSpeakersModalData(state, { eventName, speakers }) {
    state.speakersModalData.eventName = eventName
    state.speakersModalData.speakers = speakers
  },
  toggleStudioSecret(state) {
    state.studioSecretOn = !state.studioSecretOn
  },
}
