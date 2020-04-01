<template>
  <q-page padding>
    <div class="row">
      <div class="col-12 col-sm-8 col-md-6 col-lg-4 q-mx-auto">
        <q-list bordered separator>
          <q-item>
            <q-item-section>
              <q-item-label header>XXConnected Devices</q-item-label>
            </q-item-section>
            <q-item-section tag="label">
              <SortDevices />
            </q-item-section>
            <q-item-section>
              <q-input
                v-model="search"
                type="search"
                placeholder="Search for a device..."
                filled
                dense
                clearable
                clear-icon="fas fa-times"
              >
                <template v-slot:append v-if="!this.search">
                  <q-icon name="fas fa-search" size="xs" />
                </template>
              </q-input>
            </q-item-section>
          </q-item>
          <q-separator />
          <Device v-for="device in filteredDevices" :key="device.id" :device="device" :mini=true />
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
import Device from 'components/Devices/Device';
import SortDevices from 'components/Devices/SortDevices';

export default {
  name: 'DevicesPage',
  components: {
    Device,
    SortDevices,
  },
  data() {
    return {
      search: '',
    };
  },
  computed: {
    filteredDevices() {
      if (this.search) {
        return this.$store.getters['devices/allDevices'].filter(
          (device) => device.operatingSystem.toLowerCase().match(this.search.toLowerCase())
          || device.deviceId.toLowerCase().match(this.search.toLowerCase())
          || device.deviceType.toLowerCase().match(this.search.toLowerCase())
          || device.country.toLowerCase().match(this.search.toLowerCase()),
        );
      }
      return this.$store.getters['devices/allDevices'];
    },
  },
};
</script>
