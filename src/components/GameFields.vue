<template>
<div style="padding-top: 100px; width: 50%; margin: 0 auto;">
    <div style="display:flex; flex-flow: row wrap">
        <div :class="{
            'active': box.status == getStatus.active, 
            'aipoint' :  box.status == getStatus.ai,
            'playerpoint' : box.status == getStatus.player,
             }"
             v-for="(box) in getFields" :key="box.id"
            @click="preventClick(box) && chooseBox()"
            :style="`padding-bottom:calc(100% / ${getChosenSetting.settings.field};
                     border:2px solid gray; width:calc(100% / ${getChosenSetting.settings.field})`"
            :id="`id-${box.id}`">
        </div>
    </div
></div>
</template>

<script>
import {Status} from '../store/store.js';

export default {
  name: 'GameFields',
   props: {
    msg: String
  },
  data() {
    return {
        interval: null,
        chunks: [],
    }
  },
  computed: {
    getStatus() {
      return Status;
    },
    getFields() {
         return this.$store.getters.getFields;
    },
    getRandomNums() {
        return this.$store.getters.getRandomNums;
    },
    getRandomUnit() {
        return this.$store.getters.getRandomUnit;
    },
    getChosenSetting() {
        return this.$store.getters.getChosenSetting;
    },
  },
  methods: {
   preventClick(box) {
       return (this.getFields[this.getRandomUnit].id == box.id && this.getFields[this.getRandomUnit].status == Status.active);
   },
   chooseBox() {
        this.$store.dispatch('playerGetPoint');
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
.active {
    background:#4244b9;
}
.aipoint {
    background: rgb(238, 0, 79);
}
.playerpoint {
    background: rgb(0, 221, 111);
}
</style>
