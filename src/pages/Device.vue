<template>
  <q-page padding>
    <div class="row">
      <div class="col-12 col-sm-8 col-md-6 col-lg-4 q-mx-auto">
        <q-list bordered padding separator>
          <Device :device="device" :mini=false />
        </q-list>
        <q-toolbar class="justify-center q-pa-lg">
          <q-btn to="/devices" label="Go back" color="primary" />
        </q-toolbar>
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
  computed: {
    device() {
      return this.$store.getters['devices/allDevices'].find(
        (u) => u.id === parseInt(this.$route.params.id, 10),
      );
    },
  },
};
</script>
