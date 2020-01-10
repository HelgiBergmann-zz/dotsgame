<template>
    <div style="position:relative;">
        <div style="position:absolute;width: 100%;left:50%; margin-top:40px; max-width: 280px; margin-left: -140px;" class="lead text-center">{{getWinner.winner}} won!</div>
    </div>   
</template>

<script>
export default {
  name: 'GameWinner',
   props: {
    msg: String
  },
  data() {
    return {
        input: ""
    }
  },
  computed: {
    getWinner() {
        return this.$store.getters.getWinner;
    }
  },
  methods: {
    
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
