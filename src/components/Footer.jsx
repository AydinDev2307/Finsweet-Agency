import React from 'react';
import { NavLink } from 'react-router-dom';
import FooterIcon from '.././assets/icons/Shapes.svg';
import Logo from '.././assets/imgs/Logo2.svg';
import FaceBook from '.././assets/icons/FacebookIcon.svg';
import Instagram from '.././assets/icons/InstagramIcon.svg';
import Twitter from '.././assets/icons/TwitterIcon.svg';
import Linkedin from '.././assets/icons/LinkedinIcon.svg';

const Footer = () => {
  return (
    <footer className="w-[1600px] h-[560px] mt-[96px] container mx-auto">
      <div className="w-[1278px] h-[416px] conatiner mx-auto flex justify-between">
        <div className="w-[452px] h-[416px]">
          <img src={FooterIcon} alt="Icon" />
          <h1 className="text-[48px] font-[600] text-[rgba(35,37,54,1)] leading-[58px] tracking-normal mt-[32px]">
            Let's make something special
          </h1>
          <h1 className="text-[24px] font-[600] text-[rgba(35,37,54,1)] mt-[40px]">
            Let's talk! 🤙{' '}
          </h1>
          <h1 className="text-[18px] font-[500] mt-[28px]">020 7993 2905</h1>
          <h1 className="text-[18px] font-[500] mt-[4px]">hi@finsweet.com</h1>
          <h1 className="text-[14px] font-[500] text-[rgba(35,37,54,1)] mt-[30px]">
            DLF Cybercity, Bhubaneswar, India, &52050
          </h1>
        </div>
        <div className="w-[605px] h-[416px] mt-[80px] flex">
          <div className="w-[120px] h-[188px]">
            <ul className="flex flex-col gap-y-[10px]">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'rgba(35,37,54,1) text-[16px] font-[600]'
                    : 'rgba(35,37,54,1) text-[16px]'
                }
                to="/">
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'rgba(35,37,54,1) font-[600] text-[16px]'
                    : 'rgba(35,37,54,1) text-[16px]'
                }
                to="/service">
                Service
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'rgba(35,37,54,1) font-[600] text-[16px]'
                    : 'rgba(35,37,54,1) text-[16px]'
                }
                to="/company">
                Company
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'rgba(35,37,54,1) font-[600] text-[16px]'
                    : 'rgba(35,37,54,1) text-[16px]'
                }
                to="/career">
                Career
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'rgba(35,37,54,1) font-[600] text-[16px]'
                    : 'rgba(35,37,54,1) text-[16px]'
                }
                to="/blog">
                Blog
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'rgba(35,37,54,1) font-[600] text-[16px]'
                    : 'rgba(35,37,54,1) text-[16px]'
                }
                to="/contactus">
                Contact us
              </NavLink>
            </ul>
          </div>
          <div className="w-[169px] h-[220px] flex flex-col gap-y-[10px] ml-[61px]">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'rgba(35,37,54,1) font-[600] text-[16px]'
                  : 'rgba(35,37,54,1) text-[16px]'
              }
              to="/service">
              Service
            </NavLink>
            <h1 className="text-[14px] font-[500] text-[rgba(35,37,54,1)]">
              Technical support
            </h1>
            <h1 className="text-[14px] font-[500] text-[rgba(35,37,54,1)]">
              Testing
            </h1>
            <h1 className="text-[14px] font-[500] text-[rgba(35,37,54,1)]">
              Development
            </h1>
            <h1 className="text-[14px] font-[500] text-[rgba(35,37,54,1)]">
              AWS/Azure
            </h1>
            <h1 className="text-[14px] font-[500] text-[rgba(35,37,54,1)]">
              Consulting
            </h1>
            <h1 className="text-[14px] font-[500] text-[rgba(35,37,54,1)]">
              Information Technology
            </h1>
          </div>
          <div className="w-[97px] h-[184px] flex flex-col gap-y-[10px] ml-[58px]">
            <h1 className="text-[14px] font-[500] text-[rgba(35,37,54,1)]">
              Resourses
            </h1>
            <h1 className="text-[14px] font-[500] text-[rgba(35,37,54,1)]">
              About Us
            </h1>
            <h1 className="text-[14px] font-[500] text-[rgba(35,37,54,1)]">
              Testimonial
            </h1>
            <h1 className="text-[14px] font-[500] text-[rgba(35,37,54,1)]">
              Privacy Policy
            </h1>
            <h1 className="text-[14px] font-[500] text-[rgba(35,37,54,1)]">
              Terms of use
            </h1>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'rgba(35,37,54,1) font-[600] text-[16px]'
                  : 'rgba(35,37,54,1) text-[16px]'
              }
              to="/blog">
              Blog
            </NavLink>
          </div>
        </div>
      </div>
      <div className="w-[1600px] h-[80px] bg-[rgba(255,230,210,1)] mt-[64px] flex items-center justify-between">
        <div className="w-[285px] h-[25px] flex items-center gap-[42px] ml-[160px]">
          <img className="w-[120px]" src={Logo} alt="" />
          <h1 className="text-[16px] font-[500] text-[rgba(0,0,0,1)]">
            ©2021 Finsweet
          </h1>
        </div>
        <div className="w-[144px] h-[16px] mr-[160px] flex gap-[26px] items-center">
          <img src={FaceBook} alt="FaceBook" />
          <img src={Twitter} alt="Twitter" />
          <img src={Instagram} alt="Instagram" />
          <img src={Linkedin} alt="Linkedin" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
