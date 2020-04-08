<template>
  <q-page padding>
    <div class="row">
      <q-card
        class="col q-ma-md q-pa-sm"
        :class="this.$q.dark.isActive ? 'bg-light' : 'bg-transparent'"
        square
      >
        <q-card-section class="echarts q-pa-none">
          <InfectedDevices style="min-height: 550px;" />
        </q-card-section>
      </q-card>
    </div>
    <div class="row">
      <q-card
        class="col q-ma-md"
        :class="this.$q.dark.isActive ? 'bg-light' : 'bg-transparent'"
        square
      >
        <q-card-section class="echarts q-pa-none">
          <InfectedDevicesByType style="min-height: 350px;" />
        </q-card-section>
      </q-card>
      <q-card
        class="col q-ma-md"
        :class="this.$q.dark.isActive ? 'bg-light' : 'bg-transparent'"
        square
      >
        <q-card-section class="echarts q-pa-none">
          <InfectedDevicesPerDay style="min-height: 350px;" />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import InfectedDevices from 'components/Charts/InfectedDevices';
import InfectedDevicesByType from 'components/Charts/InfectedDevicesByType';
import InfectedDevicesPerDay from 'components/Charts/InfectedDevicesPerDay';

export default {
  name: 'Index',
  data() {
    return {};
  },
  components: {
    InfectedDevices,
    InfectedDevicesByType,
    InfectedDevicesPerDay,
  },
};
</script>
