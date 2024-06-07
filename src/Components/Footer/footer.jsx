import React ,{useEffect} from "react";
import "./footer.css";
import video2 from "../../Assest/Video (2) .mp4";
import { FiSend } from "react-icons/fi";
import { GiJourney } from "react-icons/gi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} muted autoPlay loop type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Subscribe To Get Updated</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href=" # " className="logo flex">
                <GiJourney className="icon" />
                Travel.
              </a>
            </div>
            <div data-aos="fade-up" className="footerParaghraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              dicta magnam? Ipsa sint possimus ad dignissimos illo alias ipsum
              odio!
            </div>
            <div data-aos="fade-up" className="footerSocials">
              <AiOutlineTwitter className="icon" />
              <AiOutlineYoutube className="icon" />
              <AiOutlineInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* Group One */}
            <div data-aos="fade-up" data-aos-duration="3000" className="linksGroup">
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>

            {/* Group Two */}
            <div data-aos="fade-up" data-aos-duration="4000" className="linksGroup">
              <span className="groupTitle">PARTNERS</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Booking
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rent Cars
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Hostel World
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trip Advsior
              </li>
            </div>

            {/* Group Three */}
            <div data-aos="fade-up" data-aos-duration="5000" className="linksGroup">
              <span className="groupTitle">LAST MINUTS</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                California
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Indonesia
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Oceania
              </li>
            </div>
          </div>
          <div className="footerDiv flex">
            <h4>
              copyrights@2024 | Produced By{" "}
              <a href="https://www.linkedin.com/in/ahmed-sayed3">Ahmed sayed</a>{" "}
              all rights reserved.{" "}
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
