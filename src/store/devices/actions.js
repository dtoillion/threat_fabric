import axios from 'axios';

export function fetchApiData(context) {
  axios.get('/statics/devices.json')
    .then((response) => {
      context.commit('UPDATE_DEVICES', response.data);
    })
    .catch(() => {
      this._vm.$q.notify({
        color: 'negative',
        position: 'bottom',
        message: 'Failed to load device list.',
        icon: 'fas fa-exclamation-triangle',
      });
    });
}
