import React from "react";
import Lottie from "react-lottie-player";
import { DefaultStrings as ds } from "src/common/DefaultTranslations";
import {ErrorBoundary} from "src/common/ErrorBoundary";
import { translate } from "src/common/I18N";
import animation_1 from "src/lottie/animation-1.json";


const AppPage = () => {

    return (
        <ErrorBoundary type={"Main-Landing"}>
          <div className="inter-chal-landing">
              {/** Intro Section Start */}
              <div className="inter-chal-bg">
              <div className="container">
                <div className="row align-items-center py-5 inter-chal-bg">
                  <div className="col-lg-7 text-center text-lg-start text-info">
                    <h1 className="fw-bold lh-1 mb-3">
                    <Lottie
                      loop={true}
                      animationData={animation_1}
                      play={true}
                      style={{ width: "100%", height: "100%" }}
                    />
                    </h1>
                    <h4 className="mb-3">{translate(ds.mainFrontPageTopSectionHeading.stringId, ds.mainFrontPageTopSectionHeading.defaultString)}</h4>
                    
                  </div>
                  <div className="col-lg-5" />
                </div>
              </div>
              </div>
              {/** Intro Section End */}

          </div>
        </ErrorBoundary>
    );
};

export default AppPage;
