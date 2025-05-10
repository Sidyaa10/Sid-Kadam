import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';

const ScrollContainer = styled.div`
  position: relative;
  width: 100%;
`;

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const container = document.querySelector('.scroll-container');
    
    gsap.to(container, {
      y: () => -(container.scrollHeight - window.innerHeight),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <ScrollContainer className="scroll-container">
      {children}
    </ScrollContainer>
  );
};

export default SmoothScroll; 