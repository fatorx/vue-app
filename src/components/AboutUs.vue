<template>
    <div class="about-us">
        <h1>About Us</h1>

        <p>Powered by 0e1dev.com</p>

        <router-link tag="md-button" class="md-raised md-primary" to="/hello">
            <md-icon>arrow_back</md-icon> Back to Hello
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'about-us',
  data () {
    return {
    }
  }
}
</script>
