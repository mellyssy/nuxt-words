export default {
  add(state, parsed) {
    state.results = parsed;
  },
  setSearchSuccess(state, v) {
    state.wasSearchSuccessful = v;
  },
  setLoading(state, v) {
    state.isLoading = v;
  }
};
