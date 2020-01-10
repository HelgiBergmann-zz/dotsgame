<template>
  <div class="row">
    <div class="col-sm">
      <game-settings></game-settings>
      <game-winner v-if="getWinner"></game-winner>
      <game-fields></game-fields>
   </div>
   <div class="col-sm">
      <game-winners></game-winners>
   </div>
  </div>
</template>

<script>
import GameSettings from './GameSetiings.vue';
import GameFields from './GameFields.vue';
import GameWinner from './GameWinner';
import GameWinners from './GameWinners';
export default {
  name: 'Home',
  components: {
    GameSettings,
    GameFields,
    GameWinner,
    GameWinners,
  },
  props: {
    msg: String
  },
  data() {
    return {
      seed: null,
    }
  },
  computed: {
     getWinner() {
        return this.$store.getters.getWinner;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
