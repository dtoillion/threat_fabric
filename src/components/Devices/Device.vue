<template>
  <q-item>
    <q-item-section>
      <q-item-label>XXDevice: {{device.deviceId}}</q-item-label>
      <q-item-label caption lines="2">
        {{device.deviceType}} running
        {{device.operatingSystem}} with risk level
        {{device.riskLevel}} connected from
        {{device.country}}
      </q-item-label>
    </q-item-section>
    <q-item-section side top>
      <q-item-label caption>
        {{device.lastSeen}}
      </q-item-label>
      <q-item-label caption class="q-gutter-sm">
        <q-icon v-if="device.deviceType==='desktop'" name="fas fa-desktop" />
        <q-icon v-if="device.deviceType==='mobile'" name="fas fa-mobile-alt" />
        <q-icon v-if="device.operatingSystem==='iOS'" name="fab fa-apple" />
        <q-icon v-if="device.operatingSystem==='android'" name="fab fa-android" />
        <q-icon v-if="device.operatingSystem==='linux'" name="fab fa-linux" />
        <q-icon v-if="device.operatingSystem==='macOS'" name="fab fa-apple" />
        <q-icon v-if="device.operatingSystem==='windows'" name="fab fa-windows" />
        <q-icon v-if="device.deviceType.type==='html'" name="fab fa-chrome" />
        <q-icon v-if="device.deviceType.type==='html'" name="fab fa-internet-explorer" />
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'Device',
  props: ['device'],
  data() {
    return {};
  },
};
</script>
