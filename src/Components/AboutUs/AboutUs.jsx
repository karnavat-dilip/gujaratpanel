import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../Breadcrumbs'
import stardelta from '../../Assets/14611_stardelta.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { v4 as uuidv4 } from 'uuid';
import { IoBarChartSharp } from "react-icons/io5";
import { PiCheckSquareOffsetFill } from "react-icons/pi";
import { IoFlaskSharp } from "react-icons/io5";
import Value from '../../Assets/values.jpg'
import OurMission from '../../Assets/mission.jpg'
import OurVision from '../../Assets/vision.jpg'
import about from '../../Assets/about.jpg'
import TaTa from '../../Assets/testi1.jpg'
import reliance from '../../Assets/testi2.jpg'
import wasmo from '../../Assets/testi3.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './About.css'
import certificate1 from '../../Assets/certificate1.png'
import certificate2 from '../../Assets/certificate2.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

function About() {
    return (
        <div>
            <p>We, “Gujarat Panel Private Limited” [Formerly known as “Gujarat Panel”] was established in the year 1998, certified by ISO 9001-2015, with the aim to provide the best quality products like, Electrical Control Panel Products to our valued customers.</p>
        </div>
    );
}

function OurStrength() {
    return (
        <div>
            <p>The company certified with ISO 9001-2015, manufacturing more than 130 models with in house most advanced, highly erudite manufacturing unit having capacity of 100,000 units annually with more than 100 dedicated manpower. We have our distribution and supply network in entire India. </p>
        </div>
    );
}

function OurService() {
    return (
        <div>
            <p>Gujarat Panel provides services to its Distributors / Dealers / End Customers on a continuous basis as and when required, as complete customer satisfaction is the focus. Gujarat Panel take pride in providing high quality products and the services to maintain pumps over the years.</p>
        </div>
    );
}
function AboutUs() {
    const [content, setContent] = useState(About);
    const [activeLink, setActiveLink] = useState('about');
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const openLightbox = (index) => {
        console.log(index);
        setPhotoIndex(index);
        setIsOpen(true);
    };

    const handleNavigation = (contentComponent, linkName) => {
        setContent(contentComponent);
        setActiveLink(linkName)
    };
    useEffect(() => {
        AOS.init()
    }, [])
    const images = [
        certificate1,
        certificate2,
    ]
    return (
        <div>
            <Breadcrumbs title='About Us' />
            <section className='m-top53px'>
                <div className='container'>
                    <div className='about-container'>
                        <div data-aos="fade-up">
                            <img src={about} />
                        </div>
                        <div className='second-child' data-aos="fade-up">
                            <h1>Welcome To Gujarat Panel</h1>
                            <p>We, “Gujarat Panel Private Limited” [Formerly known as “Gujarat Panel”] was established in the year 1998, certified by ISO 9001-2015, with the aim to provide the best quality products like, Electrical Control Panel Products to our valued customers.</p>
                        </div>
                        <div data-aos="fade-up">
                            <h1>Our Certificates</h1>
                            <div className='product-container'>
                                <Swiper

                                    loop={true}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={true}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}

                                >
                                    {
                                        images?.map((src, index) => {
                                            return (
                                                <SwiperSlide key={index} className='swiper-child'>
                                                    <LazyLoadImage
                                                        className='lazy'
                                                        onClick={() => openLightbox(index)}
                                                        effect="blur"
                                                        src={src}
                                                        alt={`Gallery ${index}`}
                                                    />
                                                </SwiperSlide>

                                            )
                                        })
                                    }
                                </Swiper>
                                {isOpen && (
                                    <Lightbox
                                        mainSrc={images[photoIndex]}
                                        nextSrc={images[(photoIndex + 1) % images.length]}
                                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                        onCloseRequest={() => setIsOpen(false)}
                                        onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                                        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                                    />
                                )}
                            </div>
                        </div>
                        <div className='second-child' data-aos="fade-up">
                            <h1>Why Gujarat Panel?</h1>
                            <div>
                                <div className='bd-highlight'>
                                    <IoBarChartSharp />

                                    <h2>Performence</h2>
                                    <p>
                                        Measure the energy efficiency of the panel and its ability to deliver the required power output without excessive energy loss.

                                    </p>
                                </div>
                                <div className='bd-highlight'>
                                    <PiCheckSquareOffsetFill />


                                    <h2>High Quality
                                    </h2>
                                    <p>
                                        Implement rigorous quality control at each stage of production, including inspection of incoming materials, in-process inspections, and final testing of the assembled panels.

                                    </p>
                                </div>
                                <div className='bd-highlight'>
                                    <IoFlaskSharp />

                                    <h2>Testing</h2>
                                    <p>
                                        Measure the insulation resistance of electrical circuits to prevent short circuits.


                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up">
                            <div className='nav-container'>
                                <div className='b-btm'>
                                    <h1>Who we are?</h1>
                                </div>
                                <div>
                                    <nav>
                                        <ul>
                                            <li className={activeLink === 'about' ? 'activelink' : ''} onClick={() => handleNavigation(About, 'about')}>About Us</li>
                                            <li className={activeLink === 'strength' ? 'activelink' : ''} onClick={() => handleNavigation(OurStrength, 'strength')}>OurStrength</li>
                                            <li className={activeLink === 'service' ? 'activelink' : ''} onClick={() => handleNavigation(OurService, 'service')}>Our Service</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className='text-indent'>

                                {content && content}

                            </div>
                        </div>
                        <div className='ourmission' data-aos="fade-up">
                            <div>
                                <img src={Value} width='100' />

                                <h2>Value</h2>
                                <p>
                                    We have earned clients’ trust with reliable service and quality products. We accept the consequences of our actions as a sign of responsibility. Our professionalism can be viewed through flawless service and high-end products.
                                </p>
                            </div>
                            <div>
                                <img src={OurMission} width='100' />


                                <h2>Our Mission
                                </h2>
                                <p>
                                    • The importance is treating it personnel
                                    • Human Resource enhancement
                                    • Innovation
                                    • Environmental Protection
                                </p>
                            </div>
                            <div>
                                <img src={OurVision} width='100' />

                                <h2>Our Vision</h2>
                                <p>
                                    We are planning to store and provide data base on customer server for Solar Submersible Pump Controller.


                                </p>
                            </div>
                        </div>
                        <div className='ourcustomer' data-aos="fade-up">
                            <div>
                                <h1>What Our Customers Say ?</h1>
                            </div>

                            <div style={{ height: '295px' }}>
                                <Swiper

                                    loop={true}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Pagination]}

                                >

                                    <SwiperSlide className='swiper-child'>
                                        <div>
                                            <p>
                                                "A wide range of varity available with reasonable price."

                                            </p>
                                            <img src={TaTa} width='100' />
                                            <h3>
                                                Project Manager
                                            </h3>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper-child'>
                                        <div>
                                            <p>
                                                "One of the biggest submarsible pump manufacturers.
                                                for this company quality is priority.
                                                they have invented so many different types of panel
                                                "
                                            </p>
                                            <img src={reliance} width='100' />
                                            <h3>
                                                Project Manager
                                            </h3>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper-child'>
                                        <div>
                                            <p>
                                                "You find all types of solutions related to Panels. A wide range of varity available with reasonable price.
                                                "
                                            </p>
                                            <img src={wasmo} width='100' />
                                            <h3>
                                                Project Manager
                                            </h3>
                                        </div>
                                    </SwiperSlide>


                                </Swiper>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs
