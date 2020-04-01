<template>
  <q-item :to="mini ? `/devices/${device.id}` : null">
    <q-item-section avatar>
      <RiskLevel :riskLevel="device.riskLevel" />
    </q-item-section>
    <q-item-section>
      <q-item-label>Device Id: {{device.deviceId}}</q-item-label>
      <q-item-label caption lines="2">
        {{device.deviceType}} running
        {{device.operatingSystem}} with risk level
        {{device.riskLevel}} connected from
        {{device.country.toUpperCase()}}
      </q-item-label>
    </q-item-section>
    <q-item-section side top>
      <q-item-label caption>
        {{device.lastSeen}}
      </q-item-label>
      <q-item-label caption class="q-gutter-sm">
        <q-icon v-if="device.deviceType==='Desktop'" name="fas fa-desktop" />
        <q-icon v-if="device.deviceType==='Mobile'" name="fas fa-mobile-alt" />
        <q-icon v-if="device.operatingSystem==='iOS'" name="fab fa-apple" />
        <q-icon v-if="device.operatingSystem==='Android'" name="fab fa-android" />
        <q-icon v-if="device.operatingSystem==='Linux'" name="fab fa-linux" />
        <q-icon v-if="device.operatingSystem==='macOS'" name="fab fa-apple" />
        <q-icon v-if="device.operatingSystem==='Windows'" name="fab fa-windows" />
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import RiskLevel from 'components/Devices/RiskLevel';

export default {
  name: 'Device',
  props: [
    'device',
    'mini',
  ],
  components: {
    RiskLevel,
  },
  data() {
    return {};
  },
};
</script>
