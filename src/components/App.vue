<template>
  <div id="app">
      <top-bar></top-bar>

      <div class="value-bitcoin">
          <md-avatar class="md-avatar-icon md-large md-primary">
              <md-icon>thumb_up</md-icon>
          </md-avatar>
          MAX: {{max}}

          <md-avatar class="md-avatar-icon md-large md-accent">
              <md-icon>thumb_down</md-icon>
          </md-avatar>
          MIN: {{min}}
      </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import topBar from './dashboard/TopBar'

export default {
  name: 'index',
  components: {
    topBar
  },
  computed: mapGetters({
    max: 'maiorBitcoinHoje',
    min: 'menorBitcoinHoje'
  }),
  created () {
    this.$store.dispatch('getBitcoinHoje')
  }
}
</script>

<style>
 .value-bitcoin{
    text-align: center;
    padding: 10px 10px 10px;
 }
</style>

