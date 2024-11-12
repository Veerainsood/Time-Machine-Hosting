export default function Unplug () {

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
              Unplug Devices When Not in Use
            </a>
            {/* ***** Logo End ***** */}
            {/* ***** Menu Start ***** */}
            <ul className="nav">
                  <li className="scroll-to-section">
                      <a href="./" className="active">
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
                    src="https://www.youtube.com/embed/HoCBudoWS8w?si=hvBhgEycEo9a8UhJ"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen=""
                  />
                </div>
                <div className="down-content">
                  <h4>Unplug Devices When Not in Use</h4>
                  <p className="description">
                    Unplugging devices reduces phantom energy consumption and
                    helps cut down on electricity bills. Here are tips for
                    managing standby power use and maximizing energy savings.
                  </p>
                  <div className="row">
                    <ul>
                      <li>
                        <p>
                          <b>Use Power Strips:</b> Plug multiple devices into a
                          power strip, turning it off when devices aren’t in
                          use.
                        </p>
                      </li>
                      <li>
                        <p>
                          <b>Unplug Chargers:</b>Chargers continue to draw power
                          even when they’re not connected to a device.
                        </p>
                        .
                      </li>
                      <li>
                        <p>
                          <b>Turn Off at Night:</b> Devices like TVs, routers,
                          and gaming consoles can be unplugged overnight to save
                          energy.
                        </p>
                      </li>
                      <li>
                        <p>
                          <b>Monitor Energy Usage:</b> Smart plugs and energy
                          meters help track power use, identifying
                          high-consumption devices.
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
                            Lawrence Berkeley National Laboratory - Standby
                            Power and Energy Waste
                          </p>
                        </li>
                        <li>
                          <p>ENERGY STAR - Managing Home Energy Use</p>
                        </li>
                        <li>
                          <p>
                            U.S. Department of Energy - Guide to Reducing
                            Phantom Load
                          </p>
                        </li>
                        <li>
                          <p>EcoHome Tips - Benefits of Unplugging Devices</p>
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