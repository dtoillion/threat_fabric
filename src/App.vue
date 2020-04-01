<template>
  <div id="q-app">
    <router-view />
    <q-ajax-bar
      ref="bar"
      position="top"
      color="accent"
      size="3px"
    />
  </div>
</template>

<script>

export default {
  name: 'App',
  created() {
    this.$store.dispatch('devices/fetchApiData');
  },
};
</script>
