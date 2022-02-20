import React from 'react';
import { FaUser } from 'react-icons/fa';

function Content() {
  return (
    <section className="">
      <div className="ml-[70px] mr-[54px] text-bold flex items-center bg-gradient-to-b from-white/40 to-transparent bg-purple-600 shadow-md rounded-[24px]">
        <div className="mt-16 gap-8 flex items-start">
          <FaUser size={'22px'} className="mt-[12px]" />
          <p className="text-26">
            10245
            <p className="text-13 font-semibold mb0[36px]">Customer</p>
          </p>
        </div>
      </div>
    </section>
  );
}
export default Content;
