import React from "react";
import { DefaultStrings as ds } from "src/common/DefaultTranslations";
import {ErrorBoundary} from "src/common/ErrorBoundary";
import { translate } from "src/common/I18N";

const AppPage = () => {
    
    return (
        <ErrorBoundary type={"Error-Page"}>
          <div className="inter-chal-error-page">
            <h1>{translate(ds.errorPageHeading.stringId, ds.errorPageHeading.defaultString)}</h1>
            <h2>{translate(ds.errorPageSubHeading.stringId, ds.errorPageSubHeading.defaultString)}</h2>
          </div>
        </ErrorBoundary>
    );
};

export default AppPage;
