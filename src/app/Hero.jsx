import React, { useState } from 'react';
import desktop from '../assets/images/desktop.jpg';
import phone from '../assets/images/phone1.png';
import { IoIosArrowForward, IoMdArrowForward } from 'react-icons/io';
import Image from 'next/image'

function Hero() {
    const [isHovered, setHovered] = useState(false);
    const [isHovered2, setHovered2] = useState(false);
    return (
        <section className="hero">
            <div>
                <div className="hero-title-container">
                    <h1 className="title title-main ">
             
                    Financial infrastructure <br />
                        for the internet
                    </h1>
                    <p className="title title__second">
                    Financial infrastructure <br />
                        for the internet
                    </p>
                    <p className="title title__overlay">
                    Financial infrastructure <br />
                        for the internet
                    </p>
                </div>

                <div className="hero-desc-container">
                    <p className="desc">
                    Millions of companies of all sizes use Stripe online and in person to accept payments, send payouts, automate financial processes, and ultimately grow revenue
                    </p>
                </div>

                <div className="hero-btn-container">
                    <button className="btn1 flex items-center imp-link" onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)} >Start now{isHovered ? <IoMdArrowForward /> : <IoIosArrowForward />}</button>
                    <button className="btn2 flex items-center imp-link" onMouseEnter={() => setHovered2(true)}
                        onMouseLeave={() => setHovered2(false)} >Contact sales {isHovered2 ? <IoMdArrowForward /> : <IoIosArrowForward />}</button>
                </div>
            </div>

            <div className="hero-pictures">
                <div style={{ position: 'absolute', top: '-200px', right: '-700px', width: '1198px', height: '811px', zIndex: 1 }}>
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
                <div style={{ position: 'absolute', top: '-300px', right: '-100px', width: '581px', height: '1190px', zIndex: '2' }}>
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
