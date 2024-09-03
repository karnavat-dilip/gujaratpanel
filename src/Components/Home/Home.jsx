import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Banner1 from '../../Assets/about.jpg'
import liquifyvector from '../../Assets/banner.jpg'
import round1 from '../../Assets/round.png'
import 'animate.css'
import Banner2 from '../../Assets/Banner2.jpg'
import profile_img from '../../Assets/IMG-20230606-WA0015.jpg'
import img31 from '../../Assets/img-35-1.jpeg'
import star_delta_mccb from '../../Assets/stardeltamccbpanel.jpg'
import stardelta from '../../Assets/14611_stardelta.png'
import atspanel from '../../Assets/43541_atspanel.jpg'
import dolmccb from '../../Assets/49655_dolmccb.jpg'
import dolgold from '../../Assets/69312_dolgold.png'
import dolpanel from '../../Assets/80359_dolpanel (1).jpg'
import ads2 from '../../Assets/ads2.png'
import Domestic from '../../Assets/services_agri_icon.png'
import Mining from '../../Assets/services_mining_icon.png'
import Industry from '../../Assets/services_industry_icon.png'
import FireFighting from '../../Assets/services_fire_icon.png'
import Construction from '../../Assets/services_construction_icon.png'
import Residential from '../../Assets/services_residential_icon.png'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import './Home.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { v4 as uuidv4 } from 'uuid';
import { Accordion, styled } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionActions from '@mui/material/AccordionActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo1 from '../../Assets/logo1.jpg'
import testy1 from '../../Assets/testi1.jpg'
import testy2 from '../../Assets/testi2.jpg'
import testy3 from '../../Assets/testi3.jpg'
import logo3 from '../../Assets/logo3.jpg'
import logo4 from '../../Assets/logo4.jpg'
import logo5 from '../../Assets/logo5.jpg'
import logo7 from '../../Assets/logo7.jpg'
import logo8 from '../../Assets/logo8.jpg'
import logo9 from '../../Assets/logo9.jpg'
import logo10 from '../../Assets/logo10.jpg'
import logo11 from '../../Assets/logo11.jpg'
import logo12 from '../../Assets/logo12.jpg'
import logo13 from '../../Assets/logo13.jpg'


function AboutUs() {
  return (
    <div>
      <p>We, “Gujarat Panel Private Limited” [Formerly known as “Gujarat Panel”] was established in the year 1998, certified by ISO 9001-2015, with the aim to provide the best quality products like, Electrical Control Panel Products to our valued customers.
        <a href='/about' style={{ color: '#01a875' }}>Read more...</a></p>
    </div>
  );
}

function OurStrength() {
  return (
    <div>
      <p>The company certified with ISO 9001-2015, manufacturing more than 130 models with in house most advanced, highly erudite manufacturing unit having capacity of 100,000 units annually with more than 100 dedicated manpower. We have our distribution and supply network in entire India. <a href='/about' style={{ color: '#01a875' }}>Read more...</a></p>
    </div>
  );
}

function OurService() {
  return (
    <div>
      <p>Gujarat Panel provides services to its Distributors / Dealers / End Customers on a continuous basis as and when required, as complete customer satisfaction is the focus. Gujarat Panel take pride in providing high quality products and the services to maintain pumps over the years. <a href='/about' style={{ color: '#01a875' }}>Read more...</a></p>
    </div>
  );
}


function Home() {
  const [counteron, setcounteron] = useState(false)
  const [content, setContent] = useState(AboutUs);
  const [activeLink, setActiveLink] = useState('about');

  const handleNavigation = (contentComponent, linkName) => {
    setContent(contentComponent);
    setActiveLink(linkName)
  };

  useEffect(() => {
    AOS.init()
  }, [])

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
    }
  ]

  const productapplication = [
    {
      id: uuidv4(),
      img: Domestic,
      Appname: 'Domestic',
      moreinfo: 'Utility pumps are the most commonly referred residential pumps that serve numerous household needs. Keeping this in mind, we have well placed ourselves ahead of our.'
    },
    {
      id: uuidv4(),
      img: Mining,
      Appname: 'Mining',
      moreinfo: 'The mining industry which is referred as the world’s toughest industrialized working environments needs a bit of revamping'
    },
    {
      id: uuidv4(),
      img: Industry,
      Appname: 'Industry',
      moreinfo: 'Industries seem to be smaller when put into comparison with the amount of diverse and distinctive pumps that Goodluck is equipped with'
    },
    {
      id: uuidv4(),
      img: FireFighting,
      Appname: 'Fire Fighting & Dewatering',
      moreinfo: 'The most critical component of a Fire Sprinkler system, i.e the fire pump needs due attention, and that’s why we at Goodluck take immense care in designing..'
    },
    {
      id: uuidv4(),
      img: Construction,
      Appname: 'Construction & Building',
      moreinfo: 'Irrespective of the scale of building services Goodluck offers wide varieties of pumps, valves, and systems that perfectly match your building and construction needs.'
    },
    {
      id: uuidv4(),
      img: Residential,
      Appname: 'Residential',
      moreinfo: 'Utility pumps are the most commonly referred residential pumps that serve numerous household needs. Keeping this in mind, we have well placed ourselves ahead of our.'
    },

  ]

  return (
    <>
      <div className='swiper-container'>
        <section className='slide'>
          <div>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: false,
              }}
              // navigation={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
              <img src={liquifyvector} id='img1' />

              <SwiperSlide>

                {/* <img src={liquifyvector} id='img1' /> */}
                <div className='child_slider'>
                  <h1 className='animate__animated animate__backInLeft animate__infinite' style={{ animationDuration: '4s', animationDelay: '1s' }}>Star Delta Starter
                    Motor</h1>
                  <div className='inner-img'>
                    <img src={round1} className='product-img1 animate__animated animate__backInRight animate__infinite' style={{ animationDuration: '4s', animationDelay: '1s' }} />
                    <img src={stardelta} className='product-img animate__animated animate__backInUp animate__infinite' style={{ animationDuration: '4s', animationDelay: '1s' }} />
                  </div>
                </div>

              </SwiperSlide>
              <SwiperSlide>

                {/* <img src={liquifyvector} id='img1' /> */}
                <div className='child_slider'>
                  <div className='inner-img'>
                    <img src={round1} className='product-img1 animate__animated animate__backInLeft animate__infinite' style={{ animationDuration: '4s', animationDelay: '1s' }} />
                    <img src={atspanel} className='product-img animate__animated animate__backInUp animate__infinite' style={{ animationDuration: '4s', animationDelay: '1s' }} />
                  </div>
                  <h1 className='animate__animated animate__backInRight animate__infinite' style={{ animationDuration: '4s', animationDelay: '1s' }}>ATS
                    Motor</h1>
                </div>

              </SwiperSlide>
              <SwiperSlide>

                {/* <img src={liquifyvector} id='img1' /> */}
                <div className='child_slider'>
                  <h1 className='animate__animated animate__backInLeft animate__infinite' style={{ animationDuration: '4s', animationDelay: '1s' }}>Dol Mccb
                    Motor</h1>
                  <div className='inner-img'>
                    <img src={round1} className='product-img1 animate__animated animate__backInRight animate__infinite' style={{ animationDuration: '4s', animationDelay: '1s' }} />
                    <img src={dolmccb} className='product-img animate__animated animate__backInUp animate__infinite' style={{ animationDuration: '4s', animationDelay: '1s' }} />
                  </div>
                </div>

              </SwiperSlide>
              <SwiperSlide>

                {/* <img src={liquifyvector} id='img1' /> */}
                <div className='child_slider'>
                  <div className='inner-img'>
                    <img src={round1} className='product-img1 animate__animated animate__backInLeft animate__infinite' style={{ animationDuration: '4s', animationDelay: '1s' }} />
                    <img src={dolgold} className='product-img animate__animated animate__backInUp animate__infinite' style={{ animationDuration: '4s', animationDelay: '1s' }} />
                  </div>
                  <h1 className='animate__animated animate__backInRight animate__infinite' style={{ animationDuration: '4s', animationDelay: '1s' }}>Dol Gold
                    Motor</h1>
                </div>

              </SwiperSlide>
              <SwiperSlide>

                {/* <img src={liquifyvector} id='img1' /> */}
                <div className='child_slider'>
                  <h1 className='animate__animated animate__backInLeft animate__infinite' style={{ animationDuration: '4s', animationDelay: '1s' }}>Dol
                    Motor</h1>
                  <div className='inner-img'>
                    <img src={round1} className='product-img1 animate__animated animate__backInRight animate__infinite' style={{ animationDuration: '4s', animationDelay: '1s' }} />
                    <img src={dolpanel} className='product-img animate__animated animate__backInUp animate__infinite' style={{ animationDuration: '4s', animationDelay: '1s' }} />
                  </div>
                </div>

              </SwiperSlide>
              <SwiperSlide>

                {/* <img src={liquifyvector} id='img1' /> */}
                <div className='child_slider'>
                  <div className='inner-img'>
                    <img src={round1} className='product-img1 animate__animated animate__backInLeft animate__infinite' style={{ animationDuration: '4s', animationDelay: '1s' }} />
                    <img src={star_delta_mccb} className='product-img animate__animated animate__backInUp animate__infinite' style={{ animationDuration: '4s', animationDelay: '1s' }} />
                  </div>
                  <h1 className='animate__animated animate__backInRight animate__infinite' style={{ animationDuration: '4s', animationDelay: '1s' }}>Star Delta Mccb
                    Motor</h1>
                </div>

              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section data-aos="fade-up">
          <div className='container'>
            <div className='h1-container'>
              <h1>Welcome to Gujarat Panel</h1>
            </div>
            <div className='intro'>
              <div className='d-flex'>
                <div>
                  <h4>Introduction</h4>
                  <p>We, “Gujarat Panel Private Limited” [Formerly known as “Gujarat Panel”] was established in the year 1998, certified by ISO 9001-2015, with the aim to provide the best quality products like, Electrical Control Panel Products to our valued customers.</p>
                  <h4>Production & Manufacturing Capacity
                  </h4>
                  <p>We are renowned Manufacturer and Supplier of optimum quality Electrical Panels and Boards. Ours’ is a Private Limited organization based at Palanpur, Gujarat State, India. All our products are manufactured in compliance with industry’s norms & standards using premium quality material.</p>
                </div>
                <div>
                  <img src={profile_img} id='profile-img' />
                </div>
              </div>
              <div>
                <h4>Technology Innovations
                </h4>
                <p>The perfect blend of technological skills and Managerial talents help us to grow day by day. We have the complete in house facility for testing all related equipments for conducting Electricals test, ICL & the Company has audited the quality control system. Our products have also testing at CPRL, ERDA & EQDC.</p>
              </div>
            </div>
          </div>
        </section>
        <section data-aos="fade-up">
          <div className='container'>
            <div className='h1-container'><h1>Product Category</h1></div>
            <div className='product-container'>
              <Swiper

                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
                loop={true}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}

              >
                {
                  products?.map((product, index) => {
                    return (
                      <SwiperSlide key={product.id} className='swiper-child'>
                        {/* <div key={product.id} className='swiper-child'> */}
                        <a href={`/Allproduct/${index + 1}`}>
                          <img src={product.img} width='100px' height='100px' />
                          <h3>{product.title}</h3>
                        </a>
                        {/* </div> */}
                      </SwiperSlide>

                    )
                  })
                }
              </Swiper>
            </div>

          </div>
        </section >
        <section data-aos="fade-up">
          <div className='container'>
            <div className='count-container'>
              <div className='totalno'>

                {<CountUp start={0} end={112200} duration={2} delay={0} />}+

                <h4>Happay Clients</h4>
              </div>
              <div className='totalno'>

                {<CountUp start={0} end={22200} duration={5} delay={0} />}+

                <h4>Total Projects</h4>
              </div>
              <div className='totalno'>

                {<CountUp start={0} end={170} duration={5} delay={0} />}+

                <h4>Total Product</h4>
              </div>
              <div className='totalno'>

                {<CountUp start={0} end={12} duration={5} delay={0} />}+

                <h4>Total Achivements</h4>
              </div>
            </div>
          </div>
        </section>
        <section data-aos="fade-up">
          <div className='container'>
            <div className='nav-container'>
              <div className='b-btm'>
                <h1>Who we are?</h1>
              </div>
              <div>
                <nav>
                  <ul>
                    <li className={activeLink === 'about' ? 'activelink' : ''} onClick={() => handleNavigation(AboutUs, 'about')}>About Us</li>
                    <li className={activeLink === 'strength' ? 'activelink' : ''} onClick={() => handleNavigation(OurStrength, 'strength')}>OurStrength</li>
                    <li className={activeLink === 'service' ? 'activelink' : ''} onClick={() => handleNavigation(OurService, 'service')}>Our Service</li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className='text-indent'>

              {content && content}

            </div>
            <div>
              <img src={img31} style={{
                width: "50%",
                position: 'relative',
                left: "25%"
              }} />
            </div>
          </div>
        </section>
        <section data-aos="fade-up">
          <div className='container'>
            <div className='h1-container'>
              <h1>Product Application
              </h1>
            </div>
            <div className='grid-container'>
              {productapplication?.map((product, index) => {
                return (
                  <div className='grid-item'>
                    <img src={product.img} />
                    <h1>{product.Appname}</h1>
                    <Accordion style={{ background: 'aliceblue', boxShadow: 'none' }}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}

                      >
                        More Info
                      </AccordionSummary>
                      <AccordionDetails>
                        {product.moreinfo}
                      </AccordionDetails>
                    </Accordion>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        <section data-aos="fade-up">
          <div className='container'>
            <div className='h1-container'><h1>Our Client</h1></div>
            <div className='product-container'>
              <Swiper

                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
                loop={true}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}

              >
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo1} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo3} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo4} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo5} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo7} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo8} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo9} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo10} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo11} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo12} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo13} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={testy1} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={testy2} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={testy3} width='100' height='100' />
                </SwiperSlide>
              </Swiper>
            </div>

          </div>
        </section >
        <section>

        </section>
      </div >
    </>
  )
}

export default Home
