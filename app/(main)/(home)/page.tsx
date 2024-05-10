import React from 'react'
import AboutUsSection from './about-us'
import ServiceSection from './service'
import MeetTriSection from './meet-tru-ai'
import WhyChooseSection from './why-choose-lens'
import OurVisionSection from './our-vision'
import OurBlogs from './our-blogs'
import Faq from './faq'
import GetInTouch from './get-in-touch'
import ByTheNumbers from './by-the-number'
import HeroSection from './hero-section'

const HomePage = () => {
  return (
    <div className=''>
      <HeroSection/>
      <AboutUsSection/>
      <ServiceSection/>
      <MeetTriSection/>
      <WhyChooseSection/>
      <OurVisionSection/>
      <OurBlogs/>
      <ByTheNumbers/>
      <Faq/>
      <GetInTouch/>
    </div>
  )
}

export default HomePage