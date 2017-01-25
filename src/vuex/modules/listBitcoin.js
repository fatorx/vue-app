import Vue from 'vue'
import * as types from '../mutations.js'

const state = {
  maiorBitcoinHoje: 0,
  menorBitcoinHoje: 0
}

const getters = {
  maiorBitcoinHoje: state => state.maiorBitcoinHoje,
  menorBitcoinHoje: state => state.menorBitcoinHoje
}

const actions = {
  getBitcoinHoje ({ commit }) {
    Vue.http.get('https://www.mercadobitcoin.net/api/ticker').then((response) => {
      commit('LOAD_MAX_BITCOIN_HOJE', JSON.parse(response.body))
      commit('LOAD_MIN_BITCOIN_HOJE', JSON.parse(response.body))
    })
  }
}

const mutations = {
  [types.LOAD_MAX_BITCOIN_HOJE] (state, obj) {
    let high = parseFloat(obj.ticker.high)
    state.maiorBitcoinHoje = 'R$ ' + high.toFixed('2')
  },

  [types.LOAD_MIN_BITCOIN_HOJE] (state, obj) {
    let low = parseFloat(obj.ticker.low)
    state.menorBitcoinHoje = 'R$ ' + low.toFixed('2')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

