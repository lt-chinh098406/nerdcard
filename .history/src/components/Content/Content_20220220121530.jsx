import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FaUser } from 'react-icons/fa';
import { BsFillCreditCardFill } from 'react-icons/bs';
import checkIconMobile from '../../assets/mobile/checkpoint.svg';

function Content() {
  const customer = useSpring({ customers: 10245, from: { customers: 0 } });
  return (
    <section className="">
      <div className="ml-[70px] mr-[54px] text-bold flex flex-col items-center bg-gradient-to-b from-white/40 to-transparent   shadow-md rounded-[24px]">
        <div className="mt-16 gap-8 flex items-start">
          <FaUser size={'22px'} className="mt-[12px]" />
          <div className="text-26">
            <animated.div>
              {customer.customers.to((val) => Math.floor(val))}
            </animated.div>
            <p className="text-13 font-semibold mb-[36px]">Customer</p>
          </div>
        </div>
        <div className="flex items-start mb-16 gap-8">
          <BsFillCreditCardFill size={'22px'} className="mt-[12px]" />
          <div className="text-26 ">
            12045
            <p className="text-13 font-semibold">Cards Issued</p>
          </div>
        </div>
      </div>
      <div className="text-13 flex flex-col w-[100%}, mt-[90px] font-semibold">
        <div className="check-content">
          <img src={checkIconMobile} alt="" />
          <p>Card reports sent to your phone every weeks</p>
        </div>
        <div className="check-content">
          <img src={checkIconMobile} alt="" />
          <p>No external fees</p>
        </div>
        <div className="check-content">
          <img src={checkIconMobile} alt="" />
          <p>Set spending limits and restrictions</p>
        </div>
      </div>
    </section>
  );
}
export default Content;
