import React from "react";
import { ChevronCompactDown } from 'react-bootstrap-icons';
import { PopoverBody, UncontrolledPopover } from 'reactstrap';
import { DefaultStrings as ds } from "src/common/DefaultTranslations";
import { translate } from "src/common/I18N";
import { addUrlParam, getParameterByName, retrieveData, storeData } from "src/common/Utils";

const LanguagePicker = () => {

    const languageMap: any = {
        US: "en-US",
        DE: "de-DE",
        CN: "zh-CN",
        JP: "jp-JP",
        KR: "ko-KR",
        IT: "it-IT",
        FR: "fr-FR",
        ES: "es-ES",
        PT: "pt-PT",
        RU: "ru-RU",
        BA: "bs-BA",
        RS: "sr-RS", 
        HR: "hr-HR"
    };

    // this is used for the icon, we use the side language parameter to look up the two letter country code in languageMap 
    const languageMapKey = Object.keys(languageMap).find(key => languageMap[key] === (getParameterByName("site-language") || retrieveData("site-language", "lang")  || "en-US")) || "";

    const onLanguageSelectHandler = (lang: string) => {
        const currentLocation = location.href; 

        const newUrl = addUrlParam(currentLocation, "site-language", languageMap[lang]);
        storeData("site-language", {lang: languageMap[lang]});

        location.href = newUrl;
    };

    return (
        <div className="language-picker">
            <a id="Popover1" className="text-decoration-none link-info">
                <span className="me-1">{translate(ds.languageSwither.stringId, ds.languageSwither.defaultString)}</span>
                <img className="d-inline-block me-1" width="24" height="16" src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${languageMapKey}.svg`}/>
                <span className="me-1">{translate(`languageswitcher.languages.${languageMapKey.toLowerCase()}`, "")}</span>
                <ChevronCompactDown size={22} />
            </a>
            <UncontrolledPopover
                target="Popover1"
                trigger="legacy"
            >
                <PopoverBody>
                    <>
                    <div className="row">
                        <div className="col lang-col">
                            <div className="list-group mb-2">
                                <a href="#" onClick={() => onLanguageSelectHandler("US")} className="list-group-item list-group-item-action border-0 text-center">
                                    <img className="d-inline-block me-1" width="24" height="16" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"/>
                                    <span>{translate(ds.english.stringId, ds.english.defaultString)}</span>
                                </a>
                                <a href="#" onClick={() => onLanguageSelectHandler("DE")} className="list-group-item list-group-item-action border-0 text-center">
                                    <img className="d-inline-block me-1"  width="24" height="16" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg"/>
                                    <span>{translate(ds.german.stringId, ds.german.defaultString)}</span>
                                </a>
                                <a href="#" onClick={() => onLanguageSelectHandler("CN")} className="list-group-item list-group-item-action border-0 text-center">
                                    <img className="d-inline-block me-1"  width="24" height="16" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/CN.svg"/>
                                    <span>{translate(ds.chinese.stringId, ds.chinese.defaultString)}</span>
                                </a>
                                <a href="#" onClick={() => onLanguageSelectHandler("JP")}  className="list-group-item list-group-item-action border-0 text-center">
                                    <img className="d-inline-block me-1"  width="24" height="16" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/JP.svg"/>
                                    <span>{translate(ds.japanese.stringId, ds.japanese.defaultString)}</span>
                                </a>
                                <a href="#" onClick={() => onLanguageSelectHandler("KR")}  className="list-group-item list-group-item-action border-0 text-center">
                                    <img className="d-inline-block me-1"  width="24" height="16" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/KR.svg"/>
                                    <span>{translate(ds.korean.stringId, ds.korean.defaultString)}</span>
                                </a>
                                <a href="#" onClick={() => onLanguageSelectHandler("IT")}  className="list-group-item list-group-item-action border-0 text-center">
                                    <img className="d-inline-block me-1"  width="24" height="16" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg"/>
                                    <span>{translate(ds.italian.stringId, ds.italian.defaultString)}</span>
                                </a>
                                <a href="#" onClick={() => onLanguageSelectHandler("FR")}  className="list-group-item list-group-item-action border-0 text-center">
                                    <img className="d-inline-block me-1"  width="24" height="16" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg"/>
                                    <span>{translate(ds.french.stringId, ds.french.defaultString)}</span>
                                </a>
                                <a href="#" onClick={() => onLanguageSelectHandler("ES")}  className="list-group-item list-group-item-action border-0 text-center">
                                    <img className="d-inline-block me-1"  width="24" height="16" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg"/>
                                    <span>{translate(ds.spanish.stringId, ds.spanish.defaultString)}</span>
                                </a>
                                <a href="#" onClick={() => onLanguageSelectHandler("PT")}  className="list-group-item list-group-item-action border-0 text-center">
                                    <img className="d-inline-block me-1"  width="24" height="16" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/PT.svg"/>
                                    <span>{translate(ds.portugeas.stringId, ds.portugeas.defaultString)}</span>
                                </a>
                                <a href="#" onClick={() => onLanguageSelectHandler("RU")}  className="list-group-item list-group-item-action border-0 text-center">
                                    <img className="d-inline-block me-1"  width="24" height="16" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/RU.svg"/>
                                    <span>{translate(ds.russia.stringId, ds.russia.defaultString)}</span>
                                </a>
                                <a href="#" onClick={() => onLanguageSelectHandler("BA")}  className="list-group-item list-group-item-action border-0 text-center">
                                    <img className="d-inline-block me-1"  width="24" height="16" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/BA.svg"/>
                                    <span>{translate(ds.bosnian.stringId, ds.bosnian.defaultString)}</span>
                                </a>
                                <a href="#" onClick={() => onLanguageSelectHandler("RS")}  className="list-group-item list-group-item-action border-0 text-center">
                                    <img className="d-inline-block me-1"  width="24" height="16" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/RS.svg"/>
                                    <span>{translate(ds.serbian.stringId, ds.serbian.defaultString)}</span>
                                </a>
                                <a href="#" onClick={() => onLanguageSelectHandler("HR")}  className="list-group-item list-group-item-action border-0 text-center">
                                    <img className="d-inline-block me-1"  width="24" height="16" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/HR.svg"/>
                                    <span>{translate(ds.croatian.stringId, ds.croatian.defaultString)}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    </>
                </PopoverBody>
            </UncontrolledPopover>
        </div>
    );
};

export default LanguagePicker;