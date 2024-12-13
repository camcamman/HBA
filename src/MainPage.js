import React from "react";
import './css/mainPage.css';
const CustomNavbar = () => {
    return (
        <div class="container">
            <div class="header-container">

                {/* <img class ="main-page-img-header"
                src="https://plus.unsplash.com/premium_photo-1671808062726-2a7ffcd6109e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="house"/> */}
                <button className="how-to-get-licensed" >How to get Licensed</button>   

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
                {/* <div class="online-continuing-education-container">
                    <button class="online-continuing-education" onClick={() => window.open("https://onlinece.hbautah.com/home/?site_template_id=60caa047fc128d640e5f0d25", '_blank')}>Online Continuing Education</button>                
                </div> */}

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
            <div class="extra-space">
                <p>extra space</p>
            </div>
        </div>
    );
};
export default CustomNavbar;