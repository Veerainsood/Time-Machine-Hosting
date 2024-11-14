

export default function Water () {

    return (

        <>
  {/* ***** Header Area Start ***** */}
  <header className="header-area header-sticky">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
            {/* ***** Logo Start ***** */}
            <a href="index.html" className="logo">
              Conserve Water
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
                      <a href="#courses">Information</a>
                    </li>
                    <li className="scroll-to-section">
                      <a href="#contact">Contact Us</a>
                    </li>
                  <a className="menu-trigger">
                    <span>Menu</span>
                  </a>
                  {/* ***** Menu End ***** */}
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
  <section className="meetings-page" id="meetings">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-12">
              <div className="meeting-single-item">
                <div className="thumb">
                  <iframe
                    src="https://www.youtube.com/embed/VU5HcPMlEFE?si=zD17PM_NSiPOjzJP"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen=""
                  />
                </div>
                <div className="down-content">
                  <h4>Conserve Water</h4>
                  <p className="description">
                    Water conservation is essential for a sustainable future.
                    This section highlights simple actions and habits that can
                    significantly reduce water use in households.
                  </p>
                  <div className="row">
                    <ul>
                      <li>
                        <p>
                          <b>Fix Leaks Promptly:</b>A leaky faucet can waste
                          gallons daily—repairing leaks saves water and lowers
                          your bills.
                        </p>
                      </li>
                      <li>
                        <p>
                          <b>Install Low-Flow Fixtures:</b>Low-flow faucets,
                          showerheads, and toilets use less water without
                          compromising performance.
                        </p>
                        .
                      </li>
                      <li>
                        <p>
                          <b>Shorten Showers:</b>Aim for quick showers and turn
                          off water while lathering or shaving.
                        </p>
                      </li>
                      <li>
                        <p>
                          <b>Collect Rainwater for Plants:</b>Capture rainwater
                          in barrels for gardening, reducing reliance on
                          municipal water.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-12">
                    <div className="share">
                      <h5>Reference:</h5>../
                      <br />
                      <ul>
                        <li>
                          <p>
                            WaterSense (EPA) - Guide to Water-Efficient Products
                          </p>
                        </li>
                        <li>
                          <p>
                            National Resources Defense Council (NRDC) - Simple
                            Water Conservation Tips
                          </p>
                        </li>
                        <li>
                          <p>
                            American Water Works Association - Fix a Leak Week
                            Guide
                          </p>
                        </li>
                        <li>
                          <p>
                            Sustainable Living - Rainwater Harvesting Basics
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="main-button-red">
              <a href="meetings.html">Back To Practices List</a>
            </div>
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