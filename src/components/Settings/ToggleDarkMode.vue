<template>
  <q-toggle
    @input="toggleDarkMode()"
    v-model="darkMode"
    :label="$t('settings.labelToggleDarkMode')"
    style="min-width: 100%"
  />
</template>

<script>
export default {
  name: 'DarkModeToggle',
  data() {
    return {
      darkMode: true,
    };
  },
  methods: {
    toggleDarkMode() {
      this.$q.dark.toggle();
    },
  },
};
</script>
