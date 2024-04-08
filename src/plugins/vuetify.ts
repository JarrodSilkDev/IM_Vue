/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { md3 } from 'vuetify/blueprints'

// Composables
import { ThemeDefinition, createVuetify } from 'vuetify'

const light: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#533483',
    secondary: '#DD6600',
    tertiary: '#163138',
    background: '#F4F5FA',
    'on-background': '#3A3541',
    'on-surface': '#3A3541',
    readonly: '#cccccc',
    accept: '#4caf50',
    reject: '#b11919'
  },
  variables: {
    //default 0.38
    'disabled-opacity': 0.8
  }
}
const dark: ThemeDefinition = {
  dark: true,
  colors: {
    primary: '#533483',
    secondary: '#DD6600',
    tertiary: '#163138',
    readonly: '#cccccc',
    accept: '#4caf50',
    reject: '#b11919'
  },
  variables: {
    //default 0.5
    'disabled-opacity': 0.6
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  blueprint: md3,
  theme: {
    defaultTheme: 'light',
    themes: {
      light,
      dark
    },
    variations: {
      colors: ['primary', 'secondary', 'info'],
      lighten: 5,
      darken: 5
    }
  },
  defaults: {
    VTextField: { variant: 'outlined' },
    VAutocomplete: { variant: 'outlined' },
    VCombobox: { variant: 'outlined' },
    VTextarea: { variant: 'outlined' },
    VFileInput: { variant: 'outlined' },
    VBtnCancel: { color: 'grey-50' },
    VCheckbox: { color: 'primary' },
    VAlert: { variant: 'tonal' },
    VBtnToggle: { color: 'primary' },

    VBtnInputAppend: {
      rounded: true,
      variant: 'tonal',
      color: 'grey-50',
      size: 'large',
      class: 'v-btn__input-append'
    }
  },
  components: {}
})
