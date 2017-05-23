import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutations-types'
import peopleService from '../services/PeopleService'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// initial state
const state = {
  _people: [],
  people: [],
  search: ''
}

// getters
const getters = {
  people: null,
  search: null,
  filteredPeople:null
}

// actions
const actions = {
  fetch({ commit, state }) {
    
  }
}

// mutations
const mutations = {
  [types.FETCH_ALL](state, { people }) {
  
  },
  [types.FILTER](state, search) {
  
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  strict: debug
})