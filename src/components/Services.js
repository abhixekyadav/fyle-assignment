import React from "react";

import icon from "../img/icon.svg";
import arrow from "../img/arrow.svg";
import one from "../img/1.png";
import two from "../img/2.png";
import three from "../img/3.png";

const Services = () => {
  return (
    <div className="serviceBg">
      <div className="container hero">
        <div className="row container px-5">
          <h4>WHAT WE DO</h4>
          <div className="col-5">
            <h1 className="pb-4 pt-2">
              SERVICES PROVIDED <br /> FOR YOU
            </h1>
          </div>
          <div className="col-7">
            <p className="pb-3 w-75 pt-2">
              Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
              Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
              lacus nec risus finibus feugiat et fermentum
            </p>
          </div>

          <div className="container-fluid">
            <div className="row flex-row flex-nowrap scrolling-wrapper">
              <div className="col-3">
                <div className="card-block">
                  <div className="">
                    <div className="card-front position-relative">
                      <img src={two} className="img img-fluid" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className="card-block">
                  <div className="card-inner">
                    <div className="card-front">
                      <img src={one} className="img img-fluid" />
                    </div>
                    <div className="card-back">
                      <div className="card-block pinkCard">
                        <img src={icon} className="mt-4 mb-4" />
                        <h5 className="headingWhite pb-1">WEB DEVELOPMENT</h5>
                        <p>
                          Morbi sed lacus nec risus finibus feugiat et fermentum
                          nibh. Pellentesque
                        </p>
                        <a href="https://www.fylehq.com/" target="_blank">
                          <button className="cardButton">
                            READ MORE <img src={arrow} className="pb-1" />
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className="card-block">
                  <div className="card-inner">
                    <div className="card-front">
                      <img src={two} className="img img-fluid" />
                    </div>
                    <div className="card-back">
                      <div className="card-block pinkCard">
                        <img src={icon} className="mt-4 mb-4" />
                        <h5 className="headingWhite pb-1">WEB DEVELOPMENT</h5>
                        <p>
                          Morbi sed lacus nec risus finibus feugiat et fermentum
                          nibh. Pellentesque
                        </p>
                        <a href="https://www.fylehq.com/" target="_blank">
                          <button className="cardButton">
                            READ MORE <img src={arrow} className="pb-1" />
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div className="card-block">
                  <div className="card-inner">
                    <div className="card-front">
                      <img src={three} className="img img-fluid" />
                    </div>
                    <div className="card-back">
                      <div className="card-block pinkCard">
                        <img src={icon} className="mt-4 mb-4" />
                        <h5 className="headingWhite pb-1">WEB DEVELOPMENT</h5>
                        <p>
                          Morbi sed lacus nec risus finibus feugiat et fermentum
                          nibh. Pellentesque
                        </p>
                        <a href="https://www.fylehq.com/" target="_blank">
                          <button className="cardButton">
                            READ MORE <img src={arrow} className="pb-1" />
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
