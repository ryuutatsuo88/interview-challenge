import React from "react";
import {Collapse, Navbar, NavbarBrand, NavbarToggler} from 'reactstrap';
import { DefaultStrings as ds } from "src/common/DefaultTranslations";
import { translate } from "src/common/I18N";
import { Links } from "src/common/Links";
import LanguagePicker from "../languagepicker/LanguagePicker";

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar fixed="top" container="lg" expand="lg" light={true} dark={true} className="inter-chal-header inter-chal-bg">
            <NavbarBrand href={Links.home} className="col-lg-9">
                <img title={translate(ds.headerTitle.stringId, ds.headerTitle.defaultString) as string} className="header-logo" src="assets/logo.png"/>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse className="d-lg-flex col-lg-3" isOpen={isOpen} navbar={true}>
                <div className="d-lg-flex col-lg-12 justify-content-lg-end">
                    <LanguagePicker />
                </div> 
            </Collapse>
        </Navbar>
    );
};

export default Header;