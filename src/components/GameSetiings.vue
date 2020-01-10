<template>
<div class='row'>
    <div class="col-sm">
        <div :class="['dropdown', {'no-event': getGameStarted}]">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{getChosenSetting.complexety || 'Pick game mode'}}
            </button>
        
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item"  v-for="(value, name) in getSettings" :key="name" @click="choseSetting(value, name)" href="#">{{name}}</a>
            </div>
        </div>
    </div>
    <div class="col-sm">
        <div class="input-group flex-nowrap">
        <div class="input-group-prepend">
            <span class="input-group-text" id="addon-wrapping">#</span>
        </div>
            <input type="text" class="form-control" placeholder="Player name"  v-model="playerName" aria-label="Username" aria-describedby="addon-wrapping">
        </div>
    </div>
    <div class="col-sm">
        <button class="btn  btn-secondary" @click="startPlay()"> 
           {{!getGameStarted && getWinner ?  'Play again' : 'Play' }}
        </button>
    </div>
</div>
</template>

<script>
export default {
  name: 'GameSettings',
   props: {
    msg: String
  },
  data() {
    return {
        input: ""
    }
  },
  computed: {
    getSettings() {
        return this.$store.getters.getGameSettings
    },
    getChosenSetting() {
        return this.$store.getters.getChosenSetting;
    },
    playerName: {
        get () {
            return this.$store.state.player.name
        },
        set (value) {
            this.$store.commit('UPDATE_PLAYER_NAME', value)
        }
    },
    getGameStarted() {
        return this.$store.getters.getGameStarted;
    },
    getWinner() {
        return this.$store.getters.getWinner;
    }
  },
  methods: {
      choseSetting(value, name) {
          const payload = {};
          payload.complexety = name;
          payload.settings = value;      
          this.$store.dispatch('startGame', payload);
      },
      startPlay() {
        if (this.getGameStarted) return;
        this.$store.dispatch('fillGameFields');
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.no-event {
    pointer-events: none;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
