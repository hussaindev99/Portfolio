"use client"
import Image from "next/image";
import myimg from "@/public/dummy-image.jpg"
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import { GiCrossMark } from "react-icons/gi";
import Link from "next/link";
export default function Home() {
  const [on, setOn] = useState(false)
  const onbutton = () => {
    setOn(!on);
  }
  return (
    <>
      <header className="header">
        <Link href="#home" className="logo"> Muhammad<span>{'Hussain'}</span></Link>
        <div id="menu-icon" onClick={onbutton}>
          {on ? <GiCrossMark /> : <TiThMenu className='bx bx-menu' />}
        </div>
        {on && (
          <div className="dropdown">
            <a href="#home" class="active">Home</a>
            <a href="#education">Education</a>
            <a href="#services">Services</a>
            <a href="#testmonials">Testmonials</a>
            <a href="#contact">Contact</a>
          </div>
        )}
        <nav className="navbar">
          <a href="#home" class="active">Home</a>
          <a href="#education">Education</a>
          <a href="#services">Services</a>
          <a href="#testmonials">Testmonials</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section className="home" id="home">
        <div className="home-content">
          <h1>Hi, {`It's`} <span>{"Hussain"}</span></h1>
          <h3 className="text-animation">{`I'm a `}<span>

          </span></h3>
          <p>I am a frontend developer, and I {"haven't"} worked in any company. I have created many demo projects.</p>
          <div className="social-icons">
            <a href="#"><FaLinkedinIn className='bx bxl-linkedin' /></a>
            <a href="#"><FaGithub className='bx bxl-github' /></a>
            <a href="#"><FaInstagram className='bx bxl-instagram-alt' /></a>
            <a href="#"><FaTwitter className='bx bxl-twitter' /></a>
          </div>
          <div className="btn-group">
            <Link href="/CV" className="btn">CV</Link>
            <a href="#contact" className="btn1">Contact</a>
          </div>
        </div>
        <div className="home-img">
          <Image src={myimg} alt="" />
        </div>
      </section>
      <section className="education" id="education">
        <h2 className="heading">Education</h2>
        <div className="timeline-items">
          {/* <!-- 1./?  --> */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2021-2023</div>
            <div className="timeline-content">
              <h3>High School</h3>
              <p>{`'I completed my matriculation (10th grade) from Government High School 120JB, spanning from 2021 to 2023'`}</p>
            </div>

          </div>
          {/* <!-- 2./? --> */}
          <div className="timeline-item">
            <div className="timeline-dot"> </div>
            <div className="timeline-date">2024-2026</div>
            <div className="timeline-content">
              <h3>College</h3>
              <p>{`'I am currently studying in college and, Inshallah, will complete my college studies in 2026'`}</p>
            </div>

          </div>

          {/* <!-- 3?\ --> */}
          <div className="timeline-item">
            <div className="timeline-dot"> </div>
            <div className="timeline-date">2024</div>
            <div className="timeline-content">
              <h3>Intership</h3>
              <p>{`'Assisted in developing frontend features for web applications, conducted user testing, and collaborated with senior developers to implement new features, gaining hands-on experience in a professional environment as a frontend developer'`}</p>
            </div>

          </div>
          {/* <!-- 4./? --> */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2024</div>
            <div className="timeline-content">
              <h3>Job 0</h3>
              <p>{`"Engineered scalable software solutions, led code reviews,
                and optimized application performance
                to enhance user experience and system efficiency"`} </p>
            </div>

          </div>
        </div>
      </section>
      <section className="services" id="services">
        <h2 className="heading">Services</h2>

        <div className="services-container">
          {/* <!-- 1../?<> --> */}
          <div className="service-box">
            <div className="service-info">
              <h4>UI Design</h4>
              <p>{`"Crafting intuitive and visually engaging
                user interfaces that enhance user experience
                and drive interaction. Our designs focus on simplicity,
                consistency, and functionality to ensure a
                seamless experience across all platforms."`}</p>
            </div>
          </div>


          {/* <!-- 2../>? -->s */}
          <div className="service-box">
            <div className="service-info">
              <h4>Frontend Development</h4>
              <p>{`Building responsive and interactive websites
                that bring your designs to life. Our development
                focuses on clean code, performance optimization,
                and cross-browser compatibility to deliver
                seamless user experiences across all devices.`}</p>
            </div>
          </div>


          {/* <!-- 4../<> --> */}

          <div className="service-box">
            <div className="service-info">
              <h4>Testing</h4>
              <p>{`Ensuring the highest quality of your application
                through rigorous testing. We identify and
                resolve issues early, focusing on functionality,
                usability, and performance to deliver a
                flawless user experience.`}</p>
            </div>
          </div>

        </div>
      </section>
      <section className="testmonials" id="testmonials">
        <div className="testmonials-box">
          <h2 className="heading">Testmonials</h2>

          <div className="wrapper">
            {/* <!-- 1../<> --> */}
            <div className="testmonials-item">
              <Image src={myimg} alt="" />
              <h2>Hussain</h2>
              <div className="rating">
                <i className='bx bxs-star' id="star"></i>
                <i className='bx bxs-star' id="star"></i>
                <i className='bx bxs-star' id="star"></i>
                <i className='bx bxs-star' id="star"></i>
                <i className='bx bxs-star' id="star"></i>
              </div>
              <p>{`"Working with the team was
                an exceptional experience.
                Their professionalism,
                attention to detail,
                and dedication to delivering
                a high-quality product were evident
                throughout the project!"`}</p>
            </div>

            {/* <!-- 2../<> --> */}
            <div className="testmonials-item">
              <Image src={myimg} alt="" />
              <h2>Hussain</h2>
              <div className="rating">
                <i className='bx bxs-star' id="star"></i>
                <i className='bx bxs-star' id="star"></i>
                <i className='bx bxs-star' id="star"></i>
                <i className='bx bxs-star' id="star"></i>
                <i className='bx bxs-star' id="star"></i>
              </div>
              <p>{`"Working with the team was
                an exceptional experience.
                Their professionalism,
                attention to detail,
                and dedication to delivering
                a high-quality product were evident
                throughout the project"`}</p>
            </div>

            {/* <!-- 3../<>? --> */}

            <div className="testmonials-item">
              <Image src={myimg} alt="" />
              <h2>Hussain</h2>
              <div className="rating">
                <i className='bx bxs-star' id="star"></i>
                <i className='bx bxs-star' id="star"></i>
                <i className='bx bxs-star' id="star"></i>
                <i className='bx bxs-star' id="star"></i>
                <i className='bx bxs-star' id="star"></i>
              </div>
              <p>{`"Working with the team was
                an exceptional experience.
                Their professionalism,
                attention to detail,
                and dedication to delivering
                a high-quality product were evident
                throughout the project!"`}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me</span></h2>

        <form action="">
          <div className="input-group">
            <div className="input-box">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-box">
              <input type="number" placeholder="Phone Number" />
              <input type="text" placeholder="Subject" />
            </div>
          </div>

          <div className="input-group-2">
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
            <input type="submit" value="Send Message" class="btn" />
          </div>
        </form>
        <div className="text-center">
          <input
            type="submit"
            value="Send Message"
            className="btn px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark focus:outline-none transition duration-300"
          />
        </div>

      </section>
      <footer className="footer">
        <div className="social">
          <a href="#"><FaLinkedinIn className='linkedin' /></a>
          <a href="#"><FaGithub className='linkedin' /></a>
          <a href="#"><FaInstagram className='linkedin' /></a>
          <a href="#"><FaTwitter className='linkedin' /></a>
        </div>
        <ul className="list">
          <li>
            <a href="#">FAQ</a>
          </li>

          <li>
            <a href="#">Services</a>
          </li>

          <li>
            <a href="#">About Me</a>
          </li>

          <li>
            <a href="#">Contact</a>
          </li>

          <li>
            <a href="#">Testmonials</a>
          </li>
        </ul>
        <p className="copyright">
          © Muhammad Hussain | All Rights Reserved
        </p>
      </footer>
      <style jsx>{`
                input[type="number"]::-webkit-inner-spin-button,
                input[type="number"]::-webkit-outer-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }
                input[type="number"] {
                    -moz-appearance: textfield; /* Firefox */
                }
            `}</style>
    </>
  );
}
