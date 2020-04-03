# TFAssignment (threat_fabric)

Coding excersize for ThreatFabric interview.

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
npm run lint
```

### Build the app for production
```bash
quasar build
```

## Development

### Data

App is currently populated with dummy data. To replace with API call un-comment the action in: `src/store/devices/actions.js`

To make the chart components production-ready they would need to be modified to accept props and update the chart via a computed property.

### App styling
Global css goes in `css/app.scss`
Main theme values are in `css/quasar.variables.scss`
Component library:  `https://quasar.dev/`

### App structure

#### Templates
App > Layout > Pages > Components
Reference all new pages in `src/router/routes.js`

#### API Requests:
Make a new module.
`quasar new Store TheNameOfYourModule`

 1. Make your request in actions.js
 2. Modify data in mutations.js and then add it to the state
 3. If you want to request data from the store without triggering the app life-cycle use getters

### eslint

1. AirBNB rules applied.
2. Add `'no-underscore-dangle': 'off',` to `.eslintrc.js` in the rules object to enable _vm access.

### Translations

Translation files are in `src/i18n`, all copy should be entered here.
To access a translated string in your template do: `{{$t('settings.labelDisplaySettings')}}`

