
import React, { useState, useEffect, useRef } from 'react';
import "../assets/css/fontawesome.css"
import "../assets/css/templatemo-edu-meeting.css"
import "../assets/css/owl.css"
import "../assets/css/lightbox.css"
import "../assets/vendor/bootstrap/css/bootstrap.min.css"

export default function HomePage(){
  const [Muted, setMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = Muted;
      videoRef.current.loop = true;
    }
  }, [Muted]);
    return (
        <>
        <link href="../assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="../assets/css/fontawesome.css" />
        <link rel="stylesheet" href="../assets/css/templatemo-edu-meeting.css" />
        <link rel="stylesheet" href="../assets/css/owl.css" />
        <link rel="stylesheet" href="../assets/css/lightbox.css" />
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
                    <a href="#top" className="active">
                      Home
                    </a>
                  </li>
                  <li className="scroll-to-section">
                      <a href="./EduVids">Videos</a>
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
        {/* ***** Main Banner Area Start ***** */}
    <section className="section main-banner" id="top" data-section="section1">
          <video 
            src="/course-video.mp4"
            autoPlay="true"
            ref={videoRef}
            muted={Muted} 
            loop 
            id="bg-video" 
          />
          
          <div className="video-overlay header-text">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="caption">
                    <button id={Muted? 'UnmuteButton':'MutedButton'} onClick={() => setMuted(!Muted)}/>
                    <h1 id="MainId1">Small Steps Lead to Big Changes</h1>
                    <h2 id="MainId2">Welcome to Time-Machine</h2>
                    <div className="main-button-red">
                      <div className="scroll-to-section">
                        <a href="./Login">Time-Travel Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Main Banner Area End ***** */}
        <section className="upcoming-meetings" id="meetings">
          <div className='backImg'/>
          <div className='frontGround'>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-heading">
                  <h2>Nature Saving Habits</h2>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="Categories">
                  <h4>Do's and Dont's</h4>
                  <br />
                  <h6>Do's</h6>
                  <ul>
                    <li>
                      🌱 Plant Trees: Support reforestation and local planting
                      efforts.
                    </li>
                    <li>
                      ♻️ Recycle &amp; Reuse: Minimize waste by recycling and
                      repurposing.
                    </li>
                    <li>
                      🚶 Conserve Water &amp; Energy: Opt for sustainable choices in
                      daily life.
                    </li>
                    <li>
                      🐾 Protect Wildlife Habitats: Support eco-friendly products and
                      tourism.
                    </li>
                  </ul>
                  <br />
                  <h6>Dont's</h6>
                  <ul>
                    <li>
                      🚫 Avoid Single-Use Plastics: Reduce plastic pollution by
                      choosing alternatives.
                    </li>
                    <li>
                      🏕️ Don't Disturb Natural Habitats: Respect wildlife and natural
                      areas.
                    </li>
                    <li>
                      🚗 Limit Fossil Fuel Use: Use public transport or eco-friendly
                      options.
                    </li>
                    <li>
                      🍃 Say No to Illegal Wildlife Products: Prevent exploitation of
                      endangered species.
                    </li>
                  </ul>
                  <div className="main-button-red">
                    <a href="./EduVids">See More Ideas</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-6">
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
                        Practicing the 5R's—Refuse, Reduce, Reuse, Recycle, conserve resources, 
                        and reduce environmental impact. By adopting these principles, 
                        we promote a sustainable, circular economy that benefits both the 
                        planet and our communities.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="meeting-item">
                      <div className="thumb">
                        <a href="./Water">
                          <img src="/water.jpeg"/>
                        </a>
                      </div>
                      <div className="down-content">
                        <a href="./Water">
                          <h4>Conserve Water</h4>
                        </a>
                        <p>
                        Conserving water helps protect our limited freshwater resources and ensures access to clean water for everyone. Simple actions, like fixing leaks and using water-efficient appliances, can make a significant impact on preserving this vital resource.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="meeting-item">
                      <div className="thumb">
                        <a href="./single_use_plastic">
                          <img src="/SingleUsePlasric.jpeg" alt="" />
                        </a>
                      </div>
                      <div className="down-content">
                        <a href="./single_use_plastic">
                          <h4>Reduce Single-Use Plastic</h4>
                        </a>
                        <p>
                        Reducing single-use plastic helps cut down on waste and pollution, protecting both land and marine ecosystems. Simple changes, like using reusable bags and bottles, can significantly reduce plastic waste, making a positive impact on the environment.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="meeting-item">
                      <div className="thumb">
                        <a href="./compost_food">
                          <img src="/Compost_Food_Waste.jpeg" alt="" />
                        </a>
                      </div>
                      <div className="down-content">
                        <a href="./compost_food">
                          <h4>Compost Food Waste</h4>
                        </a>
                        <p>
                        Composting food waste enriches soil and supports healthy gardens while reducing landfill waste. Though it requires some initial setup, the long-term benefits for both the environment and your garden are well worth it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
        <section className="our-facts">
          <video src="/backVid.mp4" ref = {videoRef} autoPlay={true} muted={true} loop={true} id="bg-video"/>
          <div className="container">
            <div className="video-overlay1">
              <div className="row1">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-12">
                      <h2>A Few Facts About Forests</h2>
                    </div>
                    <div className="col-lg-6">
                      <div className="row">
                        <div className="col-12">
                          <div className="count-area-content percentage">
                            <div className="count-digit">80</div>
                            <div className="count-title">
                              Species Dependent On Forest
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="count-area-content">
                            <div className="count-digit">662</div>
                            <div className="count-title">
                              Forest Carbon Storage in billion tons
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="row">
                        <div className="col-12">
                          <div className="count-area-content">
                            <div className="count-digit">1600</div>
                            <div className="count-title">
                              Indigenous Stewardship in million
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="count-area-content">
                            <div className="count-digit">10</div>
                            <div className="count-title">
                              Deforestation Rate in million hectares lost per year
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