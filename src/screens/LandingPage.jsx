import React, { useState } from 'react';
import colors from '../config/colors';
import { AiOutlineSearch } from 'react-icons/ai';
import Lottie from 'lottie-react';
import codingAnimation from '../assets/animOrange.json';

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  setTimeout(() => {
    setIsLoaded(true);
  }, 600);

  return (
    <div class='landing-root' id='home'>
      <div class='main-container'>
        <div class={isLoaded ? 'text-container fade active' : 'text-container fade'}>
          <div>
            <h1 class='main-text'>
              Hi! I am
              <p style={{ margin: 0, padding: 0, color: colors.fandagoPink }}>
                Matthieu Denis <span style={{ color: colors.white }}>.</span>
              </p>
            </h1>
            <h3 class='description'>
              I am a student passionate about <b>Web</b> and <b>Game Development</b>. <br /> Currently, I am in my last year of studies at{' '}
              <a href='https://www.ece.fr/en/program/engineering-degree-bac4-big-data-analytics-major/' class='description-link-ece' target='_blank'>
                ECE paris engineering school
              </a>{' '}
              where I am learning about data science and machine learning.
            </h3>
          </div>
          <div class='buttons-container'>
            <a href='#my-work' class='see-work-btn'>
              See my work
            </a>
            <div class='hire-me-btn'>
              <AiOutlineSearch style={{ marginRight: '0.5rem', width: 25, height: 25 }} /> Hire me
            </div>
          </div>
        </div>
        <div></div>
        <div>
          <Lottie animationData={codingAnimation} class='landing-page-svg fade-2' />;
        </div>
      </div>
    </div>
  );
};

export default LandingPage;