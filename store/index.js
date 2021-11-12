export const state = () => ({
    countries: [],
    search: ''
})
  
export const mutations = {
    SET_COUNTRIES(state, countries) {
        state.countries = countries;
    },
    SET_SEARCH(state, search) {
        state.search = search;
    }
}

export const actions = {
    getSummary(context) {
        this.$axios.get('https://api.covid19api.com/summary').then(response => {
            context.commit('SET_COUNTRIES', response.data.Countries);
        });
    }
}

export const getters = {
    countryNames(state){
        return state.countries.map(country => country.Country);
    },
    filteredCountries(state){
        return state.countries.filter(country => {
            return state.search.toLowerCase() === country.Country.substr(0, state.search.length).toLowerCase()
        });
    }
}