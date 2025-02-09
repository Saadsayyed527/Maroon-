import React from 'react'
import ServicesBackward from './ServicesBackward';
import Heading from './Heading';
import { useNavigate } from 'react-router-dom';

function ServicesHeading({text, variant}) {
    const navigate = useNavigate();

    const handleBackward = () => {
        navigate(-1);
    }
  return (
    <>
      {/* Wrapper for the sticky header */}
      <div className="sticky top-0 bg-white z-10 leading-[0px]">
        /
        <div className="my-[23px] flex items-center leading-[0]">
          {/* Left Side Icon */}
          <div className="ml-6">
            <button onClick={handleBackward}>
              <ServicesBackward />
            </button>
          </div>

          {/* Center Heading */}
          <div className="flex-1 text-center mr-6">
            <Heading text={text} variant={variant} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesHeading