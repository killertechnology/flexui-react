import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      		<section className="main">
              <header className="major">
                <h2 id="projects">Recent Projects</h2>
                <p>Check out some of my recent projects.</p>
              </header>
              <ul className="features" style={{textAlign: 'left'}}>
                <li>
                  <div>
                    <a href="#ex-wedding" rel="modal:open" className="proj-header">
                      Taco Bell Weddings<br />
                      <div className="proj-text">Get married in a Taco Bell.</div>
                      <div className="proj-image"><img src="http://origin.flexui.com/storage/app/media/icon-wedding.jpg" /></div>
                      <div className="proj-link">More info</div>
                    </a>
                    <div id="ex-wedding" className="modal">
                      <div className="proj-header">Taco Bell Weddings<br /></div>
                      <span className="proj-image"><img src="http://origin.flexui.com/storage/app/media/icon-wedding.jpg" /></span>
                      <div className="proj-byline">That's right - people can get married inside a Taco Bell. This e-commerce platform is built with shopify and a custom front end layer that allows couples to reserve their time in the Las Vegas Taco Bell Wedding Chapel.<br /><br /><a href="http://tacobellwedding.com" target="new">visit TacoBellWedding.com</a><br /><br />
                      </div>
                      <a href="#" rel="modal:close">Close</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <a href="#ex-sabsat" rel="modal:open" className="proj-header">
                      Taco Bell World Series<br />
                      <div className="proj-text">Everyone gets a free taco.</div>
                      <div className="proj-image"><img src="http://origin.flexui.com/storage/app/media/icon-sabsat.jpg" /></div>
                      <div className="proj-link">More info</div>
                    </a>
                    <div id="ex-sabsat" className="modal">
                      <div className="proj-header">Taco Bell World Series<br /></div>
                      <span className="proj-image"><img src="http://origin.flexui.com/storage/app/media/icon-sabsat.jpg" /></span>
                      <div className="proj-byline">Scaling up "Taco Bell Steal A Base" promo for the first baserunner of the World Series who steals a base. At that moment, everyone receives a free taco. Preparing the hosting environment for the  instantaneous, impending event is critical since a burst of web traffic arrives exactly 10 seconds after the base is stolen.<br /><br />
                        <span className="proj-image"><img src="http://origin.flexui.com/storage/app/media/icon-sabsat.jpg" /></span><br />
                        Scaling up "Taco Bell Steal A Base" promo for the first baserunner of the World Series who steals a base. At that moment, everyone receives a free taco. Preparing the hosting environment for the  instantaneous, impending event is critical since a burst of web traffic arrives exactly 10 seconds after the base is stolen.<br /><br />
                      </div>
                      <div rel="modal:close">Close</div>
                    </div>
                  </div>
                </li>
              </ul>
            </section>  
    )
  }
}