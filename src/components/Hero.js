import React from "react";
import { Tab, Nav, Col, Row } from "react-bootstrap";

import hero from "../img/hero.png";
import svg1 from "../img/1.svg";
import svg2 from "../img/2.svg";
import svg3 from "../img/3.svg";
import svg4 from "../img/4.svg";
import heart from "../img/heart.svg";
import clock from "../img/clock.svg";
import tick from "../img/tick.svg";
import prize from "../img/prize.svg";
import sushi from "../img/sushi2.jpg";
import orange from "../img/orange2.png";
import kitchen from "../img/kitchen2.jpg";
import Services from "./Services";
import FormPage from "./FormPage";

const Hero = () => {
  return (
    <>
      {/* HERO */}

      <div className="container hero">
        <div className="row container px-5">
          <div className="col-8 mt-5">
            <h3>AWARD WINNING</h3>
            <h1 className="heading py-3">DIGITAL MARKETING AGENCY</h1>
            <p className="pb-3 w-75">
              Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
              Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
              lacus nec risus finibus feugiat et fermentum
            </p>
            <FormPage />
          </div>
          <div className="col-4">
            <div className="text-center">
              <img src={hero} className="h-2 img img-fluid" />
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES */}

      <Services />

      {/* WHY CHOOSE US & PROJECTS */}

      <div className="container hero">
        <div className="container">
          <div className=" text-center">
            <h4>WHY CHOOSE US</h4>
            <h1 className="py-3">WHY WE ARE THE BEST</h1>
          </div>

          <div className="row my-5">
            <div className="col-3">
              <img src={svg1} className="pb-3" />
              <h4 className="pb-2">Clarified Vision & Target</h4>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
            <div className="col-3">
              <img src={svg2} className="pb-4" />
              <h4 className="pb-2">High Performance</h4>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
            <div className="col-3">
              <img src={svg3} className="pb-3" />
              <h4 className="pb-2">Maintain Security</h4>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
            <div className="col-3">
              <img src={svg4} className="pb-3" />
              <h4 className="pb-2">Better Strategy & Quality</h4>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
          </div>

          <div className="mt-5 pt-4 text-center">
            <h4>OUR PROJECTS</h4>
            <h1 className="py-3">WHY WE ARE THE BEST</h1>
          </div>

          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              {/* <Col sm={1}></Col> */}
              <Col sm={7}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="container text-center mt-2">
                      <img src={sushi} className="img img-fluid" />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="container text-center mt-2">
                      <img src={orange} className="img img-fluid" />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <div className="container text-center mt-2">
                      <img src={kitchen} className="img img-fluid " />
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>

              <Col sm={5}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item className="tab">
                    <Nav.Link eventKey="first">
                      <h5 className="pt-4 pb-3">
                        Genderless Kei – Japan’s Hot
                      </h5>
                      <p>
                        Set to launch on the manufacturer’s new A330neo aircraft
                        in 2017, it’s offering lots of
                      </p>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="tab">
                    <Nav.Link eventKey="second">
                      <h5 className="pt-4 pb-3">Better Strategy & Quality</h5>
                      <p>
                        Set to launch on the manufacturer’s new A330neo aircraft
                        in 2017, it’s offering lots of
                      </p>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="tab">
                    <Nav.Link eventKey="third">
                      <h5 className="pt-4 pb-3">
                        Genderless Kei – Japan’s Hot
                      </h5>
                      <p>
                        Set to launch on the manufacturer’s new A330neo aircraft
                        in 2017, it’s offering lots of
                      </p>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={1}></Col>
            </Row>
          </Tab.Container>
        </div>
      </div>

      {/* GROWTH */}

      <div className="serviceBg">
        <div className="container hero">
          <div className=" text-center">
            <h3>EXPERTS GROWTH</h3>
            <h1 className="py-3">OUR COMPANY'S GROWTH</h1>
          </div>
          <div className="row container px-5 pt-3">
            <div className="container-fluid">
              <div className="row flex-row flex-nowrap">
                <div className="col-3 ">
                  <div className="card card-block mx-3 text-center">
                    <img src={heart} className="icon my-3" />
                    <h1>199+</h1>
                    <p>Satisfied Customers</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card card-block mx-3 text-center">
                    <img src={clock} className="icon my-3" />
                    <h1>1591+</h1>
                    <p>Days Of Operation</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card card-block mx-3 text-center">
                    <img src={tick} className="icon my-3" />
                    <h1>283+</h1>
                    <p>Projects Completed</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="card card-block mx-3 text-center">
                    <img src={prize} className="icon my-3" />
                    <h1>75+</h1>
                    <p>Awards Won</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FEEDBACK */}

      <div className="container hero">
        <div className="container px-5">
          <div className="text-center">
            <h4>CLIENTS' FEEDBACK</h4>
            <h1 className="py-3">WHAT THEY SAY ABOUT US !</h1>
          </div>
          <div className="feedback">
            <p>
              Jannat Tumpa The standard chunk of Lorem Ipsum used since the
              1500s is reproduced below for those interested. Sections Bonorum
              et Malorum original.
            </p>
            <strong>JANNAT TUMPA</strong>
            <span className="text-muted">
              - COO, AMERIMAR ENTERPRISES, INC.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
