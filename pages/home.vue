<template>
  <header1 url='#'></header1>
  <harticle header="h2" title="What Title?" article="Very Descriptive." ></harticle>
</template>

<script>

  export default {
    components: this.getComponents(),
    data () {
      return {
        msg: 'world!'
      }
    },

    methods: {
      getComponents(){
        return {
              'header1': fetchBlock('header1'),
              'harticle': fetchBlock('harticle'),
            }
      }
    }
  }

</script>

<style scoped>
  .example {
    color: red;
  }
</style>
