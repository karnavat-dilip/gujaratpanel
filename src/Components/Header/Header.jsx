import React, { useEffect, useState } from 'react'
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import './Header.css'
import GUJARAT_PANEL_broucher from '../../Assets/GUJARAT PANEL broucher.pdf'
import glogo from '../../Assets/glogo (2).png'
import gemlogo from '../../Assets/gemlogo.jpeg'
import Iso_90012015 from '../../Assets/Iso-9001-2015.png'
import { MdDownload } from "react-icons/md";
import { TfiAngleDown } from "react-icons/tfi";
import { stack as Menu } from 'react-burger-menu'
import { Accordion, styled } from '@mui/material';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaHome } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import { FaCircleInfo } from "react-icons/fa6";
import { MdEqualizer } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";
import { PiArrowUpBold } from "react-icons/pi";
import { FaSquareWhatsapp } from "react-icons/fa6";
import stardelta from '../../Assets/14611_stardelta.png'
import star_delta_mccb from '../../Assets/stardeltamccbpanel.jpg'
import atspanel from '../../Assets/43541_atspanel.jpg'
import dolmccb from '../../Assets/49655_dolmccb.jpg'
import dolgold from '../../Assets/69312_dolgold.png'
import dolpanel from '../../Assets/80359_dolpanel (1).jpg'

import Hp100msdol from '../../Assets/Hp100msdol.png'
import Hp100mssd from '../../Assets/Hp100mssd.png'
import Hp100sd from '../../Assets/Hp100sd.png'
import Hp150ATS from '../../Assets/Hp150ATS.png'
import Hp150msdol from '../../Assets/Hp150msdol.png'
import Hp200ATS from '../../Assets/Hp200ATS.png'
import Hp250ATS from '../../Assets/Hp250ATS.png'
import Hp250msdol from '../../Assets/Hp250msdol.png'
import Hp30msdol from '../../Assets/Hp30msdol.png'
import Hp40msdol from '../../Assets/Hp40msdol.png'
import Hp40mssd from '../../Assets/Hp40mssd.png'
import Sphp3 from '../../Assets/S.php3.png'
import Sphp5 from '../../Assets/S.php5.png'

import { v4 as uuidv4 } from 'uuid';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Checkmark } from 'react-checkmark'
import TranslateComponent from '../TranslateComponent';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const CustomAccordion = styled(Accordion)(({ theme }) => ({
    textTransform: 'uppercase',
    left: '-15px',
    boxShadow: 'none',
}));

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [expanded, setExpanded] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [open, setOpen] = useState(false);
    const [opencheckcircle, setopencheckcircle] = useState(false);
    const [loading, setloading] = useState(false)
    const [emailData, setEmailData] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
    });

    const Changevalue = (e) => {
        const { name, value } = e.target;

        setEmailData({
            ...emailData,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true)
        try {
            const response = await axios.post('/send-email', emailData);
            console.log(response);

            console.log('Email sent successfully');
            setOpen(false);
            setopencheckcircle(true);
            setEmailData({
                name: '',
                email: '',
                number: '',
                message: ''
            })
        } catch (error) {
            alert('Error sending email');
        } finally {
            setloading(false)
        }
    };



    useEffect(() => {
        AOS.init()
    }, [])


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const Closecheckcircle = () => {
        setopencheckcircle(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 200) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Show the scroll button when the page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling
        });
    };



    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };
    const currentLocation = window.location.href;

    useEffect(() => {

        const links = document.querySelectorAll('.nav-links > ul > li > a');
        links.forEach(link => {
            if (link.href === currentLocation) {
                link.classList.add('active');
            }
        });

    }, [])
    useEffect(() => {

        const links = document.querySelectorAll('.offcanvas-menu > ul > li > a');
        links.forEach(link => {
            if (link.href === currentLocation) {
                link.classList.add('active');
            }
        });

    }, [])
    useEffect(() => {

        const links = document.querySelectorAll('.mobile-sub-menu > li > a');
        links.forEach(link => {
            if (link.href === currentLocation) {
                link.classList.add('active1');
            }
        });

    }, [])
    useEffect(() => {

        const links = document.querySelectorAll('.dropdown-content a');
        links.forEach(link => {
            if (link.href === currentLocation) {
                link.classList.add('active-sub-menu');
            }
        });

    }, [])


    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const products = [
        {
          id: uuidv4(),
          img: stardelta,
          title: 'Star Delta Panel'
        },
        {
          id: uuidv4(),
          img: atspanel,
          title: 'ATS Panel'
        },
        {
          id: uuidv4(),
          img: dolmccb,
          title: 'Dol Mccb Panel'
        },
        {
          id: uuidv4(),
          img: dolgold,
          title: 'Dol Gold Panel'
        },
        {
          id: uuidv4(),
          img: dolpanel,
          title: 'Dol Panel'
        },
        {
          id: uuidv4(),
          img: star_delta_mccb,
          title: 'Star Delta Mccb Panel'
        },
      
        {
          id: uuidv4(),
          img: Hp100msdol,
          title: 'HP 100 MS Dol'
        },
        {
          id: uuidv4(),
          img: Hp100mssd,
          title: 'HP 100 MS StarDelta'
        },
        {
          id: uuidv4(),
          img: Hp100sd,
          title: 'HP 100 StarDelta'
        },
        {
          id: uuidv4(),
          img: Hp150ATS,
          title: 'HP 150 ATS'
        },
        {
          id: uuidv4(),
          img: Hp150msdol,
          title: 'HP 150 MS Dol'
        },
        {
          id: uuidv4(),
          img: Hp200ATS,
          title: 'HP 200 ATS'
        },
        {
          id: uuidv4(),
          img: Hp250ATS,
          title: 'HP 250 ATS'
        },
        {
          id: uuidv4(),
          img: Hp250msdol,
          title: 'HP 250 MS Dol'
        },
        {
          id: uuidv4(),
          img: Hp30msdol,
          title: 'HP 30 MS Dol'
        },
        {
          id: uuidv4(),
          img: Hp40msdol,
          title: 'HP 40 MS Dol'
        },
        {
          id: uuidv4(),
          img: Hp40mssd,
          title: 'Hp 40 ms Stardelta'
        },
        {
          id: uuidv4(),
          img: Sphp3,
          title: 'Single Phase hp 3'
        },
        {
          id: uuidv4(),
          img: Sphp5,
          title: 'Single Phase hp 5'
        },
      ]

    return (
        <>
            <header className='header-section'>
                <div className='header-tops'>
                    <div className='container'>
                        <div className='container-child'>
                            <div>
                                <h4>Welcome to our Gujarat Panel</h4>
                            </div>
                            <div>
                                <ul className='header-user-menu'>
                                    <li>
                                        <IoIosCall /><a href='tel:+91 9825015702'>+91 9825015702</a>
                                        <a href='tel:+91 9898487120'>+91 9898487120</a>
                                    </li>
                                    <li>
                                        <IoMdMail />
                                        <a href='mailto:gujaratpanel@gmail.com'>gujaratpanel@gmail.com</a>
                                    </li>


                                </ul>
                            </div>
                            <TranslateComponent />
                        </div>
                    </div>

                </div>
                <div className='header-center'>
                    <div className='container'>
                        <div className='header-logo-menu'>
                            <img src={gemlogo} width='200px' height='100px' alt='logo not available'></img>
                            <img src={glogo} width='200px' height='100px' alt='logo not available'></img>
                            <img src={Iso_90012015} width='100px' height='100px' alt='logo not available'></img>
                        </div>
                    </div>
                </div>
                <div className='header-bottom'>
                    <nav className={isSticky ? 'sticky' : 'navbar'}>
                        <div className='container'>

                            <div className={`nav-links ${isOpen ? 'open' : ''}`}>

                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li className="dropdown">
                                        <a href='/Allproduct'>product <TfiAngleDown />
                                        </a>
                                        <div className="stone">
                                            <div className='container'>
                                                <div className='p-list-container'>
                                                    {
                                                        products?.map((product, index) => {
                                                            return (
                                                                <div key={product.id}>
                                                                    <a href={`/Allproduct/${index + 1}`}>
                                                                        <img src={product.img} width='100' style={{ alignSelf: 'center' }} />
                                                                        <h3>{product.title}</h3>
                                                                    </a>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li><a href="/qualitypolicy">quality policy</a></li>
                                    <li className="dropdown">
                                        <a>gallery <TfiAngleDown />
                                        </a>
                                        <div className="dropdown-content">
                                            <a href="/photos">Photos</a>
                                            <a href="/videos">Videos</a>
                                        </div>
                                    </li>
                                    <li><a href="/about">About Us</a></li>
                                    <li><a href="/contact">Contact Us</a></li>
                                </ul>


                                <ul className='download'>
                                    <li>
                                        <a onClick={handleClickOpen}>BROUCHER <MdDownload />
                                        </a>
                                    </li>
                                </ul>


                            </div>

                        </div>
                    </nav>
                </div>
            </header>
            <Dialog
                open={opencheckcircle}
                keepMounted
                onClose={Closecheckcircle}
                aria-describedby="alert-dialog-slide-description"
            >

                <DialogContent>
                    <div>
                        <Checkmark size='xxLarge' color='#01a875' />
                        <h1 style={{
                            textAlign: 'center',
                            padding: '14px'
                        }}>
                            Sent!
                        </h1>
                        <div>
                            <p>Kindly check your mail to view or download this document.</p>
                        </div>
                    </div>
                </DialogContent>

            </Dialog >
            <Dialog
                open={open}

                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >

                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <div style={{ padding: '0px 88px 0px 0px' }}>
                            <div>
                                <img src={glogo} width='100' style={{
                                    position: 'relative',
                                    left: '50%'
                                }} />
                            </div>
                            <div className='sentmail'>
                                <input type='text' placeholder='Enter your Name' name='name' onChange={Changevalue}
                                    required />
                            </div>
                            <div className='sentmail'>
                                <input type='tel' placeholder='Enter your mobile number' name='number' onChange={Changevalue}
                                    required />
                            </div>
                            <div className='sentmail'>
                                <input type='email' placeholder='Enter your Email' name='email' onChange={Changevalue}
                                    required />
                            </div>
                            <div className='sentmail'>
                                <textarea placeholder='Message...' name='message' onChange={Changevalue}
                                    required />
                            </div>
                            <div className='sentmail'>
                                <div>
                                    <button type='submit'>Submit</button>
                                </div>
                                <div>
                                    {
                                        loading ?
                                            <Box sx={{ display: 'flex' }}>
                                                <CircularProgress style={{ color: '#01a875' }} />
                                            </Box> : ''
                                    }
                                </div>
                            </div>
                        </div>
                    </form>
                </DialogContent>

            </Dialog>
            <div className="scroll-to-top" data-aos="fade-up">
                {isVisible && (
                    <button onClick={scrollToTop}>
                        <PiArrowUpBold />
                    </button>
                )}
            </div>
            <div className='Whatsapp'>
                <ul>
                    <li>
                        <a href='https://api.whatsapp.com/send/?phone=919825015702&text&type=phone_number&app_absent=0' target='_blank'><FaSquareWhatsapp style={{
                            width: '47px',
                            height: '48px',
                            color: '#25d366'
                        }} />
                        </a>
                    </li>
                </ul>
                
            </div>
            <div className="mobile-header-section d-block d-lg-none">
                {/* Start Mobile Header Wrapper */}
                <div className="mobile-header-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-between align-items-center">
                                <div className="mobile-header--left">
                                    <a href="/" className="mobile-logo-link">
                                        <img
                                            src={glogo}
                                            alt="logo not available"
                                            width='100'
                                            className="mobile-logo-img"
                                        />
                                    </a>
                                </div>
                                <Menu>
                                    <div className="offcanvas-mobile-menu-wrapper">
                                        {/* Start Mobile Menu User Top */}
                                        <div className="mobile-menu-top">
                                            <span>
                                                <b>Welcome to our Gujarat Panel</b>
                                            </span>
                                            {/* Start Header Top Menu */}
                                            <ul className="mobile-menu-user-menu">
                                                <li className="header-user-menu-link">
                                                    <IoIosCall />
                                                    <a href="tel:+91 9898487120" target="_blank">
                                                        <b> +91 9898487120</b>
                                                    </a>
                                                    <a href="tel:+91 9825015702" target="_blank">
                                                        <b>+91 9825015702</b>
                                                    </a>
                                                </li>
                                                <a href="tel:+91 9825015702"></a>
                                                <li className="header-user-menu-link">
                                                    <IoMdMail />
                                                    <a href="mailto:gujaratpanel@gmail.com" target="_blank">
                                                        &nbsp;
                                                    </a>
                                                    <b> gujaratpanel@gmail.com</b>
                                                </li>
                                                {/*                <li class="header-user-menu-link"><div id="google_translate_element" class="google_translate_element"></div></li>*/}
                                            </ul>
                                            {/* End Header Top Menu */}
                                        </div>{" "}
                                        {/* End Mobile Menu User Top */}
                                        {/* Start Mobile Menu User Center */}
                                        <div className="mobile-menu-center mt-5">
                                            <form action="#" method="post">
                                                <div className="header-search-box default-search-style d-flex">
                                                    <div className="footer-subscribe-box default-search-style d-flex justify-content-center mobile-homeTitle d-flex">
                                                        {/*                        <h2>Goodluck</h2>*/}
                                                        {/*                        <h2 style="color: #ea1c26">&nbsp;Pump</h2>*/}
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        {/* End Mobile Menu User Center */}
                                        {/* Start Mobile Menu User Center */}
                                        <div className="mobile-menu-center">
                                            <form action="#" method="post">
                                                <div className="header-search-box default-search-style d-flex">
                                                    <div className="footer-subscribe-box default-search-style d-flex">
                                                        <img
                                                            className="mobile-isoImg"
                                                            src={Iso_90012015}
                                                            alt="Image not available"
                                                            width='50'
                                                        />
                                                        <img
                                                            className="mobile-isoImg"
                                                            src={gemlogo}
                                                            alt="Image not available"
                                                            width='100'
                                                        />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        {/* End Mobile Menu User Center */}
                                        {/* Start Mobile Menu Bottom */}
                                        <div className="mobile-menu-bottom">
                                            {/* Start Mobile Menu Nav */}
                                            <div className="offcanvas-menu">
                                                <ul>
                                                    <li className="mobileli">

                                                        <a href="/"><FaHome className='fa-icon' />Home</a>
                                                    </li>

                                                    <li className="mobileli">

                                                        <CustomAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                                            <AccordionSummary
                                                                expandIcon={<ExpandMoreIcon />}
                                                            >
                                                                <div style={{
                                                                    height: '16px',
                                                                    display: 'flex',
                                                                    alignItems: 'center'
                                                                }}>
                                                                    <AiOutlineAppstore className='fa-icon' />
                                                                    <a href='/Allproduct'>
                                                                        Products
                                                                    </a>
                                                                </div>
                                                            </AccordionSummary>
                                                            <AccordionDetails>
                                                                <ul className="mobile-sub-menu">
                                                                    <li>
                                                                        <a href="/Allproduct/1">Star Delta Panel</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/2">ATS Panel</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/3">Dol Mccb Panel</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/4">Dol Gold Panel</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/5">Dol Panel</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/6">Star Delta Mccb Panel</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/7">HP 100 MS Dol</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/8">HP 100 MS StarDelta</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/9">HP 100 StarDelta</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/10">HP 150 ATS</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/11">HP 150 MS Dol</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/12">HP 200 ATS</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/13">HP 250 ATS</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/14">HP 250 MS Dol</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/15">HP 30 MS Dol</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/16">HP 40 MS Dol</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/17">Hp 40 ms Stardelta</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/18">Single Phase hp 3</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/19">Single Phase hp 5</a>
                                                                    </li>

                                                                </ul>
                                                            </AccordionDetails>
                                                        </CustomAccordion>
                                                    </li>

                                                    <li className="mobileli">
                                                        <a href="/qualitypolicy" className="menuBtn">
                                                            <MdEqualizer className='fa-icon' />
                                                            <span>Quality Policy</span>
                                                        </a>
                                                    </li>
                                                    <li className="mobileli">

                                                        <a href="/about" className="menuBtn">
                                                            <FaCircleInfo className='fa-icon' />
                                                            About Us
                                                        </a>
                                                    </li>
                                                    <li className="mobileli">

                                                        <a
                                                            onClick={handleClickOpen}
                                                            className="downalodMenu"
                                                        >
                                                            <FaCloudDownloadAlt className='fa-icon' />
                                                            Broucher
                                                        </a>
                                                    </li>
                                                    <li className="mobileli">
                                                        <div>
                                                            <CustomAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                                                <AccordionSummary
                                                                    expandIcon={<ExpandMoreIcon />}

                                                                >
                                                                    <GrGallery className='fa-icon' />
                                                                    Gallery
                                                                </AccordionSummary>
                                                                <AccordionDetails>
                                                                    <ul className="mobile-sub-menu">
                                                                        <li>
                                                                            <a href="/photos">Photos</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="/videos">Videos</a>
                                                                        </li>

                                                                    </ul>
                                                                </AccordionDetails>
                                                            </CustomAccordion>
                                                        </div>
                                                    </li>
                                                    <li className="mobileli">

                                                        <a href="/contact"><MdContactPhone className='fa-icon' />Contact Us</a>
                                                    </li>
                                                </ul>
                                            </div>{" "}
                                            {/* End Mobile Menu Nav */}
                                        </div>{" "}
                                        {/* End Mobile Menu Bottom */}
                                    </div>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div > {" "}
                {/* End Mobile Header Wrapper */}
            </div >
        </>
    )
}

export default Header
