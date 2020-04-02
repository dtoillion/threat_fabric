<template>
  <q-item-section avatar>
    <img
      :src="'/statics/' + app.iconURL"
      :alt="app.title"
      @click="dialogOpen = !dialogOpen"
      class="rounded-borders app-icon"
    />
    <q-dialog
      v-model="dialogOpen"
      transition-show="flip-up"
      transition-hide="flip-down"
    >
      <q-card>
        <q-item>
          <q-item-section avatar>
            <q-avatar rounded>
              <img
                :src="'/statics/' + app.iconURL"
                :alt="app.title"
              />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ app.title }}</q-item-label>
            <q-item-label caption>
              XXVersion: {{ app.version }}
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-btn icon="fas fa-times" flat round dense v-close-popup />
          </q-item-section>
        </q-item>
        <q-separator/>
        <q-card-section>
          <div class="text-caption q-mb-sm">
            XXInstalled on: {{ app.installedOn }} |
            XXLast updated: {{ app.lastUpdated }}
          </div>
          <div class="text-body2">
            {{ app.description }}
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-item-section>
</template>

<script>
export default {
  name: 'DeviceApplications',
  props: [
    'app',
  ],
  data() {
    return {
      dialogOpen: false,
    };
  },
};
</script>

<style lang="scss">
.app-icon {
  height: 38px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
}
</style>
