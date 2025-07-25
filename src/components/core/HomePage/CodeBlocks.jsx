import React from 'react'
import CTAButton from "../HomePage/Button"
import HighLightText from './HighLightText'
import { HiArrowRight } from "react-icons/hi";
import { TypeAnimation } from 'react-type-animation';

const CodeBlocks = ({position, heading, subheading, ctabtn1, ctabtn2, code, bgGradient, codeColor}) => {
  return (
    <div className={`flex md:flex-row ${position} my-2 gap-20 flex-col`}>

      {/* Section - 1 */}
        <div className="md:w-[50%] flex flex-col gap-8  md:pr-10 ">
            {heading}
            <div className="text-md font-bold text-gray-500 md:text-start items-center ">
                {subheading}
            </div>

            <div className="flex md:gap-12 mt-3 text-center justify-center gap-[5vw]">
                <CTAButton color={ctabtn1.color} linkto={ctabtn1.linkto}>
                    <div className="flex gap-2 items-center">
                        {ctabtn1.text}
                        <HiArrowRight/>
                    </div>
                </CTAButton>
                <CTAButton color={ctabtn2.color} linkto={ctabtn2.linkto}>
                    {ctabtn2.text}
                </CTAButton>
            </div>
        </div>

        {/* Section 2 */}
      <div className={`h-fit drop_cyan_shadow code-border flex flex-row py-3 text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative w-[100%] lg:w-[470px]`}>
        {bgGradient}
        {/* Indexing */}
        <div className="text-center flex flex-col w-[10%] select-none text-gray-500 font-inter font-bold ">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
        </div>

        {/* Codes */}
        <div
          className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-1 text-start`}
        >
          <TypeAnimation
            sequence={[code, 10000, ""]}
            cursor={true}
            repeat={Infinity}
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>


    </div>
  )
}

export default CodeBlocks
