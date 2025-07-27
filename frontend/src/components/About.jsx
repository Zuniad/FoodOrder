import React from 'react'

import{Link} from 'react-scroll'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const About = () => {
  return (
   <section className='about' id='about'>
    <div className='container'>
        <div className='banner'>
            <div className='top'>
                <h1 className='heading'>ABOUT US</h1>
                <p>The Only thing we are serious about is Food</p>
            </div>

            <p className="mid">
  Enjoy delicious options like Butter Chicken, Paneer Tikka, Veg Biryani, and Chole Bhature — all freshly prepared and available at your selected time slot. Your reservation includes table-side service, customizable spice levels, and access to exclusive desserts like Gulab Jamun and Mango Lassi. Don’t miss our chef’s special combo of the day!
            </p>
            
            <Link to={'/'}>Explore Menu <span><HiOutlineArrowNarrowRight/></span></Link>

        </div>
        <div className='banner'>
            <img src={"/about.png"}></img>

        </div>

    </div>

   </section>
  )
}

export default About