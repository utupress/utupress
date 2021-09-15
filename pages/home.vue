<template>
  <div class="text-center">
    <header1 url="#"></header1>
    <harticle
      header="h2"
      title="What Title?"
      article="Very Descriptive."
    ></harticle>
    <a class="btn btn-primary" @click="reloadApp">Reload App</a> 
    <router-link class="btn btn-primary" :to="'/contactus'">contact us</router-link>
  </div>
</template>

<script>
export default {
  components: {
    header1: fetchBlock("header1"),
    harticle: fetchBlock("harticle"),
  },
  data() {
    return {
      msg: "world!",
    };
  },

  methods: {
    reloadApp() {
      this.$router.addRoute({
        path: "/contactus",
        component: fetchPage("general.vue"),
      });
      this.$forceUpdate();
      alert('sdfsdf')
    },
  },
};
</script>

<style scoped>
.example {
  color: red;
}
</style>
