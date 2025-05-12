import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const CursorDot = styled.div`
  width: 8px;
  height: 8px;
  background: #000;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
`;

const CursorRing = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #000;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
`;

const CustomCursor = () => {
  const dotRef = useRef({ x: 0, y: 0 });
  const ringRef = useRef({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const requestRef = useRef();

  const animate = () => {
    // Calculate the distance between current position and target (mouse) position
    const dotDiffX = mouseRef.current.x - dotRef.current.x;
    const dotDiffY = mouseRef.current.y - dotRef.current.y;
    
    // Add a fraction of the distance to the current position (dot follows faster)
    dotRef.current.x += dotDiffX * 0.3;
    dotRef.current.y += dotDiffY * 0.3;
    
    // Calculate the distance for the ring (follows slower)
    const ringDiffX = mouseRef.current.x - ringRef.current.x;
    const ringDiffY = mouseRef.current.y - ringRef.current.y;
    
    // Add a smaller fraction of the distance (ring follows slower)
    ringRef.current.x += ringDiffX * 0.15;
    ringRef.current.y += ringDiffY * 0.15;
    
    // Update the state with the new positions
    setDotPosition({ x: dotRef.current.x, y: dotRef.current.y });
    setRingPosition({ x: ringRef.current.x, y: ringRef.current.y });
    
    // Continue the animation loop
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const updatePosition = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updatePosition);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Start the animation loop
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.querySelectorAll('a, button').forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      <CursorDot
        style={{
          left: `${dotPosition.x}px`,
          top: `${dotPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.2 : 1})`
        }}
      />
      <CursorRing
        style={{
          left: `${ringPosition.x}px`,
          top: `${ringPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.2 : 1})`
        }}
      />
    </>
  );
};

export default CustomCursor;