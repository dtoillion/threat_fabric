<template>
  <q-item clickable tag="label">
    <q-item-section>
      <q-item-label>{{$t('settings.labelSelectLanguage')}}</q-item-label>
      <q-item-label caption>
        {{$t('settings.labelSelectLanguageDesc')}}
      </q-item-label>
    </q-item-section>
    <q-item-section>
      <q-select
        v-model="lang"
        :options="langOptions"
        dropdown-icon="far fa-caret-square-down"
        emit-value
        map-options
        transition-show="flip-up"
        transition-hide="flip-down"
        filled
        dense
      />
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  data() {
    return {
      lang: this.$i18n.locale,
      langOptions: [
        { value: 'en-us', label: 'English' },
        { value: 'nl', label: 'Dutch' },
      ],
    };
  },
  watch: {
    lang(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>
