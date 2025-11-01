import React from 'react';
import Decoration from '.././assets/icons/Shapes.svg';
import Icon from '.././assets/icons/Icon.svg';
import Img from '.././assets/imgs/Image.svg';
import Logos from '../assets/imgs/Logos.svg';
import Logos1 from '../assets/imgs/Logos1.svg';
import Logos2 from '../assets/imgs/Logos2.svg';
import Logos3 from '../assets/imgs/Logos3.svg';
import Logos4 from '../assets/imgs/Logos4.svg';
import Logos5 from '../assets/imgs/Logos5.svg';
const Home = () => {
  return (
    <main className="w-[1600px] mt-[80px]">
      <section className="w-[1600px] h-[898px] bg-[rgba(35,37,54,1)] pt-[80px]">
        <div className="w-[1280px] h-[632px] container mx-auto flex gap-[93px]">
          <div className="mt-[56px] w-[624px] h-[420px]">
            <div className="w-[24px] h-[24px] bg-[rgba(255,255,255,0.06)]"></div>
            <h1 className="text-[56px] font-[600] text-white">
              Transform Your Idea Into Reality with Finsweet
            </h1>
            <h1 className="text-[16px] font-[400] text-[rgba(255,255,255,1)] mt-[24px] w-[480px]">
              The entire Finsweet team knows what's good with Webflow and you
              can too with 1 week and a good attitude.
            </h1>
            <div className="w-[219px] h-[64px] bg-[rgba(68,76,252,1)] mt-[32px] relative  cursor-pointer">
              <img className="w-[28px]" src={Decoration} alt="" />
              <div className="w-[155px] h-[24px] absolute left-[32px] top-[20px] flex items-center gap-[16px] cursor-pointer">
                <button className="text-[16px] font-[500] text-[rgba(255,255,255,1)] cursor-pointer">
                  Request Quote
                </button>
                <img className="w-[20px]" src={Icon} alt="" />
              </div>
            </div>
          </div>
          <div>
            <img src={Img} alt="" />
          </div>
        </div>
        <div className="w-[1280px] h-[106px] container mx-auto mt-[32px] flex items-center justify-between">
          <img src={Logos} alt="" />
          <img src={Logos1} alt="" />
          <img src={Logos2} alt="" />
          <img src={Logos3} alt="" />
          <img src={Logos4} alt="" />
          <img src={Logos5} alt="" />
        </div>
      </section>
    </main>
  );
};

export default Home;
