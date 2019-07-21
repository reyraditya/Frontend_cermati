import React, { Component } from 'react';
import { Collapse } from 'reactstrap';
import Slide from 'react-reveal/Slide';

import logo from '../resources/y-logo-white.png';
// import cross from '../resources/cross.png'
import '../css/header.css'
import '../css/highlights.css'
import '../css/footer.css'
import '../css/notification.css'
import '../css/newsletter.css'

class Home extends Component {
    state = {
        notifOpen: true,
        isHidden: false
    }

    toggle = () => {
        this.setState({
            notifOpen: !this.state.notifOpen
        })
    }

    togglePanel = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getYear = () => {
        return new Date().getFullYear();
    }

    render() {
        return (
            <div>
                {/* Notification board */}
                <Collapse isOpen={this.state.notifOpen} className="sticky-top">
                    <div className="notification-board row">
                        <div className="col-8 notif">By accessing and using this website, you acknowledge that you have read and understand our <span>Cookie Policy, Privacy Policy,</span> and our <span>Terms of Service.</span></div>
                        <div>
                            <button className="btn btn-primary" onClick={this.toggle}>Got it</button>
                        </div>
                    </div>
                </Collapse>
                {/* Header section */}
                <div className="header-section">
                   <div className="blue-overlay">
                        <img src={logo} className="mx-4 my-4 logo" alt="background" />
                        <div className="hero-shot">
                            <div className="headline">
                                <p>Reyhan Raditya | Cermati.com Front End Developer Entry Test</p>
                                <p className="headline1">Consult, Design, and Develop Websites</p>
                                <p className="headline2">Have something great in mind? Feel free to contact me.</p>
                                <p className="headline3">I'll help you to make it happen.</p>
                            </div>
                            <button className="btn btn-outline button-headline text-uppercase mt-3">
                                let's make contact
                            </button>
                        </div>
                   </div>
                </div>
                {/* Highlights panel */}
                <div className="container-fluid highlights-panel">
                    <div>
                        <div className="paneltitle1">
                            <p>How can I help you?</p>
                        </div>
                        <div className="paneltitle2">
                            <p className="panelbody1">Our work when targeted, best practices outcomes social innovation synergy.</p>
                            <p className="panelbody2">Venture philantrophy, revolutionary inclusive policy maker relief. User-centered <span className="d-block mt-1">program areas scales.</span></p>
                        </div>
                        {/* Grid */}
                        <div className="grid mx-5">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="tiles">
                                            <div className="tilestitle">
                                                Consult
                                                <i class="far fa-comments"></i>
                                            </div>
                                            <div className="tilesbody">
                                                Co-create design thinking, strengthen infrastructure, resist granular. Revolution circular, movement or framework social impact low-hanging fruit. Save the world, compelling revolutionary progress. 
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="tiles">
                                                    <div className="tilestitle">
                                                        Design
                                                        <i class="fas fa-paint-brush"></i>
                                                    </div>
                                                    <div className="tilesbody">
                                                    Co-create design thinking, strengthen infrastructure, resist granular. Revolution circular, movement or framework social impact low-hanging fruit. Save the world, compelling revolutionary progress. 
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="tiles">
                                                    <div className="tilestitle">
                                                        Develop
                                                        <i class="fas fa-cubes"></i>
                                                    </div>
                                                    <div className="tilesbody">
                                                    Co-create design thinking, strengthen infrastructure, resist granular. Revolution circular, movement or framework social impact low-hanging fruit. Save the world, compelling revolutionary progress. 
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Tiles 2nd row */}
                                    <div className="grid2 row">
                                        <div className="col-4">
                                            <div className="tiles2">
                                                <div className="tilestitle">
                                                    Marketing
                                                    <i class="fas fa-bullhorn"></i>
                                                </div>
                                                <div className="tilesbody">
                                                    Co-create design thinking, strengthen infrastructure, resist granular. Revolution circular, movement or framework social impact low-hanging fruit. Save the world, compelling revolutionary progress. 
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="tiles2">
                                                <div className="tilestitle">
                                                    Manage
                                                    <i class="fas fa-align-left"></i>
                                                </div>
                                                <div className="tilesbody">
                                                    Co-create design thinking, strengthen infrastructure, resist granular. Revolution circular, movement or framework social impact low-hanging fruit. Save the world, compelling revolutionary progress. 
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="tiles2">
                                                <div className="tilestitle">
                                                    Evolve
                                                    <i class="fas fa-chart-line"></i>
                                                </div>
                                                <div className="tilesbody">
                                                    Co-create design thinking, strengthen infrastructure, resist granular. Revolution circular, movement or framework social impact low-hanging fruit. Save the world, compelling revolutionary progress. 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Footer */}
                        <div className="footer-section">
                            <div className="text-center">
                                <div className="footer-text">
                                    © {this.getYear()} Reyhan Raditya. All rights reserved. 
                                </div>
                            </div>
                        </div>
                        {/* newsletter board */}
                        <div className="newsletter-panel fixed-bottom">
                             <Slide bottom>
                                <div className="container newsletter-content">
                                    <div className="d-flex">
                                        <header>Get latest updates in web technologies</header>
                                        <span className="newsletter-icon">
                                        <button><i class="fas fa-times"></i></button>
                                        </span>
                                    </div>
                                    <body>
                                        I write articles related to web technologies, such as design trends, development tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get them all.
                                    </body>
                                    <form className="d-flex mb-3 newsletter-footer">
                                        <input className="newsletter-input form-control" placeholder="Email address"></input>
                                        <button className="button-newsletter" onClick={() => this.togglePanel()}>Count me in!</button>
                                    </form>
                                </div>
                            </Slide>
                        </div>
                    </div>
        )
    }
}

export default Home