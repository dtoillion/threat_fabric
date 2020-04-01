<template>
  <q-knob
    readonly
    v-model="riskLevel"
    show-value
    :thickness="0.22"
    size="36px"
    :color="riskLevelColor"
    :track-color="riskLevelColor"
    :class="'text-' + `${riskLevelColor}`"
  />
</template>

<script>
export default {
  name: 'RiskLevel',
  data() {
    return {};
  },
  props: [
    'riskLevel',
  ],
  computed: {
    riskLevelColor() {
      if (this.riskLevel <= 20) {
        return 'positive';
      } if (this.riskLevel >= 75) {
        return 'negative';
      }
      return 'warning';
    },
  },
};
</script>

<style lang="scss">
.q-circular-progress__track {
  opacity: 0.3;
}
</style>
