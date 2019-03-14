<template>
	<div>
    <p>Hello</p>
	  <button @click="increment" class="button-thing">Increment</button>
	</div>
</template>

<script>


import RandomComponent from './RandomComponent'
export default {

  data () {
    return {
      count: 0
    }
  },
  mounted() {},
  components: {
    RandomComponent
  },  
  methods: {
    increment: function () {
      this.count++
    }
  }
}
</script>