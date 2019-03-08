<template>
	<div>
    <h1 class="random-component">This is a RANDOM COMPONENT</h1>
	</div>
</template>

<script>

export default {
  data () {
    return {
      randomDataProperty: 0
    }
  },
  mounted() {
      console.log('-----------------------------------------')
      console.log('RANDOMCOMPONENT Mounted()')
      console.log('-----------------------------------------')
  },
  methods: {
    randomMethod: function () {
      return 'I am the random component'
    }
  }
}
</script>