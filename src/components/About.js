// function About(){
//     return(
//         <>
//         <h3>About</h3>
//         </>
//     )
// }
// export default About;
import { Component } from "react";

class About extends Component {
  render() {
    return (
      <div data-testid="about-content">
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="https://images.pexels.com/photos/19937873/pexels-photo-19937873/free-photo-of-couple-in-white-shirts-sitting-on-white-hyundai-creta.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                ABC Automobiles
              </h1>
              <p className="lead">
                Quickly design and customize responsive mobile-first sites with
                Bootstrap, the world’s most popular front-end open source
                toolkit, featuring Sass variables and mixins, responsive grid
                system, extensive prebuilt components, and powerful JavaScript
                plugins.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-md-2"
                >
                  Vehicles
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Contact US
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img
                src="https://images.pexels.com/photos/9846190/pexels-photo-9846190.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img-top"
                height={300}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Mahindra thar</h5>
                <p className="card-text">
                  The Mahindra Thar is a rugged and iconic SUV known for its
                  off-road capabilities and classic design. It combines a robust
                  build with modern features, making it popular among adventure
                  enthusiasts and urban drivers alike.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  <button type="button" class="btn btn-outline-primary">
                    View more..
                  </button>
                </small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://images.pexels.com/photos/11143602/pexels-photo-11143602.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img-top"
                height={300}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Fortuner 4X2</h5>
                <p className="card-text">
                  The Toyota Fortuner 4x2 is a prominent SUV known for its
                  reliability, comfort, and strong performance on and off the
                  road. It features a spacious interior with seating for up to
                  seven passengers, making it ideal for families and adventure
                  seekers.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  <button type="button" class="btn btn-outline-primary">
                    View more..
                  </button>
                </small>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src="https://images.pexels.com/photos/11158776/pexels-photo-11158776.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="card-img-top"
                height={300}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Hyundai Creta</h5>
                <p className="card-text">
                  The Hyundai Creta is a compact SUV that has gained popularity
                  for its stylish design, comfort, and practicality. It offers a
                  choice of petrol and diesel engines, along with manual and
                  automatic transmissions, catering to various preferences and
                  driving conditions.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  <button type="button" class="btn btn-outline-primary">
                    View more..
                  </button>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
