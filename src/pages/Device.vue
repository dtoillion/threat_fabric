<template>
  <q-page padding>
    <div class="row">
      <div class="col-12 col-sm-8 col-md-6 col-lg-4 q-mx-auto">
        <q-list bordered padding>
          <Device :device="device" :mini=false />
          <q-separator spaced />
          <q-item-label header>XXConnected applications:</q-item-label>
          <q-item>
            <DeviceApplications
              v-for="app in applications"
              :key="app.title"
              :app="app"
            />
          </q-item>
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
import DeviceApplications from 'components/Devices/DeviceApplications';

export default {
  name: 'DevicePage',
  data() {
    return {
      applications: [
        {
          title: 'Personal MoneyCoach Manager',
          description: 'MoneyCoach is helping millions of people aggregating all their accounts & their finances in a super easy and intelligent way. MoneyCoach changes your financial behavior so that you can save more money.',
          iconURL: 'personal-moneycoach-manager.png',
          installedOn: 'March 18, 2020',
          lastUpdated: 'January 1, 2019',
          version: '2.41.32',
        },
        {
          title: 'Fake GPS Location',
          description: 'Fake GPS Location" is one of the best location prank app. You can simply change your GPS location on a single click :)',
          iconURL: 'fake-gps-location-changer.png',
          installedOn: 'April 4, 2020',
          lastUpdated: 'January 4, 2020',
          version: '1.34.68',
        },
        {
          title: 'Fantastical Calendar Tasks',
          description: 'Fantastical is the award-winning calendar and tasks app with features like natural language parsing, beautiful Day, Week, Month, and Year views, and much more!',
          iconURL: 'fantastical-calendar-tasks.png',
          installedOn: 'April 8, 2018',
          lastUpdated: 'January 9, 2017',
          version: '1.67.32',
        },
      ],
    };
  },
  components: {
    Device,
    DeviceApplications,
  },
  computed: {
    device() {
      return this.$store.getters['devices/allDevices'].find(
        (u) => u.id === this.$route.params.id,
      );
    },
  },
};
</script>
