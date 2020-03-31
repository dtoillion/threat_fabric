<template>
  <q-page padding>
    <div class="row">
      <div class="col-12 col-sm-8 col-md-6 col-lg-4 q-mx-auto">
        <q-list bordered padding separator>
          <q-item-label header>XXConnected Devices</q-item-label>
          <q-separator />
          <Device v-for="device in allDevices" :key="device.id" :device="device" />
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import Device from 'components/Devices/Device';

export default {
  name: 'Devices',
  components: {
    Device,
  },
  created() {
    this.$store.dispatch('devices/fetchApiData');
  },
  computed: {
    ...mapGetters({
      allDevices: 'devices/allDevices',
    }),
  },
};
</script>
