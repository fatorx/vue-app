<template>
    <div class="top-bar">
            <md-toolbar>
                <md-button class="md-icon-button" @click="toggleLeftSidenav">
                    <md-icon>menu</md-icon>
                </md-button>

                <h2 class="md-title" style="flex: 1">TOP BAR</h2>
                <md-button class="md-icon-button">
                    <md-icon>favorite</md-icon>
                </md-button>
            </md-toolbar>

        <md-sidenav class="md-left" ref="leftSidenav">
            <md-toolbar class="md-smal">
                <div class="md-toolbar-container">
                    <h3 class="md-title">Sidenav content</h3>
                </div>

            </md-toolbar>
            <md-bottom-bar md-shift>
                <md-bottom-bar-item md-icon="ondemand_video" md-active>Video</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="music_note">Musica</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="books">Livros</md-bottom-bar-item>
                <md-bottom-bar-item md-icon="photo">Fotos</md-bottom-bar-item>
            </md-bottom-bar>

        </md-sidenav>
        </div>
</template>

<script>
export default {
  name: 'top-bar',
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    }
  }
}
</script>
