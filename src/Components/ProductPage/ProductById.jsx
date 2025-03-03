import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Breadcrumbs from '../Breadcrumbs'
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

import { Link, useParams } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { v4 as uuidv4 } from 'uuid';
import './ProductById.css'
function ProductById() {
    const { id } = useParams();
    const productId = parseInt(id);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        AOS.init()
      }, [])

    const productsData = {
        "panels": [
          {
            "id": 19,
            "type": "Single Phase hp 5",
            "img": Sphp5,
            "description": "A 5 HP single-phase panel designed for efficient power management in residential or small industrial setups.",
            "features": [
              "High-efficiency design",
              "Compact size",
              "Overload protection",
              "Low maintenance"
            ],
            "specifications": [
              "Voltage: 230V",
              "Current: 20A",
              "Dimensions: 400x300x150mm",
              "Protection: IP65"
            ],
            "other_info": [
              "Ideal for small-scale operations requiring single-phase input."
            ]
          },
          {
            "id": 18,
            "type": "Single Phase hp 3",
            "img": Sphp3,
            "description": "A 3 HP single-phase panel suitable for residential or small commercial usage.",
            "features": [
              "Energy-efficient",
              "Easy installation",
              "Thermal overload protection",
              "Durable construction"
            ],
            "specifications": [
              "Voltage: 230V",
              "Current: 15A",
              "Dimensions: 350x250x150mm",
              "Protection: IP55"
            ],
            "other_info": [
              "Perfect for household applications with lower energy requirements."
            ]
          },
          {
            "id": 17,
            "type": "Hp 40 ms Stardelta",
            "img": Hp40mssd,
            "description": "A 40 HP Star Delta motor control panel designed for industrial applications.",
            "features": [
              "Smooth motor start",
              "Reduced starting current",
              "Automatic Star-Delta transition",
              "Heavy-duty performance"
            ],
            "specifications": [
              "Voltage: 415V",
              "Current: 80A",
              "Dimensions: 600x500x200mm",
              "Protection: IP66"
            ],
            "other_info": [
              "Used in industries for efficient motor control and power management."
            ]
          },
          {
            "id": 16,
            "type": "HP 40 MS Dol",
            "img": Hp40msdol,
            "description": "A 40 HP Direct On-Line (DOL) motor starter panel for industrial use.",
            "features": [
              "Simple to use",
              "Overload protection",
              "High reliability",
              "Suitable for heavy motors"
            ],
            "specifications": [
              "Voltage: 415V",
              "Current: 90A",
              "Dimensions: 650x500x250mm",
              "Protection: IP66"
            ],
            "other_info": [
              "Designed for large motors that require direct online startup."
            ]
          },
          {
            "id": 15,
            "type": "HP 30 MS Dol",
            "img": Hp30msdol,
            "description": "A 30 HP DOL panel for medium to large industrial motors.",
            "features": [
              "Cost-effective",
              "Direct motor control",
              "Easy installation",
              "Durable build"
            ],
            "specifications": [
              "Voltage: 415V",
              "Current: 70A",
              "Dimensions: 550x450x200mm",
              "Protection: IP65"
            ],
            "other_info": [
              "Suitable for medium-scale industrial operations."
            ]
          },
          {
            "id": 14,
            "type": "HP 250 MS Dol",
            "img": Hp250msdol,
            "description": "A heavy-duty 250 HP DOL panel for industrial-grade motors.",
            "features": [
              "Designed for large motors",
              "Heavy-duty construction",
              "Overload protection",
              "Automatic restart feature"
            ],
            "specifications": [
              "Voltage: 415V",
              "Current: 500A",
              "Dimensions: 1200x800x400mm",
              "Protection: IP67"
            ],
            "other_info": [
              "Primarily used in heavy industrial environments."
            ]
          },
          {
            "id": 12,
            "type": "HP 200 ATS",
            "img": Hp200ATS,
            "description": "An Automatic Transfer Switch (ATS) panel for 200 HP motors.",
            "features": [
              "Automatic transfer between power sources",
              "Designed for high-power motors",
              "Durable and reliable",
              "Efficient power management"
            ],
            "specifications": [
              "Voltage: 415V",
              "Current: 400A",
              "Dimensions: 1000x700x350mm",
              "Protection: IP66"
            ],
            "other_info": [
              "Best suited for facilities with backup power sources."
            ]
          },
          {
            "id": 11,
            "type": "HP 150 MS Dol",
            "img": Hp150msdol,
            "description": "A 150 HP DOL panel for controlling large motors directly.",
            "features": [
              "Robust design",
              "Overload protection",
              "Manual and automatic modes",
              "Easy to maintain"
            ],
            "specifications": [
              "Voltage: 415V",
              "Current: 300A",
              "Dimensions: 900x650x300mm",
              "Protection: IP65"
            ],
            "other_info": [
              "Commonly used in large-scale industrial applications."
            ]
          },
          {
            "id": 10,
            "type": "HP 150 ATS",
            "img": Hp150ATS,
            "description": "A 150 HP Automatic Transfer Switch panel for seamless power transitions.",
            "features": [
              "Automatic power source switch",
              "Ideal for backup power setups",
              "Durable and efficient",
              "Low maintenance"
            ],
            "specifications": [
              "Voltage: 415V",
              "Current: 300A",
              "Dimensions: 900x650x300mm",
              "Protection: IP66"
            ],
            "other_info": [
              "Widely used in industries with frequent power changes."
            ]
          },
          {
            "id": 9,
            "type": "HP 100 StarDelta",
            "img": Hp100sd,
            "description": "A 100 HP Star Delta panel for efficient motor control.",
            "features": [
              "Reduced starting current",
              "Smooth motor start",
              "Automatic Star-Delta transition",
              "Heavy-duty usage"
            ],
            "specifications": [
              "Voltage: 415V",
              "Current: 200A",
              "Dimensions: 800x600x250mm",
              "Protection: IP65"
            ],
            "other_info": [
              "Ideal for industries needing efficient motor control."
            ]
          },
          {
            "id": 8,
            "type": "HP 100 MS StarDelta",
            "img": Hp100mssd,
            "description": "A 100 HP Star Delta panel with manual and automatic modes.",
            "features": [
              "Manual and automatic modes",
              "Smooth starting and stopping",
              "Overload protection",
              "Durable design"
            ],
            "specifications": [
              "Voltage: 415V",
              "Current: 200A",
              "Dimensions: 800x600x250mm",
              "Protection: IP65"
            ],
            "other_info": [
              "Suited for flexible motor control applications."
            ]
          },
          {
            "id": 7,
            "type": "HP 100 MS Dol",
            "img": Hp100msdol,
            "description": "A 100 HP DOL panel designed for direct motor control.",
            "features": [
              "Simple operation",
              "High reliability",
              "Overload protection",
              "Cost-effective solution"
            ],
            "specifications": [
              "Voltage: 415V",
              "Current: 200A",
              "Dimensions: 750x550x250mm",
              "Protection: IP65"
            ],
            "other_info": [
              "Widely used in industrial motor control systems."
            ]
          },
          {
            "id": 6,
            "type": "Star Delta Mccb Panel",
            "img": star_delta_mccb,
            "description": "A Star Delta MCCB panel for enhanced motor control and protection.",
            "features": [
              "MCCB circuit breaker",
              "Automatic Star-Delta transition",
              "High durability",
              "Heavy-duty usage"
            ],
            "specifications": [
              "Voltage: 415V",
              "Current: 250A",
              "Dimensions: 900x700x300mm",
              "Protection: IP66"
            ],
            "other_info": [
              "Used in industrial environments requiring reliable motor protection."
            ]
          },
          {
            "id": 5,
            "type": "DOL Panel",
            "img":dolpanel,
            "description": "A basic DOL panel for direct motor start and control.",
            "features": [
              "Simple to operate",
              "Compact design",
              "Low cost",
              "Overload protection"
            ],
            "specifications": [
              "Voltage: 415V",
              "Current: 60A",
              "Dimensions: 500x400x150mm",
              "Protection: IP55"
            ],
            "other_info": [
              "Used for direct control of small to medium motors."
            ]
          },
          {
            "id": 4,
            "type": "DOL Gold Panel",
            "img": dolgold,
            "description": "A premium DOL panel with enhanced features for motor control.",
            "features": [
              "Premium design",
              "Overload protection",
              "Durable materials",
              "Easy maintenance"
            ],
            "specifications": [
              "Voltage: 415V",
              "Current: 70A",
              "Dimensions: 550x450x200mm",
              "Protection: IP65"
            ],
            "other_info": [
              "Preferred for motors requiring additional protection."
            ]
          },
          {
            "id": 3,
            "type": "DOL MCCB Panel",
            "img": dolmccb,
            "description": "A DOL panel with MCCB for advanced motor control.",
            "features": [
              "MCCB protection",
              "Enhanced motor control",
              "High durability",
              "Reliable operation"
            ],
            "specifications": [
              "Voltage: 415V",
              "Current: 100A",
              "Dimensions: 600x500x200mm",
              "Protection: IP66"
            ],
            "other_info": [
              "Used in industries needing higher levels of motor protection."
            ]
          },
          {
            "id": 2,
            "type": "ATS Panel",
            "img": atspanel,
            "description": "An Automatic Transfer Switch panel for smooth power transitions.",
            "features": [
              "Automatic transfer between power sources",
              "Durable design",
              "High reliability",
              "Low maintenance"
            ],
            "specifications": [
              "Voltage: 415V",
              "Current: 150A",
              "Dimensions: 700x500x250mm",
              "Protection: IP65"
            ],
            "other_info": [
              "Used in systems requiring backup power management."
            ]
          },
          {
            "id": 1,
            "type": "Star Delta Panel",
            "img": stardelta,
            "description": "A Star Delta Panel is a type of motor control panel used to start an induction motor by reducing the initial current surge. This panel achieves this by initially connecting the motor windings in a star configuration and then switching them to a delta configuration once the motor reaches a certain speed. This method is highly efficient in limiting the inrush current and reducing electrical stress on the motor and the power supply network.",
            "features": [
              "The primary feature of a Star Delta Panel is its ability to significantly reduce the inrush current during motor start-up.",
              "Reduces starting current and mechanical stress on the motor",
              "Suitable for high-power motors",
              "Manual or automatic operation modes"
            ],
            "specifications": [
              "Typically designed for voltages ranging from 220V to 690V AC.",
              "Commonly suitable for both 50Hz and 60Hz power supply.",
              "Available for different motor ratings, commonly from 5 HP to 200 HP or higher."
            ],
            "other_info": [
              "Widely used in various industries including manufacturing, water treatment plants, HVAC systems, agricultural irrigation, and mining.",
              "Can be installed indoors or outdoors, depending on the enclosure rating and environmental conditions.",
              "Requires regular maintenance checks to ensure optimal performance and longevity. This includes checking connections, inspecting for signs of wear, and testing protection devices."
            ]
          }
        ]
      }
      
    const products = [
        {
            id: uuidv4(),
            img: stardelta,
            title: 'Star Delta Panel',
            description: 'A star delta starter, also known as a Wye-Delta starter, is an electrical control circuit used to start and control the speed of three-phase induction motors. It is widely employed in various industries where motors with high power ratings are used, such as manufacturing plants, refineries, and mining operations.'
        },
        {
            id: uuidv4(),
            img: atspanel,
            title: 'ATS Panel',
            description: 'A star delta starter, also known as a Wye-Delta starter, is an electrical control circuit used to start and control the speed of three-phase induction motors. It is widely employed in various industries where motors with high power ratings are used, such as manufacturing plants, refineries, and mining operations.'
        },
        {
            id: uuidv4(),
            img: dolmccb,
            title: 'Dol Mccb Panel',
            description: 'A star delta starter, also known as a Wye-Delta starter, is an electrical control circuit used to start and control the speed of three-phase induction motors. It is widely employed in various industries where motors with high power ratings are used, such as manufacturing plants, refineries, and mining operations.'
        },
        {
            id: uuidv4(),
            img: dolgold,
            title: 'Dol Gold Panel',
            description: 'A star delta starter, also known as a Wye-Delta starter, is an electrical control circuit used to start and control the speed of three-phase induction motors. It is widely employed in various industries where motors with high power ratings are used, such as manufacturing plants, refineries, and mining operations.'
        },
        {
            id: uuidv4(),
            img: dolpanel,
            title: 'Dol Panel',
            description: 'A star delta starter, also known as a Wye-Delta starter, is an electrical control circuit used to start and control the speed of three-phase induction motors. It is widely employed in various industries where motors with high power ratings are used, such as manufacturing plants, refineries, and mining operations.'
        },
        {
            id: uuidv4(),
            img: star_delta_mccb,
            title: 'Star Delta Mccb Panel',
            description: 'A star delta starter, also known as a Wye-Delta starter, is an electrical control circuit used to start and control the speed of three-phase induction motors. It is widely employed in various industries where motors with high power ratings are used, such as manufacturing plants, refineries, and mining operations.'
        }
    ]

    useEffect(() => {

        const foundProduct = productsData.panels.find(item => item.id === productId);
        setProduct(foundProduct);
    }, [productId]);


    const { type, img, description, features, specifications, other_info } = product || {};

    return (
        <>
            <Breadcrumbs title='Product Details Default' />
            <section className='m-top53px'>
                <div>
                    <div>
                        {product ? (
                            <div>
                                <div className='img-magnify container'>
                                    <div className='border1px'>
                                        <ReactImageMagnify {...{
                                            smallImage: {
                                                alt: 'Wristwatch by Ted Baker London',
                                                isFluidWidth: true,
                                                src: img,

                                            },
                                            largeImage: {
                                                src: img,
                                                width: 800,
                                                height: 800
                                            },
                                            enlargedImagePosition: 'over',
                                            lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }

                                        }} />
                                    </div>
                                    <div className='description' data-aos="fade-up">
                                        <h2>{type}</h2>
                                        <h3>Description</h3>
                                        <p>{description}</p>
                                        <h3>Features</h3>
                                        <ul>
                                            {features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className='specification'>
                                    <div className='otherinfo' data-aos="fade-up">
                                        <h3>Specifications</h3>
                                        <ul>
                                            {specifications.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className='otherinfo' data-aos="fade-up">
                                        <h3>Other Info</h3>
                                        <ul>
                                            {other_info.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p>Product not found</p>
                        )}
                    </div>
                </div>
            </section>
            <section className='m-top53px' data-aos="fade-up">
                <div className='container'>
                    <div className='h1-container'><h1>Related Products</h1></div>
                    <div>
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
                            modules={[Autoplay, Navigation]}

                        >
                            {
                                products?.map((product, index) => {
                                    return (
                                        <SwiperSlide key={product.id} className='related-product'>
                                            <Link key={product.id} to={`/Allproduct/${index + 1}`}>
                                                <img src={product.img} width='100' />
                                                <h4>{product.title}</h4>
                                                <p>{`${product.description.slice(0, 48)}...`}</p>
                                                <ul>
                                                    <li><a >Read More</a></li>
                                                </ul>
                                            </Link>
                                        </SwiperSlide>
                                    )
                                })

                            }
                        </Swiper>
                    </div>

                </div>
            </section>
            <section className='m-top53px'>

            </section>
        </>
    )
}

export default ProductById
