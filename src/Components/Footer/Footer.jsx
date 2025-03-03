import React, { useEffect } from 'react'
import { FaFacebook, FaInstagramSquare, FaYoutube, FaLinkedin } from 'react-icons/fa'
import './Footer.css'
import glogo from '../../Assets/glogo (2).png'
import { RiCustomerService2Line } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { TbWorldWww } from "react-icons/tb";
import AOS from 'aos'
import 'aos/dist/aos.css'

function Footer() {
    useEffect(() => {
        AOS.init()
      }, [])
    return (
        <>
            <footer className='Footer'>
                <div className='container'>
                    <div className='Footer-child' data-aos="fade-down">
                        <div className='section-child' >
                            <div>
                                <img src={glogo} width='150' />
                                <p>Gujarat Panel is manufacturer of Submersible panel in India.</p>
                                <div className='customer-service'>
                                    <RiCustomerService2Line style={{
                                        width: '45px',
                                        height: '59px'
                                    }} />
                                    <ul>
                                        <li>Customer Support</li>
                                        <li>
                                            <a href="tel:+91 9825015702">+91 98250 15702</a>
                                        </li>
                                        <li>
                                            <a href="tel:+91 9898487120">+91 98984 87120</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='section-child'>
                            <div>
                                <p>Gujarat Panel an ISO 9001:2015 certified company founded in year 2003 is a synonymous with manufacturing and exporting of submersible Panels.
                                </p>
                                <div className='social-icon-child' style={{
                                    height: 'fitContent',
                                    display: 'contents'
                                }}>
                                    <ul>
                                        <li>

                                            <a href='https://www.facebook.com/gujarat.panel'>
                                                <FaFacebook />
                                            </a>

                                        </li>
                                        <li>

                                            <a href='https://www.instagram.com/gujaratpanel/'>
                                                <FaInstagramSquare />
                                            </a>

                                        </li>
                                        <li>

                                            <a href='https://www.youtube.com/@gujaratpanel251'>
                                                <FaYoutube />

                                            </a>

                                        </li>
                                        <li>

                                            <a href='https://www.linkedin.com/in/gujarat-panel-806a59168/'>
                                                <FaLinkedin />

                                            </a>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='section-child'>
                            <h3>Sitemap</h3>
                            <ul className='sitemap'>
                                <li>
                                    <a href='/Allproduct'>Our Product</a>
                                </li>
                                <li>
                                    <a href='/about'>About Us</a>
                                </li>
                                <li>
                                    <a href='/about'>Our Mission</a>
                                </li>
                                <li>
                                    <a href='/about'>Our Vision</a>
                                </li>
                                <li>
                                    <a href='/contact'>Contact Us</a>
                                </li>
                                <li>
                                    <a href='/qualitypolicy'>Quality Policy</a>
                                </li>
                            </ul>
                        </div>
                        <div className='section-child'>
                            <a href='/contact'>Contact Us</a>
                            <ul className='contactus'>
                                <li>
                                    <b>Gujarat Panel Industries</b>
                                </li>
                                <li>
                                    Gujarat panel Deesa, Highway, Palanpur, Gujarat 385001
                                </li>
                                <li>
                                    Gujarat(INDIA)385001
                                </li>
                                <li className='contact-link'>
                                    <IoIosCall className='contact-support' /><a href='tel:+91 9825015702'>+919825015702</a>&nbsp;
                                    <a href='tel:+91 9825015702'>9898487120</a>&nbsp;
                                </li>
                                <li className='contact-link'>
                                    <IoMdMail className='contact-support' />
                                    Email Us:
                                </li>
                                <li>
                                    <a style={{
                                        left: '24px',
                                        position: 'relative'
                                    }} href='mailto:gujaratpanel@gmail.com'>gujaratpanel@gmail.com</a>
                                </li>
                                
                                <li className='contact-link'>
                                    <TbWorldWww className='contact-support' />
                                    <a href='https://www.gujaratpanel.in'>www.gujaratpanel.in</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                    <div className='copyright'>
                        <p>Copyright © 2024 Gujarat Panel | All Rights reserved Designed & Developed By <a href='tel:+91 9913448958'>Er Karnavat Dilip</a></p>
                    </div>
            </footer >
        </>
    )
}

export default Footer
