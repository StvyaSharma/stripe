import React from 'react';
import ide from '../assets/images/ide.png';
import gear from '../assets/icons/gear.svg';
import tab from '../assets/icons/tab.svg';
import animatedBox from '../assets/icons/animated-box.svg';
import html from '../assets/icons/html.svg';



function Terminal() {
    return (


        <div className="terminal-content" style={{ backgroundColor: '' }}>
            <div className="terminal-upper" style={{ display: 'flex' }}>
                <div className="upper-text" style={{ zIndex: '10' }}>
                    <span className="terminal-head" style={{ zIndex: '10' }}>
                        Global scale
                    </span>
                    <h1 className="terminal-title" style={{ zIndex: '10' }}>
                        The backbone for global commerce
                    </h1>
                    <p className="terminal-desc" style={{ zIndex: '10' }}>
                        Stripe makes moving money as easy and programmable as moving data. Our teams are based in offices around the world and we process hundreds of billions of dollars each year for ambitious businesses of all sizes.
                    </p>

                </div>
                {/* <div className="terminal-pic">
                        <img src={ide} alt="terminal" />
                    </div> */}
            </div>

            <div className="terminal-details">
                <div className="box" style={{ zIndex: '10', width: '100%' }}>

                    <h4 className="head">250+</h4>
                    <p className="desc">

                        API requests per day, peaking at 13,000 requests a second.

                    </p>

                </div>

                <div className="box" style={{ zIndex: '10', width: '100%' }}>

                    <h4 className="head">99.999%</h4>
                    <p className="desc">

                        historical uptime for <a class="
    Link
    
  " data-js-controller="AnalyticsButton" data-analytics-category="Links" data-analytics-action="Clicked" data-analytics-label="Global Stripe services">Stripe services</a>
                    </p>

                </div>

                <div className="box" style={{ zIndex: '10', width: '100%' }}>

                    <h4 className="head">47+</h4>
                    <p className="desc">

                        countries with local acquiring.

                    </p>

                </div>

                <div className="box" style={{ zIndex: '10', width: '100%' }}>

                    <h4 className="head">135+</h4>
                    <p className="desc">

                        currencies and payment methods supported.

                    </p>

                </div>
            </div>
        </div>

    );
}

export default Terminal;
