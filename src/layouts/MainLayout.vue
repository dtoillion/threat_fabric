<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-avatar square>
          <img src="~assets/logo.png" />
        </q-avatar>
        <q-toolbar-title>ThreatFabric</q-toolbar-title>
        <q-tabs align="left">
          <q-route-tab to="/" :label="$t('navBar.labelDashboard')" />
          <q-route-tab to="/devices" :label="$t('navBar.labelDevices')" />
          <q-route-tab to="/settings"  :label="$t('navBar.labelSettings')" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data() {
    return {};
  },
};
</script>
