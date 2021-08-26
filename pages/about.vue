<template>
  <header1 url='#'></header1>
  <harticle header="h2" title="What Title?" article="Very Descriptive." ></harticle>
</template>

<script>

  export default {
    components: {
      'header1': fetchTag('header1'),
      'harticle': fetchTag('harticle'),
    },
    data () {
      return {
        msg: 'world!'
      }
    }
  }

</script>

<style scoped>
  .example {
    color: red;
  }
</style>
