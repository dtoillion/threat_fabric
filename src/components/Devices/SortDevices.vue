<template>
  <q-select
    v-model="sortKey"
    :options="sortOptions"
    @input="sortDevices(sortKey)"
    label="Sort device list"
    dropdown-icon="far fa-caret-square-down"
    emit-value
    map-options
    transition-show="flip-up"
    transition-hide="flip-down"
    filled
    dense
  />
</template>

<script>
export default {
  name: 'SortDevices',
  data() {
    return {
      sortKey: '',
      sortOptions: [
        { value: 'deviceId', label: 'Device Id' },
        { value: 'riskLevel', label: 'Risk Level' },
      ],
    };
  },
  methods: {
    sortDevices(sortKey) {
      this.$store.commit('devices/SORT_DEVICES', sortKey);
    },
  },
};
</script>
