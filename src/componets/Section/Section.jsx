import React from 'react'
import './Section.scss'

const Section = () => {
    return (
        <>
            <section className="section1">
                <div className="container">
                    <div className="wrap2">
                        <div className="text1">
                            <h1>Building digital products, brands & experience</h1>
                            <p>Digital Agency is your online team mangement Tool That easy and prompt</p>
                            <button className="btn1">Contact Us</button>
                        </div>

                        <img className='img1' src="/bisiness.png" alt="" />
                    </div>
                </div>
            </section>

            <section className="section2">
                <div className="container">
                    <p className="dickhead">Trusted by 4,000+ companies</p>
                    <div className="wrap3">
                        <img src="/logo-1.png" alt="" className="logo" />
                        <img src="/logo-2.png" alt="" className="logo" />
                        <img src="/logo-3.png" alt="" className="logo" />
                        <img src="/logo-4.png" alt="" className="logo" />
                    </div>
                </div>
            </section>

            <section className="section3">
                <div className="container">
                    <div className="wrap4 wrap44">
                        <img src="/creative.png" alt="" className="img2" />
                        <div className="comment">
                            <h1>Branding & Design system</h1>
                            <p>Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups </p>
                            <img src="/arrow-1.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section3">
                <div className="container">
                    <div className="wrap9 ">
                        <div className="comment">
                            <h1>Custome & Plugin Development</h1>
                            <p>Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups </p>
                            <img src="/arrow-1.png" alt="" />
                        </div>
                        <img src="/analyzing.png" alt="" className="img2" />
                    </div>
                </div>
            </section>

            <section className="section4">
                <div className="container">
                    <div className="comment1">
                        <p>TESTIMONIALS</p>
                        <h1>Read What Other <br /> have to Say</h1>
                    </div>
                    <div className="wrap5">
                        <div class="box2">
                            <img src="/man.png" alt="" />
                            <h1>Andrew Rathore</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in
                                malesuada felis malesuada vel. </p>
                        </div>

                        <div className="box2">
                            <img src="/women.png" alt="" />
                            <h1>Vera Duncan</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in
                                malesuada felis malesuada vel. </p>
                        </div>

                        <div className="box2">
                            <img src="/women-2.png" alt="" />
                            <h1>Mark Smith</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section5">
                <div className="container">
                    <div className="wrap6">
                        <img src="/support.png" alt="" />
                        <div>
                            <h1>Be a part of the <br /> next big thing</h1>
                            <p>We work with Brans, Startups, to SMEs. <br /> Colaborate for more impact and growt</p>
                            <button className="btn1">Contact Us</button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Section