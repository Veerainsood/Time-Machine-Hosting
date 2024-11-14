import { useEffect, useRef } from "react";

export default function EduVids (){
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Ensure the video is muted when the component mounts
      videoRef.current.muted = true;
      videoRef.current.loop = true;
    }
  }, []); 
  return(
      <>
<header className="header-area header-sticky background-header">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <nav className="main-nav">
          {/* ***** Logo Start ***** */}
          <a href="./" className="logo">
            Nature Saving Ideas
          </a>
          {/* ***** Logo End ***** */}
          {/* ***** Menu Start ***** */}
          <ul className="nav">
                <li className="scroll-to-section">
                    <a href="./">
                      Home
                    </a>
                  </li>
                  <li className="scroll-to-section">
                      <a href="#top" className="active">Videos</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="https://save-nature-site.onrender.com">Shop</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="./Login">3D</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#contact">Contact Us</a>
                  </li>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
          </ul>
          <a className="menu-trigger">
            <span>Menu</span>
          </a>
          {/* ***** Menu End ***** */}
        </nav>
      </div>
    </div>
  </div>
</header>
{/* ***** Header Area End ***** */}
<section className="heading-page header-text" id="top">
  <video src={"/1113751_Earth_Handicraft_1280x720.mp4"} autoPlay="true" ref={videoRef} loop id="bg-video">
  </video>
</section>
<section className="meetings-page" id="meetings">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-12">
            <div className="row grid">
              <div className="col-lg-4 templatemo-item-col all soon">
                <div className="meeting-item">
                  <div className="thumb">
                    <a href="./compost_food">
                      <img
                        src="/Compost_Food_Waste.jpeg"
                        alt="" 
                      />
                    </a>
                  </div>
                  <div className="down-content">
                    <a href="./compost_food">
                      <h4>Compost Food Waste</h4>
                    </a>
                    <p>
                      Great for gardening and soil health but requires initial
                      setup
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 templatemo-item-col all imp">
                <div className="meeting-item">
                  <div className="thumb">
                    <a href="./single_use_plastic">
                      <img
                        src="/SingleUsePlasric.jpeg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="down-content">
                    <a href="./single_use_plastic">
                      <h4>Reduce Single-Use Plastic</h4>
                    </a>
                    <p>Reduces waste and pollution directly.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 templatemo-item-col all soon">
                <div className="meeting-item">
                  <div className="thumb">
                    <a href="./small_Garden">
                      <img src="/Small_Garden.webp" alt="" />
                    </a>
                  </div>
                  <div className="down-content">
                    <a href="./small_Garden">
                      <h4>Grow a Small Garden</h4>
                    </a>
                    <p>
                      Supports the local environment and air quality but may
                      require time, space, and resources.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 templatemo-item-col all att">
                <div className="meeting-item">
                  <div className="thumb">
                    <a href="./eco_freindly_cleaning">
                      <img
                        src="/Eco-freindly-cleaner.jpeg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="down-content">
                    <a href="./eco_freindly_cleaning">
                      <h4>Eco-Friendly Cleaning Products</h4>
                    </a>
                    <p>
                      Reduces harmful chemical runoff,
                      <br />
                      benefiting local water systems.
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 templatemo-item-col all att">
                <div className="meeting-item">
                  <div className="thumb">
                    <a href="./natural_Light">
                      <img src="/Natural_Light.jpeg" alt="" />
                    </a>
                  </div>
                  <div className="down-content">
                    <a href="./natural_Light">
                      <h4>Opt for Natural Light </h4>
                    </a>
                    <p>
                      Saves energy costs and is easy to implement in most
                      homes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 templatemo-item-col all imp">
                <div className="meeting-item">
                  <div className="thumb">
                    <a href="./water">
                      <img src="/water.jpeg" alt="" />
                    </a>
                  </div>
                  <div className="down-content">
                    <a href="./water">
                      <h4>Conserve Water</h4>
                    </a>
                    <p>
                      Water conservation preserves limited freshwater
                      resources and ensures clean water for all. Simple
                      actions, like reducing waste and fixing leaks, make a
                      big difference.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 templatemo-item-col all imp att">
                <div className="meeting-item">
                  <div className="thumb">
                    <a href="./r">
                      <img src="/5R.jpeg" alt="" />
                    </a>
                  </div>
                  <div className="down-content">
                    <a href="./r">
                      <h4>5R's</h4>
                    </a>
                    <p>
                      Practicing this reduces the need for raw materials,
                      saves energy, and minimizes costs, promoting a
                      sustainable and circular economy..
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 templatemo-item-col all soon imp">
                <div className="meeting-item">
                  <div className="thumb">
                    <a href="./eco_freindly_appliances">
                      <img
                        src="/Eco_Freindly_Appliances.jpeg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="down-content">
                    <a href="./eco_freindly_appliances">
                      <h4>Use Energy-Efficient Appliances</h4>
                      <p>Reduces household energy consumption long-term</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 templatemo-item-col all att soon">
                <div className="meeting-item">
                  <div className="thumb">
                    <a href="./unplug">
                      <img src="/Unplug.jpeg" alt="" />
                    </a>
                  </div>
                  <div className="down-content">
                    <a href="./unplug">
                      <h4> Unplug Devices When Not in Use</h4>
                    </a>
                    <p>
                      Prevents energy wastage and is simple to adopt daily
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="pagination">
              <ul>
                <li>
                  <a href="#">1</a>
                </li>
                <li className="active">
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="contact-us" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 align-self-center">
                <div className="row">
                  <div className="col-lg-12">
                  <form
                    id="contact"
                    action=""
                    method="post"
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert("Your message has been recorded!!");
                    }}
                  >
                      <div className="row">
                        <div className="col-lg-12">
                          <h2>Let's get in touch</h2>
                        </div>
                        <div className="col-lg-4">
                          
                            <input
                              name="name"
                              type="text"
                              id="name"
                              placeholder="YOURNAME...*"
                              required=""
                            />
                          
                        </div>
                        <div className="col-lg-4">
                          
                            <input
                              name="email"
                              type="text"
                              id="email"
                              pattern="[^ @]*@[^ @]*"
                              placeholder="YOUR EMAIL..."
                              required=""
                            />
                          
                        </div>
                        <div className="col-lg-4">
                          
                            <input
                              name="subject"
                              type="text"
                              id="subject"
                              placeholder="SUBJECT...*"
                              required=""
                            />
                          
                        </div>
                        <div className="col-lg-12">
                          
                            <textarea
                              name="message"
                              type="text"
                              className="form-control"
                              id="message"
                              placeholder="YOUR MESSAGE..."
                              required=""
                              defaultValue={""}
                            />
                          
                        </div>
                        <div className="col-lg-12">
                        <button className="button">
                          SEND MESSAGE NOW
                        </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="right-info">
                  <ul>
                    <li>
                      <h6>Phone Number</h6>
                      <span>66666999999</span>
                    </li>
                    <li>
                      <h6>Email Address</h6>
                      <span>timeMachine@gmail.com</span>
                    </li>
                    <li>
                      <h6>Street Address</h6>
                      <span>IIT Tirupati India</span>
                    </li>
                    <li>
                      <h6>Website URL</h6>
                      <span>www.timeTravels.com</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
{/* Scripts */}
{/* Bootstrap core JavaScript */}
</>

  )
}