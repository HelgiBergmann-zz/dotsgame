<template>
  <div class="hello">
    <game-settings></game-settings>
    <game-winner v-if="getWinner"></game-winner>
    <game-fields></game-fields>
  </div>
</template>

<script>
import GameSettings from './GameSetiings.vue';
import GameFields from './GameFields.vue';
import GameWinner from './GameWinner';
export default {
  name: 'Home',
  components: {
    GameSettings,
    GameFields,
    GameWinner
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
