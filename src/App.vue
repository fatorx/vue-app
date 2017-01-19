<template>
  <div id="app">
      <top-bar></top-bar>
        <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'
import TopBar from './components/dashboard/TopBar'

export default {
  name: 'app',
  components: {
    Hello,
    TopBar
  }
}
</script>

