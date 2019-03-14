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
  mounted() {},
  methods: {
    randomMethod: function () {
      return 'I am the random component'
    }
  }
}
</script>