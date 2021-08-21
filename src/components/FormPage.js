import React from "react";

const FormPage = () => {
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        data-toggle="modal"
        data-target="#exampleModalCenter"
        className="ml-3"
      >
        CONTACT US
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <section className="get-in-touch container px-4 mt-3">
                <h3 className="title">Get in touch</h3>
                <form
                  action="https://getform.io/f/831aa423-5c95-4f18-b5d4-604a6714d17d"
                  method="POST"
                  className="contact-form row"
                >
                  <div className="form-field col-lg-12">
                    <input
                      id="email"
                      name="email"
                      className="input-text js-input"
                      type="email"
                      required
                      placeholder="Work E-mail*"
                    />
                  </div>
                  <div className="form-field col-lg-6">
                    <input
                      id="name"
                      name="name"
                      className="input-text js-input"
                      type="text"
                      required
                      placeholder="First Name*"
                    />
                  </div>
                  <div className="form-field col-lg-6 ">
                    <input
                      id="Lname"
                      name="Lname"
                      className="input-text js-input"
                      type="text"
                      required
                      placeholder="Last Name*"
                    />
                  </div>

                  <div className="form-field col-lg-12">
                    <label className="cuntainer">
                      I agree to Fyle's terms and conditions, and provide
                      consent to send me communication.
                      <input type="checkbox" name="subscribe" required />
                      <span className="checkmark"></span>
                    </label>
                  </div>

                  <div className="form-field col-lg-12 text-center">
                    <input
                      className="submit-btn"
                      type="submit"
                      value="Submit"
                    />
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormPage;
