<template>
  <div class="hello">
    <md-toolbar>
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title" style="flex: 1">{{ msg }}</h2>
      <md-button class="md-icon-button">
        <md-icon>favorite</md-icon>
      </md-button>
    </md-toolbar>
    <md-tabs md-centered>
      <md-tab md-label="Movies" md-icon="ondemand_video">
        <div class="field-group">
          <md-input-container>
            <label>Movie</label>
            <!--<md-select name="movie" id="movie" v-model="movie">-->
            <md-select name="movie" id="movie">
              <md-option value="fight_club">Fight Club</md-option>
              <md-option value="godfather">Godfather</md-option>
              <md-option value="godfather_ii">Godfather II</md-option>
              <md-option value="godfather_iii">Godfather III</md-option>
              <md-option value="godfellas">Godfellas</md-option>
              <md-option value="pulp_fiction">Pulp Fiction</md-option>
              <md-option value="scarface">Scarface</md-option>
            </md-select>
          </md-input-container>
        </div>
        <md-card style="width: 320px;" class="card-ripple" md-with-hover>
          <md-card-media>
            <md-ink-ripple></md-ink-ripple>
            <img src="https://vuematerial.github.io/assets/card-image-1.jpg" alt="People">
          </md-card-media>
          <md-card-actions>
            <md-button class="md-icon-button">
              <md-icon>favorite</md-icon>
            </md-button>
            <md-button class="md-icon-button">
              <md-icon>bookmark</md-icon>
            </md-button>
            <md-button class="md-icon-button">
              <md-icon>share</md-icon>
            </md-button>
          </md-card-actions>
        </md-card>

      </md-tab>
      <md-tab md-label="Music" md-icon="music_note">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
      </md-tab>
      <md-tab md-label="Books" md-icon="books">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
      </md-tab>
      <md-tab md-label="Pictures" md-icon="photo">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
      </md-tab>
    </md-tabs>
    <router-link tag="md-button" class="md-raised md-primary" to="/about-us">
      <md-icon>navigate_next</md-icon> Go to About US
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
