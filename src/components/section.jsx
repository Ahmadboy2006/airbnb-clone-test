import React from 'react'
import Slider from './slider';
import { sliderNames } from '../data/data';

function Section() {
  return (
    <div>
      {sliderNames.map((item, index) => (
        <Slider key={index} title={item} />
      ))}
    </div>
  )
}

export default Section;
