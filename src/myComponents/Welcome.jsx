import React from 'react'

export default function Welcome() {
    return (
        <>
            <div className="welcome">
                <h1> <span className='welTO'>WELCOME TO </span> HPD CONSULTANTS</h1> 
                <div className="main">
                    <img src="https://www.hpdglobal.com/images/hpd-consultants.jpg" alt="nopic" />
                    <div className="para">
                        <p> <strong> HPD Consultants - A fresh approach towards Engineering Consulting!</strong> <br /> 
                            Engineering world is experiencing a great change. Complex nature of business, global spread of client organizations and fast pace of technology advancement are disrupting the business. At such time, you need your consultants to have the right blend of strong fundamental engineering knowledge and a great appreciation of technology.
                                
                            At HPD, we have taken a fresh approach towards Engineering Consulting. Our commitment is to offer you a service experience of rich technical expertise, global best practices and agile working.
                              
                            We welcome you to explore our project experience and check out the services.
                        </p>
                    </div>
                </div>
            </div>
            <br />
            <div className="ourValue">
                
                <p>"Experience of working in world’s leading infrastructure companies" <br />
                    " Exposure to complex, global projects" <br />
                    "Qualified and professional team" <br />
                    " Ability to bring in best practices and technologies" <br />
                    "Diverse network of engineering and project experts" <br />
                    " Passion for quality and consistency" <br /><br />
                    <button type="submit" className='btn'>Read More</button>
                </p>
               
                <img src="https://www.hpdglobal.com/images/our-values-hpd-consultants.jpg" alt="noImg" />
                
            </div>
           
        </>
    )
}
