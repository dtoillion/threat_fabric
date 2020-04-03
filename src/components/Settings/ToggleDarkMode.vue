<template>
  <q-item clickable tag="label">
    <q-item-section>
      <q-item-label>{{$t('settings.labelToggleDarkMode')}}</q-item-label>
      <q-item-label caption>
        {{$t('settings.labelToggleDarkModeDesc')}}
      </q-item-label>
    </q-item-section>
    <q-item-section>
      <q-toggle
        @input="toggleDarkMode()"
        v-model="darkMode"
        class="self-end"
      />
    </q-item-section>
  </q-item>
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
