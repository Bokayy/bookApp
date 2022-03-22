<template>
  <div id="app">
    <custom-header v-on:eventtest="test123" :bool="bool"></custom-header>
    <div v-if="bool" @click="changeNumber('increment')">TEST CONTAINER +++</div>
    <div v-if="bool" @click="changeNumber('decrement')">TEST CONTAINER ---</div>
    <div>{{ isValueNegative }}</div>
  </div>
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue'*/
import CustomHeader from './components/CustomHeader.vue';
import testMixin from './testmixin.js'

export default {
  name: 'AppVueTest',
  components: {
    'custom-header' : CustomHeader,
  },
  mixins: [testMixin],
  data() {
    return {
      bool: true,
      number: 0,
      isValueNegative: ''
    }
  },
  watch: {
    number() {
      console.log("NUMBER HAS CHANGED");
    }
  },
  // computed: {
    // isValueNegative() {
      // if (this.number < 0) {
        // return 'Broj je negativan'
      // }
      // else {
        // return 'broj je pozitivan'
      // }
    // }
  // },
  methods: {
    changeNumber(change) {
      if (change == 'increment') {
        this.number++;
      }
      else {
        this.number--;
      }

      if (this.number < 0) {
        this.isValueNegative = 'Broj je negativan'
      }
      else {
        this.isValueNegative = 'broj je pozitivan'
      }
    },
    test123() {
      console.log("test123");
    }
  },
  created() {
    console.log("created")
    console.log(this);
    this.testFunction();
  },
  mounted() {
    console.log("mounted");
  }
}
</script>

<style>
/* @import './style/style.css'; */
</style>
