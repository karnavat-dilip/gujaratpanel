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
import { useParams } from 'react-router-dom';
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
                "id": 6,
                "type": "Star Delta Mccb Panel",
                "img": star_delta_mccb,
                "description": "A Star Delta MCCB Panel is an electrical control panel used to start and protect three-phase induction motors by initially connecting the motor windings in a star configuration and then switching to a delta configuration once the motor reaches a certain speed. This starting method reduces the inrush current and mechanical stress on the motor. The panel incorporates Motor Control Circuit Breakers (MCCBs) for protection against overcurrent and short circuits, enhancing the safety and reliability of the motor operation.",
                "features": [
                    "Utilizes a star-delta starting method to significantly reduce the initial surge current during motor startup.",
                    "Includes Motor Control Circuit Breakers for overcurrent and short-circuit protection.",
                    "Automatically switches from star to delta configuration after a preset time or when the motor reaches a specific speed.",
                    "Built with high-quality materials to withstand industrial environments and ensure long-lasting performance."
                ],
                "specifications": [
                    "Typically designed for voltages ranging from 220V to 690V AC.",
                    "Suitable for motor ratings commonly from 5 HP to 500 HP or higher.",
                    "MCCBs in the panel can handle current ratings from 10A to 800A, depending on motor requirements.",
                    "Suitable for both 50Hz and 60Hz power systems."
                ],
                "other_info": [
                    "Ideal for industries such as manufacturing, water treatment plants, HVAC systems, agricultural machinery, and mining where motor control and protection are critical.",
                    "Requires regular maintenance checks, including testing MCCBs, inspecting wiring connections, and verifying control components for optimal performance.",
                    "The star-delta starting method helps reduce energy consumption during motor startup, contributing to overall energy efficiency."
                ]
            },
            {
                "id": 5,
                "type": "DOL Panel",
                "img": dolpanel,
                "description": "A Direct-On-Line (DOL) Panel is a type of motor control panel used to start electric motors by applying the full line voltage directly to the motor terminals. This method is straightforward and is one of the most common starting methods for small to medium-sized motors. DOL panels provide essential protection and control functions, making them suitable for various industrial and commercial applications where simple and reliable motor startup is required.",
                "features": [
                    "Simple and cost-effective motor starting solution",
                    "Suitable for small to medium-sized motors",
                    "Manual control operation",
                    "Directly starts the motor by connecting it to the full line voltage, making it easy to use and understand.",
                    "Includes thermal overload relays to protect the motor from overheating due to excessive current."
                ],
                "specifications": [
                    "Typically designed for voltages ranging from 220V to 690V AC.",
                    "Suitable for motor ratings commonly from 0.5 HP to 250 HP or higher.",
                    "Can handle current ratings from 10A to 800A, depending on motor requirements.",
                    "Operates with control voltages such as 24V DC, 110V AC, or 220V AC."
                ],
                "other_info": [
                    "Widely used in industries such as manufacturing, water treatment plants, HVAC systems, agricultural machinery, and mining.",
                    "Requires regular maintenance checks including testing overload relays, inspecting wiring connections, and verifying control components for optimal performance.",
                    "Panels can be tailored with additional features like remote monitoring, programmable logic controllers (PLCs), and human-machine interfaces (HMIs)."
                ]
            },
            {
                "id": 4,
                "type": "DOL Gold Panel",
                "img": dolgold,
                "description": "A Direct-On-Line (DOL) Gold Panel is an advanced version of the standard DOL motor starter panel. It is designed to provide direct startup for electric motors by applying full line voltage to the motor terminals. The Gold designation often indicates enhanced features, superior components, and additional functionalities compared to standard DOL panels. These panels are widely used in industrial and commercial applications where reliability, efficiency, and enhanced motor protection are crucial.",
                "features": [
                    "Enhanced motor protection features",
                    "Digital interface for monitoring and control",
                    "Built-in fault diagnostics",
                    "Capable of remote monitoring and control through communication interfaces like Modbus, Ethernet, or other industrial communication protocols."
                ],
                "specifications": [
                    "Typically designed for voltages ranging from 220V to 690V AC.",
                    "Suitable for motor ratings commonly from 0.5 HP to 250 HP or higher.",
                    "Can handle current ratings from 10A to 800A, depending on motor requirements."
                ],
                "other_info": [
                    "Ideal for industries such as manufacturing, water treatment, HVAC systems, agricultural machinery, and mining where reliable motor control and protection are essential.",
                    "Requires regular maintenance checks, including testing of circuit breakers and relays, inspection of wiring connections, and ensuring the control system is functioning correctly."
                ]
            },
            {
                "id": 3,
                "type": "DOL MCCB Panel",
                "img": dolmccb,
                "description": "A Direct-On-Line (DOL) Motor Control Circuit Breaker (MCCB) Panel is used to directly start and protect electric motors. It is one of the simplest and most commonly used motor starting methods, where the motor is connected directly to the full line voltage. The MCCB provides essential protection against overloads, short circuits, and electrical faults. This type of panel is widely used in various industrial and commercial applications for its reliability and straightforward operation.",
                "features": [
                    "Built-in MCCBs for circuit protection",
                    "Adjustable overload settings",
                    "Compact and modular design",
                    "Utilizes a Motor Control Circuit Breaker (MCCB) to provide comprehensive protection against overloads, short circuits, and faults."
                ],
                "specifications": [
                    "Typically designed for voltages ranging from 220V to 690V AC.",
                    "Suitable for motor ratings commonly from 0.5 HP to 250 HP or higher.",
                    "MCCBs in the panel can handle currents from 10A to 800A, depending on the motor requirements.",
                    "Designed for both 50Hz and 60Hz power systems."
                ],
                "other_info": [
                    "Widely used in industries such as manufacturing, water treatment plants, HVAC systems, agricultural machinery, and mining.",
                    "Can be installed indoors or outdoors, depending on the enclosure rating and environmental conditions.",
                    "While DOL starters are not the most energy-efficient option, they are reliable and straightforward, making them suitable for applications where simplicity and cost-effectiveness are prioritized."
                ]
            },
            {
                "id": 2,
                "type": "ATS Panel",
                "img": atspanel,
                "description": "An Automatic Transfer Switch (ATS) Panel is an electrical device that automatically switches a power supply from its primary source to a backup source when it detects a failure or outage in the primary source. It is commonly used in conjunction with generators to ensure an uninterrupted power supply to critical loads. When normal power is restored, the ATS panel switches back to the primary power source, ensuring seamless operation and minimal disruption.",
                "features": [
                    "Automatic switching between mains and backup power sources",
                    "Seamless transition without power interruption",
                    "Remote monitoring and control capabilities",
                    "Equipped with LED indicators to show the status of power sources and transfer switch position.",
                    "Features overcurrent, short-circuit, and voltage protection mechanisms to safeguard the connected equipment."
                ],
                "specifications": [
                    "Typically designed for voltages ranging from 120V to 600V AC.",
                    "Available in various current ratings, commonly from 16A to 4000A, depending on application needs.",
                    "Suitable for both 50Hz and 60Hz power systems.",
                    "Transfer time between sources is typically less than 30 milliseconds to ensure minimal disruption."
                ],
                "other_info": [
                    "Commonly used in hospitals, data centers, commercial buildings, industrial plants, and anywhere an uninterrupted power supply is critical.",
                    "Requires regular maintenance checks to ensure reliability and performance. This includes testing the switch operation, inspecting connections, and ensuring the control system is functioning correctly."
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
                    "Manual or automatic operation modes",
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
                                            <a key={product.id} href={`/Allproduct/${index + 1}`}>
                                                <img src={product.img} width='100' />
                                                <h4>{product.title}</h4>
                                                <p>{`${product.description.slice(0, 48)}...`}</p>
                                                <ul>
                                                    <li><a >Read More</a></li>
                                                </ul>
                                            </a>
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
