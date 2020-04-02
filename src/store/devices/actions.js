// At first I was loading this local json file to mock the API calls
// import axios from 'axios';

// export function fetchApiData(context) {
//   axios.get('/statics/devices.json')
//     .then((response) => {
//       context.commit('UPDATE_DEVICES', response.data);
//     })
//     .catch(() => {
//       this._vm.$q.notify({
//         color: 'negative',
//         position: 'bottom',
//         message: 'Failed to load device list.',
//         icon: 'fas fa-exclamation-triangle',
//       });
//     });
// }

// This does not belong in actions:
// dev code to generate randomized dummy data in place of an api call
// during prototyping.

export function fetchApiData(context) {
  function getRandomLongInt(length) {
    return Math.floor(Math.random() * length);
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomDate() {
    return `${getRandomInt(1, 28)}/${getRandomInt(1, 12)}/2020 ${getRandomInt(10, 24)}:${getRandomInt(10, 59)}:${getRandomInt(10, 59)}`;
  }

  function getRandomType() {
    const types = ['Mobile', 'Desktop'];
    return types[getRandomInt(0, 1)];
  }

  function getRandomOS() {
    const operatingSystems = ['Windows', 'Linux', 'Android', 'macOS', 'iOS'];
    return operatingSystems[getRandomInt(0, 4)];
  }
  function getRandomCountry() {
    const operatingSystems = ['us', 'nl', 'de', 'ca'];
    return operatingSystems[getRandomInt(0, 3)];
  }

  const data = [];

  for (let i = 0; i < 15; i += 1) {
    const entry = {
      id: (i + 1).toString(),
      deviceId: getRandomLongInt(1000000).toString(),
      deviceType: getRandomType(),
      operatingSystem: getRandomOS(),
      riskLevel: getRandomLongInt(100),
      lastSeen: getRandomDate().toString(),
      country: getRandomCountry(),
    };
    data.push(entry);
  }

  context.commit('UPDATE_DEVICES', data);
}
