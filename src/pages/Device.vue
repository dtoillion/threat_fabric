<template>
  <q-page padding>
    <div class="row">
      <div class="col-12 col-sm-8 col-md-6 col-lg-4 q-mx-auto">
        <Device :device="device" />
        <q-btn to="/devices" label="Go back" />
      </div>
    </div>
  </q-page>
</template>

<script>
import Device from 'components/Devices/Device';

export default {
  name: 'DevicePage',
  components: {
    Device,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {
    device() {
      return this.$store.state.devices.devicesList.devices.find(
        (u) => u.id === parseInt(this.$route.params.id, 10),
      );
    },
  },
};
</script>
