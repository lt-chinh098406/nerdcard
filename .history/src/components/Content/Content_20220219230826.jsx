import React from 'react';
import { FaUser } from 'react-icons/fa';
import { BsFillCreditCardFill } from 'react-icons/bs';

function Content() {
  return (
    <section className="">
      <div className="ml-[70px] mr-[54px] text-bold flex flex-col items-center bg-gradient-to-b from-white/40 to-transparent   shadow-md rounded-[24px]">
        <div className="mt-16 gap-8 flex items-start">
          <FaUser size={'22px'} className="mt-[12px]" />
          <p className="text-26">
            10245
            <p className="text-13 font-semibold mb-[36px]">Customer</p>
          </p>
        </div>
        <div className="flex items-start mb-16">
          <BsFillCreditCardFill size={'22px'} className="mt-[12px]" />
          <p className="text-26">
            12045
            <p className="text-13 font-semibold">CArds Issued</p>
          </p>
        </div>
      </div>
    </section>
  );
}
export default Content;
