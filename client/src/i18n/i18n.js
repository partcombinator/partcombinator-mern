import i18n from 'i18next';
import {  initReactI18next  } from 'react-i18next';

import TraslationES from './es/TraslationES.json';
import TraslationEN from './en/TraslationEN.json';

const resources = {
    en: {
        traslation: TraslationEN
    },
    es: {
        traslation: TraslationES
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'es',
        keySeparator: false,
        
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;    