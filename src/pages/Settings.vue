<template>
  <q-page padding>
    <div class="row">
      <div class="col-12 col-sm-8 col-md-6 col-lg-4 q-mx-auto">
        <q-list bordered padding>
          <q-item-label header>XXUser Settings</q-item-label>
          <SelectLanguage />
          <q-separator spaced />
          <q-item-label header>XXDisplay</q-item-label>
          <ToggleDarkMode />
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
import ToggleDarkMode from 'components/Settings/ToggleDarkMode';
import SelectLanguage from 'components/Settings/SelectLanguage';

export default {
  name: 'Settings',
  components: {
    ToggleDarkMode,
    SelectLanguage,
  },
};
</script>
