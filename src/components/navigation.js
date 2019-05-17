import React, { Component } from 'react'

export default class Navigation extends Component {
  render() {
    return (
      		<nav id="nav">
            <ul>
              <li><a href="#about" id="#about" className="navul" rel="modal:close">About</a></li>
              <li><a href="#projects" id="#projects" className="navul" rel="modal:close">Recent Projects</a></li>
              <li><a href="#CMS" id="#CMS" className="navul" rel="modal:close">DevOps</a></li>
              <li><a href="#tools" id="#tools" className="navul" rel="modal:close">Tools</a></li>
            </ul>
          </nav>
    )
  }
}