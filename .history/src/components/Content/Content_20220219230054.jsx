import React from 'react';
import { FaUser } from 'react-icons/fa';

function Content() {
  return (
    <section className="">
      <div className="ml-[70px] mr-[54px] text-bold bg-purple-600">
        <div className="mt-16 flex items-start">
          <FaUser size={'22px'} className="mt-[12px]" />
          <p className="text-26">10245</p>
        </div>
      </div>
    </section>
  );
}
export default Content;
