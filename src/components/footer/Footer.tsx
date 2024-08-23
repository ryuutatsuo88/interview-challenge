import React from "react";
import { Linkedin, Medium, Telegram} from 'react-bootstrap-icons';
import { DefaultStrings as ds } from "src/common/DefaultTranslations";
import { translate } from "src/common/I18N";
import { Links } from "src/common/Links";
import { getParameterByName, retrieveData } from "src/common/Utils";
import LanguagePicker from "../languagepicker/LanguagePicker";

const Footer = () => {
    const languageCode = getParameterByName("site-language") || retrieveData("site-language", "lang")  || "en-US";

    return (
        <section className="inter-chal-bg">
            <div className="container">
                <footer className="inter-chal-footer py-5">
                    <div className="row gx-5">
                        <div className="col-lg-4">
                            <div>
                                <a href={Links.home} className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                                    <img title={translate(ds.footerTitle.stringId, ds.footerTitle.defaultString) as string} className="footer-logo" src="assets/logo.png"/>
                                </a>
                            </div>
                            <div className="icon-list-social mb-5">
                                <a href={Links.twitter} target="_blank" className="icon-list-social-link text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
                                    </svg>
                                </a>
                                <a href={Links.telegram} target="_blank" className="icon-list-social-link text-white"><Telegram size={20}/></a>
                                <a href={Links.linkedin} target="_blank" className="icon-list-social-link text-white"><Linkedin size={20}/></a>
                                <a href={Links.medium} target="_blank" className="icon-list-social-link text-white"><Medium size={20}/></a>
                            </div>
                            <LanguagePicker />
                        </div>
                        <div className="col-lg-8">
                            <div className="row gx-5">
                                <div className="col-lg-6 mb-5 mb-lg-0" />
                                <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                                    <h5 className="text-white">{translate(ds.aboutus.stringId, ds.aboutus.defaultString)}</h5>
                                    <ul className="nav flex-column">
                                        <li className="nav-item mb-2"><a href={Links.contact} className="nav-link p-0 link-info">{translate(ds.contact.stringId, ds.contact.defaultString)}</a></li>
                                        <li className="nav-item mb-2"><a href={Links.pressKit} target="_blank" className="nav-link p-0 link-info">{translate(ds.mediakit.stringId, ds.mediakit.defaultString)}</a></li>
                                        <li className="nav-item mb-2"><a href={Links.whitePaper} target="_blank" className="nav-link p-0 link-info">{translate(ds.whitepaper.stringId, ds.whitepaper.defaultString)}</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                                    <h5 className="text-white">{translate(ds.social.stringId, ds.social.defaultString)}</h5>
                                    <ul className="nav flex-column">
                                        <li className="nav-item mb-2"><a href={Links.twitter} target="_blank" className="nav-link p-0 link-info">{translate(ds.twitter.stringId, ds.twitter.defaultString)}</a></li>
                                        <li className="nav-item mb-2"><a href={Links.telegram} target="_blank" className="nav-link p-0 link-info">{translate(ds.telegram.stringId, ds.telegram.defaultString)}</a></li>
                                        <li className="nav-item mb-2"><a href={Links.linkedin} target="_blank" className="nav-link p-0 link-info">{translate(ds.linkedin.stringId, ds.linkedin.defaultString)}</a></li>
                                        <li className="nav-item mb-2"><a href={Links.medium} target="_blank" className="nav-link p-0 link-info">{translate(ds.medium.stringId, ds.medium.defaultString)}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-5" />
                    <div className="row gx-5 align-items-center">
                        <div className="col-md-6 small text-white">{translate(ds.copyright.stringId, ds.copyright.defaultString, {year: new Date().getFullYear()})}</div>
                        <div className="col-md-6 text-md-end small">
                            <a href={Links.privacy} target="_blank" className="text-decoration-none me-2 text-white">{translate(ds.privacy.stringId, ds.privacy.defaultString)}</a>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Footer;