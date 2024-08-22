import i18n from 'i18next';
import i18nBackend from 'i18next-http-backend';
import { initReactI18next } from "react-i18next";
import { getParameterByName, retrieveData } from './Utils';


i18n
    .use(i18nBackend)
    .use(initReactI18next)
    .init({
        lng: getParameterByName("site-language") || retrieveData("site-language", "lang"),
        backend: {
            loadPath: '/locales/{{lng}}.json',
        },
        load: 'currentOnly', 
        fallbackLng: "en-US",
        keySeparator: ".", 
        interpolation: {
            escapeValue: false,
        }
    });
export default i18n;

export const translate = (stringId: string, defaultString: string, replacement: any = {}) => {
    
    const translatedString = i18n.t(stringId, {defaultValue: defaultString, ...replacement}) as string;

    if (translatedString === "") {
        return defaultString;
    } else {
        return translatedString;
    }
};
