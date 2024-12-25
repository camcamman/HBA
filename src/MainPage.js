import React from "react";
import './css/mainPage/mainPage.css';
import './css/mainPage/mainPagePhone.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
const CustomNavbar = () => {

    const images = [
        // summitInsurance
        {
            url: "https://hbautah.com/wp-content/uploads/2024/01/image001.jpg",
            text: "IS YOUR INSURANCE POLICY MISSING SOMETHING? (full of coverage exclusions)",
            link: "https://www.summit-risk.com",
            imageClass: "summitInsurance-image",
            textClass: "summitInsurance-text"
        },
        // wcf insuance
        { url: "https://hbautah.com/wp-content/uploads/2021/01/WCF-final..png",
            text: "Flexible Insurance Solutions for Business of all Sizes",
            link: "https://www.wcf.com/",
            imageClass: "wcf-image",
            textClass: "wcf-text"
        },
        // integraty
        { url: "https://hbautah.com/wp-content/uploads/2023/08/adserver_theassociationpartner_net__www_images_bed3266918682ba0e5d35cf213774479_png.jpg", 
            text: "YOUR LEADERS IN COMMERCIAL AND RESIDENTIAL TILE & FLOORING",
            link: "https://www.integritycontracting.com",
            imageClass: "integraty-image",
            textClass: "integraty-text"
        },
    ];

    return (
        <div class="container">
            <div class="header-container">
                <div class="how-to-get-licensed-button-container">
                    <button className="how-to-get-licensed" >How to get Licensed</button>   
                </div>

                <div class="transparent-box-container font-lato">

                    <div class="transparent-box transparent-box-1">
                        <p class="transparent-box-text">Webinar<br /> Continuing Education</p>
                        <button class="enrroll-now-button">Enroll Now</button>
                    </div>
                    <div class="transparent-box transparent-box-2">
                        <p class="transparent-box-text">In Person<br /> Continuing Education</p>
                        <button class="enrroll-now-button">Enroll Now</button>
                    </div>
                    <div class="transparent-box transparent-box-3">
                        <p class="transparent-box-text">Pre-License<br />Test Prep Courses</p>
                        <button class="enrroll-now-button">Enroll Now</button>
                    </div>

                </div>
                <div class="online-continuing-education-container">
                    <button class="online-continuing-education" onClick={() => window.open("https://onlinece.hbautah.com/home/?site_template_id=60caa047fc128d640e5f0d25", '_self')}>Online Continuing Education</button>                
                </div>

                <div class="click-daily-updates">
                    <button class="click-daily-updates-button" onClick={() => window.open("https://www.tiktok.com/@hbaofutah", '_blank')}>Click Here for the Daily Legislation Update</button>
                </div>
            </div>
                


                <div class="gray-box">
                  <div class="gray-box-header">
                    <h1>Get Your Contractor License Today!</h1>
                  </div>
                  
                  <div class="gray-box-columns">
                    <div class="gray-box-column subcontractor font-lato">
                      <p class = "gray-box-column-header">Subcontractor License</p>
                      <p>25 Hour Pre License Course</p>
                      <button href="https://google.com" target="_self" class="register-here-gray">Register Here</button>
                    </div>
                    <div class="gray-box-column general-contractor font-lato">
                      <p class = "gray-box-column-header">30 Hour General Contractor License</p>
                      <p>25 Hour Pre License Course + 5 Hour Test Prep Course</p>
                      <button href="https://google.com" target="_self" class="register-here-gray">Register Here</button>
                    </div>
                  </div>
            </div>
            <div class="dopl-container">
                <div class="tinted-box">
                    <p class="dopl-paragraph font-lato">Free in class DOPL application assistance!</p>
                </div>
            </div>

            <div class="how-much-ce-credit-container">
                <p class="how-much-ce-credit font-lato">Wondering how much CE credit you have?</p>
                <button class="how-much-ce-credit-button font-lato" onClick={() => window.open("https://secure.utah.gov/ce-public/index.html", '_blank')}>Click Here To See What Is Recorded With DOPL</button>
            </div>



            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                interval={4000}>

                {images.map((image, index) => (
                <a href={image.link} target="_blank" rel="noopener noreferrer" className="carousel-link">
                    <div key={index} className="carousel-div">
                    <img src={image.url} alt={image.text} className={`carousel-image ${image.imageClass}`}/>
                    <p className={`carousel-text font-lato ${image.textClass}`}>{image.text}</p>
                    </div>
                </a>
                ))}
            </Carousel>








            <div class="extra-space">
                <p>extra space</p>
            </div>
        </div>
    );
};
export default CustomNavbar;