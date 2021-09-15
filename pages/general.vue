<template>
  <header1 url='#'></header1>
  <harticle header="h2" title="What Title?" article="Very Descriptive." ></harticle>
</template>

<script>

  export default {
    components: this.getComponents(),
    created(){
      alert('sdfsdfsdf');
    },
    data () { 
      return {
        msg: 'world!'
      }
    },
    methods: {
      getComponents(){
        return {
              'header1': fetchTag('header1'),
              'harticle': fetchTag('harticle'),
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
