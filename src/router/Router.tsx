import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import {Spinner} from 'reactstrap';
import { Links } from "src/common/Links";
import AppPage from "src/components/AppPage";
import ErrorPage from "src/components/ErrorPage";
import Footer from "src/components/footer/Footer";
import Header from "src/components/header/Header";


const Router = () => {
    return (
        <>
            <Header />
            <section className="inter-chal-main-section">
                    <React.Suspense fallback={<Spinner color="primary">Loading...</Spinner>}>
                        <BrowserRouter>
                            <Switch>
                                <Route exact={true} path={Links.home} component={AppPage} />
                                <Route path={"*"} component={ErrorPage} />
                            </Switch>
                        </BrowserRouter>
                    </React.Suspense>
            </section>
            <Footer />
        </>
    );
};

export default Router;