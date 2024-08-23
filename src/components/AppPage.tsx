import React from "react";
import Lottie from "react-lottie-player";
import { DefaultStrings as ds } from "src/common/DefaultTranslations";
import {ErrorBoundary} from "src/common/ErrorBoundary";
import { translate } from "src/common/I18N";
import animation_1 from "src/lottie/animation-1.json";
import animation_2 from "src/lottie/animation-2.json";
import animation_3 from "src/lottie/animation-3.json";
import animation_4 from "src/lottie/animation-4.json";


const AppPage = () => {

    return (
        <ErrorBoundary type={"Main-Landing"}>
          <div className="inter-chal-landing">
              {/** Intro Section Start */}
              <div className="inter-chal-bg">
              <div className="container">
                <div className="row align-items-center py-5 inter-chal-bg">
                  <div className="col-lg-6 text-center text-lg-start text-white">
                    <h1 className="fw-bold lh-1 mb-3">
                      {"Placeholder"}
                    </h1>
                    <h4 className="mb-3">{"placeholder"}</h4>
                    
                  </div>
                  <div className="col-lg-6">
                      <Lottie
                        loop={true}
                        animationData={animation_4}
                        play={true}
                        style={{ width: "100%" }}
                      />
                  </div>
                </div>
              </div>
              </div>
              {/** Intro Section End */}


               {/** Lifetime subscription Section Start */}
            <div className="text-bg-secondary">
            <div className="container">
              <div className="row align-items-center py-5">
                <div className="col-lg-7 col-sm-12">
                    <Lottie
                      loop={true}
                      animationData={animation_2}
                      play={true}
                      style={{ width: "100%" }}
                    />
                </div>
                <div className="col-lg-5 col-sm-12 text-center text-lg-start">
                  <h1 className="fw-bold lh-1 mb-3 inter-chal-text">{"Placeholder text"}</h1>
                  <h4 className="mb-3 inter-chal-text">{"Placeholder text"}</h4>
                  <p className="inter-chal-text">{"Placeholder text"}</p>
                </div>
              </div>
            </div>
            </div>
            {/** Lifetime subscription Section End */}

            {/** Mobile app Section Start */}
            <div className="container">
              <div className="row align-items-center py-5">
                <div className="col-lg-5 col-sm-12 text-center text-lg-start">
                  <h1 className="fw-bold lh-1 mb-3 inter-chal-text">{"Placeholder text"}</h1>
                  <h4 className="mb-3 inter-chal-text">{"Placeholder text"}</h4>
                  <p className="inter-chal-text">{"Placeholder text"}</p>
                </div>
                <div className="col-lg-7 col-sm-12">
                  <div className="row justify-content-center mb-3">
                    <div className="col">
                    <Lottie
                      loop={true}
                      animationData={animation_3}
                      play={true}
                      style={{ width: "100%" }}
                    />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/** Mobile app Section End */}


            {/** Shop Section Start */}
            <div className="inter-chal-bg-light">
            <div className="container">
              <div className="row align-items-center py-5">
                <div className="col-lg-7 col-sm-12">
                  <div className="row justify-content-center">
                    <div className="col">
                    <Lottie
                      loop={true}
                      animationData={animation_1}
                      play={true}
                      style={{ width: "100%" }}
                    />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-sm-12 text-center text-lg-start">
                  <h1 className="fw-bold lh-1 mb-3 inter-chal-text">{"Placeholder text"}</h1>
                  <h4 className="mb-3 inter-chal-text">{"Placeholder text"}</h4>
                  <p className="inter-chal-text">{"Placeholder text"}</p>
                </div>
              </div>
            </div>
            </div>
            {/** Shop Section End */}

          </div>
        </ErrorBoundary>
    );
};

export default AppPage;
