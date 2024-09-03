import React, { useEffect } from 'react'
import Breadcrumbs from '../Breadcrumbs'
import stardelta from '../../Assets/14611_stardelta.png'
import atspanel from '../../Assets/43541_atspanel.jpg'
import dolmccb from '../../Assets/49655_dolmccb.jpg'
import dolgold from '../../Assets/69312_dolgold.png'
import dolpanel from '../../Assets/80359_dolpanel (1).jpg'
import star_delta_mccb from '../../Assets/stardeltamccbpanel.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { v4 as uuidv4 } from 'uuid';
import './AllProducts.css'
function AllProduct() {

  useEffect(() => {
    AOS.init()
  }, [])

  const products = [
    {
      id: uuidv4(),
      img: stardelta,
      title: 'Star Delta Panel',
      description:'A Star Delta Panel is a type of motor control panel used to start an induction motor by reducing the initial current surge. This panel achieves this by initially connecting the motor windings in a star configuration and then switching them to a delta configuration once the motor reaches a certain speed. This method is highly efficient in limiting the inrush current and reducing electrical stress on the motor and the power supply network.'
    },
    {
      id: uuidv4(),
      img: atspanel,
      title: 'ATS Panel',
      description:'An Automatic Transfer Switch (ATS) Panel is an electrical device that automatically switches a power supply from its primary source to a backup source when it detects a failure or outage in the primary source. It is commonly used in conjunction with generators to ensure an uninterrupted power supply to critical loads. When normal power is restored, the ATS panel switches back to the primary power source, ensuring seamless operation and minimal disruption.'
    },
    {
      id: uuidv4(),
      img: dolmccb,
      title: 'Dol Mccb Panel',
      description:'A Direct-On-Line (DOL) Motor Control Circuit Breaker (MCCB) Panel is used to directly start and protect electric motors. It is one of the simplest and most commonly used motor starting methods, where the motor is connected directly to the full line voltage. The MCCB provides essential protection against overloads, short circuits, and electrical faults. This type of panel is widely used in various industrial and commercial applications for its reliability and straightforward operation.'
    },
    {
      id: uuidv4(),
      img: dolgold,
      title: 'Dol Gold Panel',
      description:'A Direct-On-Line (DOL) Gold Panel is an advanced version of the standard DOL motor starter panel. It is designed to provide direct startup for electric motors by applying full line voltage to the motor terminals. The Gold designation often indicates enhanced features, superior components, and additional functionalities compared to standard DOL panels. These panels are widely used in industrial and commercial applications where reliability, efficiency, and enhanced motor protection are crucial.'
    },
    {
      id: uuidv4(),
      img: dolpanel,
      title: 'Dol Panel',
      description:'A Direct-On-Line (DOL) Panel is a type of motor control panel used to start electric motors by applying the full line voltage directly to the motor terminals. This method is straightforward and is one of the most common starting methods for small to medium-sized motors. DOL panels provide essential protection and control functions, making them suitable for various industrial and commercial applications where simple and reliable motor startup is required.'
    },
    {
      id: uuidv4(),
      img: star_delta_mccb,
      title: 'Star Delta Mccb Panel',
      description:'A Star Delta MCCB Panel is an electrical control panel used to start and protect three-phase induction motors by initially connecting the motor windings in a star configuration and then switching to a delta configuration once the motor reaches a certain speed. This starting method reduces the inrush current and mechanical stress on the motor. The panel incorporates Motor Control Circuit Breakers (MCCBs) for protection against overcurrent and short circuits, enhancing the safety and reliability of the motor operation.'
    }
  ]
  return (
    <div>
      <Breadcrumbs title='All Product'/>
      <section className='m-top53px' data-aos="fade-up">
        <div className='container'>
          <div className='grid-container'>
                {
                  products?.map((product,index)=>{
                        return(
                          <a key={product.id} className='product-child' href={`/Allproduct/${index+1}`}>
                            <h4>{product.title}</h4>
                            <img src={product.img} width='100'/>
                            <h3>Description</h3>
                            <p>{`${product.description.slice(0,58)}...`}</p>
                            <ul>
                              <li><a >Read More</a></li>
                            </ul>
                          </a>
                        )
                  })
                }
          </div>
        </div>
      </section>
      <section className='m-top53px'>

      </section>
    </div>
  )
}

export default AllProduct