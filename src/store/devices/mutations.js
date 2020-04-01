export function UPDATE_DEVICES(state, payload) {
  state.devicesList = payload;
}

export function SORT_DEVICES(state, sortKey) {
  const devices = state.devicesList;
  devices.sort((a, b) => {
    let compare = 0;
    if (a[sortKey] > b[sortKey]) {
      compare = 1;
    } else if (b[sortKey] > a[sortKey]) {
      compare = -1;
    }
    return compare;
  });
  state.devicesList = devices;
}
