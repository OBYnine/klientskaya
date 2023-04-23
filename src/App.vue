<template>
  <div id="app">
    <VHeader v-if="showHeader"></VHeader>
    <router-view></router-view>
    <VFooter v-if="showFooter"></VFooter>
  </div>
</template>

<script>
import VFooter from './components/v-footer.vue';
import VHeader from './components/v-header.vue';
import router from './router';

export default {
  name: 'App',
  data() {
    return {
      showHeader: true,
      showFooter:true,
    };
  },
  components: {
    VFooter,
    VHeader,
  },
  router,
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
