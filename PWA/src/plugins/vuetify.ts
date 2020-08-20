import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import pt from 'vuetify/src/locale/pt';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#003758',
        secondary: '#EDBB2E',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#000000',
        success: '#4CAF50',
        warning: '#FFC107',
        colorPrimaryText: '#FFF'
      },
    },
  },
  lang: {
    locales: { pt },
    current: 'pt',
  },
});
