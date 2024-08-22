import * as React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "src/common/I18N";
import {AppProvider, appState, reducer} from "src/components/providers/AppProvider";
import Router from "src/router/Router";





const App = () => {
    const [isInitialized, setIsInitialized] = React.useState(false);

    React.useEffect(() => {
        i18n.on('initialized', () => setIsInitialized(true));
        return () => {
          i18n.off('initialized');
        };
    }, []);

    return (
        isInitialized ? (
            <I18nextProvider i18n={i18n}>
                <AppProvider initialState={appState} reducer={reducer}>
                    <Router />
                </AppProvider>
            </I18nextProvider>
          ) : null
    );
};

export default App;
