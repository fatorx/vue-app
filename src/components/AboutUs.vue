<template>
    <div class="about-us">
        <top-bar></top-bar>
        <h1>About Us</h1>

        <p>Tela de about us!!!!</p>

        <router-link tag="md-button" class="md-raised md-primary" to="/hello">
            <md-icon>arrow_back</md-icon> Back to Hello
        </router-link>
    </div>
</template>

<script>
import TopBar from './dashboard/TopBar'

export default {
  name: 'about-us',
  components: {
    TopBar
  }
}
</script>
