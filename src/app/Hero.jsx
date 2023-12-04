import React from 'react';
import desktop from '../assets/images/desktop.jpg';
import phone from '../assets/images/phone1.png';

import Image from 'next/image'

function Hero() {
    return (
        <section className="hero">
            <div>
                <div className="hero-title-container">
                    <h1 className="title title-main ">
                        Payments infrastructure <br />
                        for the internet
                    </h1>
                    <p className="title title__second">
                        Payments infrastructure <br />
                        for the internet
                    </p>
                    <p className="title title__overlay">
                        Payments infrastructure <br />
                        for the internet
                    </p>
                </div>

                <div className="hero-desc-container">
                    <p className="desc">
                        Millions of businesses of all sizes—from startups to
                        large enterprises—use Stripe’s software and APIs to
                        accept payments, send payouts, and manage their
                        businesses online.
                    </p>
                </div>

                <div className="hero-btn-container">
                    <button className="btn1">Start now &gt;</button>
                    <button className="btn2">Contact sales &gt;</button>
                </div>
            </div>

            <div className="hero-pictures">
                <div style={{ position: 'absolute', top: '-200px', right: '-700px', width:'1198px',height:'811px' ,zIndex:1}}>
                    <Image
                        src={desktop}
                        alt="desktop"
                        width={1198}
                        height={811}
                        style={{
                            borderRadius: '1.2rem',
                            boxShadow: '90px 90px 150px -70px grey',
                            transform: 'scale(0.6)',
                        }}
                    />
                </div>
                <div style={{ position: 'absolute', top: '-300px', right: '-100px', width:'581px',height:'1190px',zIndex:'2' }}>
                    <Image
                        src={phone}
                        alt="phone"
                        width={581}
                        height={1190}
                        style={{
                            borderRadius: '7rem',
                            boxShadow: '0 0 200px -10px grey',
                            transform: 'scale(0.4)',
                        }}
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
