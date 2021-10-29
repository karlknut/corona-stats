export const state = () => ({
    page: 1,
    results: [],
    pagination: {
      count: 0,
      next: null,
      pages: 0,
      prev: null,
    },
    isLoading: false
})
  
export const mutations = {
    SET_RESULTS(state, results) {
        state.results = results;
    },
    SET_PAGINATION(state, pagination){
        state.pagination = pagination;
    },
    TOGGLE_IS_LOADING(state){
        state.isLoading = !state.isLoading;
    },
    SET_PAGE(state, page){
        state.page = page;
    }
}

export const actions = {
    getPage(context, page) {
        context.commit('TOGGLE_IS_LOADING');
        this.$axios.get('https://rickandmortyapi.com/api/character', {
            params: {
                page: page
            }
        }).then(response => {
            context.commit('SET_RESULTS', response.data.results);
            context.commit('SET_PAGINATION', response.data.info);
            context.commit('TOGGLE_IS_LOADING');
        });
    }
}