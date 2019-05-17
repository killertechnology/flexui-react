import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      		<section className="main">
              <div className="spotlight">
                <div className="content">
                  <header className="major">
                    <h2 id="about"><br />About Me</h2>
                  </header>
                  <span className="proj-text">
                    <span className="image">
                      <img src="http://origin.flexui.com/storage/app/media/aws-badge.gif" alt="image" /></span>
                    <div className="proj-text">I am a strategic technical project manager with an exceptional history of leading successful IT projects. I'm a key player in organizational change with a strong background in cloud infrastructure and migrating legacy operations to the latest cloud technologies. I have over eighteen years of success in meeting critical software engineering challenges.<br /><br />
                      Knowledgeable and personable at a 50K foot level, I also have excellent hands-on development skills with a good eye for pushing my team in adhering to best practices. As a certified AWS Solutions Architect Associate I specialize in migrating organizations to the cloud by designing next generation software architecture that is scalable, fault tolerant and highly available.
                    </div>
                    <br /><br /><a href="#">See More</a> 
                    <div>This is more text to show below the primary description<div>
                        <ul className="actions">
                          <li><a href="http://origin.flexui.com/generic" className="button">About this website</a></li>
                        </ul>
                      </div>
                    </div></span></div>
              </div>
            </section>  
    )
  }
}