import React from "react";
import ReactHtmlParser from "react-html-parser";
import Lottie from "react-lottie-player";
import { DefaultStrings as ds } from "src/common/DefaultTranslations";
import {ErrorBoundary} from "src/common/ErrorBoundary";
import { translate } from "src/common/I18N";
import { Links } from "src/common/Links";
import animation_1 from "src/lottie/animation-1.json";
import animation_2 from "src/lottie/animation-2.json";
import animation_3 from "src/lottie/animation-3.json";
import animation_4 from "src/lottie/animation-4.json";


const AppPage = () => {

    return (
        <ErrorBoundary type={"Main-Landing"}>
          <div className="inter-chal-landing">
              {/** ======================= */}
              <div className="inter-chal-bg">
              <div className="container">
                <div className="row align-items-center py-5 inter-chal-bg">
                  <div className="col-lg-6 text-center text-lg-start text-white">
                    <h1 className="fw-bold lh-1 mb-3">
                      {translate(ds.mainFrontPageTopSectionHeading.stringId, ds.mainFrontPageTopSectionHeading.defaultString)}
                    </h1>
                    <h4 className="mb-3">{ReactHtmlParser(translate(ds.mainFrontPageTopSectionSubHeading.stringId, ds.mainFrontPageTopSectionSubHeading.defaultString))}</h4>
                    <a href={Links.presale} target="_blank" className="btn btn-primary btn-lg d-block mx-auto position-relative app-store-btn">
                        {translate(ds.mainFrontPageTopSectionButton.stringId, ds.mainFrontPageTopSectionButton.defaultString)}
                      </a>
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
              {/** ======================= */}


              {/** ======================= */}
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
                  <h1 className="fw-bold lh-1 mb-3 inter-chal-text">{translate(ds.mainFrontPageSection2Heading.stringId, ds.mainFrontPageSection2Heading.defaultString)}</h1>
                  <h4 className="mb-3 inter-chal-text">{translate(ds.mainFrontPageSection2SubHeading.stringId, ds.mainFrontPageSection2SubHeading.defaultString)}</h4>
                </div>
              </div>
            </div>
            </div>
            {/** ======================= */}

            {/** ======================= */}
            <div className="container">
              <div className="row align-items-center py-5">
                <div className="col-lg-5 col-sm-12 text-center text-lg-start">
                <h1 className="fw-bold lh-1 mb-3 inter-chal-text">{translate(ds.mainFrontPageSection3Heading.stringId, ds.mainFrontPageSection3Heading.defaultString)}</h1>
                <h4 className="mb-3 inter-chal-text">{translate(ds.mainFrontPageSection3SubHeading.stringId, ds.mainFrontPageSection3SubHeading.defaultString)}</h4>
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
            {/** ======================= */}


            {/** ======================= */}
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
                <h1 className="fw-bold lh-1 mb-3 inter-chal-text">{translate(ds.mainFrontPageSection4Heading.stringId, ds.mainFrontPageSection4Heading.defaultString)}</h1>
                <h4 className="mb-3 inter-chal-text">{translate(ds.mainFrontPageSection4SubHeading.stringId, ds.mainFrontPageSection4SubHeading.defaultString)}</h4>
                </div>
              </div>
            </div>
            </div>
            {/** ======================= */}

          </div>
        </ErrorBoundary>
    );
};

export default AppPage;
