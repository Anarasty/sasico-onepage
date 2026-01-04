import React from 'react'
import './Main.scss'
import Button from '../Parts/Button/Button'
import Badge from '../Parts/Badge/Badge'
import Divider from '../Parts/Divider/Divider'
import arrowIcon from '../../assets/images/arrow-right.svg'
import mainImage from '../../assets/images/main-img1.png'
import clutchImage from '../../assets/images/clutch.png'
import starIcon from '../../assets/star.svg'

const Main = () => {
  return (
    <section className="main-hero">
      <div className="main-hero__container">
        <div className="main-hero__content">
          <Badge>
            Your Digital Assistant, Always On.
          </Badge>
          
          <h1 className="main-hero__title">
            Revolutionize the way you communicate
          </h1>
          
          <p className="main-hero__description">
            At our digital agency, we blend creativity, strategy, and technology to build impactful digital experiences that drive into the digital results.
          </p>
          
          <div className="main-hero__cta">
            <Button icon={arrowIcon} iconPosition="right" className="main-hero__button">
              Get a Free 14-days trial
            </Button>
          </div>
          
          <Divider />
          
          <div className="main-hero__reviews">
            <div className="main-hero__clutch">
              <img src={clutchImage} alt="Clutch" className="main-hero__clutch-image" />
            </div>
            <div className="main-hero__review-content">
              <div className="main-hero__review-top">
                <div className="main-hero__stars">
                  <img src={starIcon} alt="Star" />
                  <img src={starIcon} alt="Star" />
                  <img src={starIcon} alt="Star" />
                  <img src={starIcon} alt="Star" />
                  <img src={starIcon} alt="Star" />
                </div>
                <span className="main-hero__review-count">150+ Reviews</span>
              </div>
              <span className="main-hero__review-subtitle">by over 2500+ global satisfied clients</span>
            </div>
          </div>
        </div>
        
        <div className="main-hero__image">
          <img src={mainImage} alt="Chatbot AI Application" />
        </div>
      </div>
    </section>
  )
}

export default Main
