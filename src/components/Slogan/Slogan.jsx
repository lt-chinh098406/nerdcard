import React from 'react';
import Cards from '../../assets/desktop/isocard.svg';

function Slogan() {
  return (
    <section className="text-36 my-14 font-extrabold">
      <div className="text-center">
        <p>
          Earn <span className="text-purple-300">More</span>
        </p>
        <p className=""> Pay Less</p>
        <button className="button">Start</button>
      </div>
      <div className="mt-[69px] ">
        <img src={Cards} alt="card" />
      </div>
    </section>
  );
}
export default Slogan;
