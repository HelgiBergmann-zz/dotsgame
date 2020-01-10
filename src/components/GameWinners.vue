<template>
<div>
    <h3>Leader Bord</h3>
    <table class="table">
    <tbody>
        <tr v-for="(winner, index) in getWinners" :key="index">
        <th scope="row">{{index}}</th>
        <td>{{winner.winner}}</td>
        <td>{{winner.date}}</td>
        </tr>
    </tbody>
    </table>
</div>
 
</template>

<script>
export default {
  name: 'GameWinners',
   props: {
    msg: String
  },
  data() {
    return {
        input: ""
    }
  },
  computed: {
    getWinners() {
        return this.$store.getters.getWinners;
    }
  },
  methods: {
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {    
    margin-bottom: 30px;
    width: 100%;
    text-align: left;
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
