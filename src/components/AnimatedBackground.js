import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  background: #0a192f;
`;

const CodeElement = styled.div`
  position: absolute;
  color: rgba(100, 255, 218, 0.1);
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  white-space: nowrap;
  user-select: none;
  transition: transform 0.3s ease;
  
  &:hover {
    color: rgba(100, 255, 218, 0.2);
    transform: scale(1.1);
  }
`;

const AnimatedBackground = () => {
  const containerRef = useRef(null);
  const elements = useRef([]);

  const codeSnippets = [
    'function() {',
    'const react = new Framework();',
    'class Component {',
    'async await fetch()',
    'import { useState }',
    'npm install',
    'git commit -m',
    'docker build',
    'python def',
    'console.log()',
    'try { catch }',
    'while(true)',
    'if (condition)',
    'return new Promise',
    'export default',
    'const [state, setState]',
    'useEffect(() => {',
    'styled-components',
    'framer-motion',
    'React.memo()',
    'useCallback()',
    'useMemo()',
    'TypeScript',
    'interface Props {',
    'type User = {',
    'const router = useRouter()',
    'next.js',
    'tailwindcss',
    'redux toolkit',
    'graphql',
    'mongodb',
    'express.js',
    'node.js',
  ];

  useEffect(() => {
    const container = containerRef.current;
    const createElement = () => {
      const element = document.createElement('div');
      element.className = CodeElement.styledComponentId;
      element.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      element.style.left = `${Math.random() * 100}%`;
      element.style.top = `${Math.random() * 100}%`;
      element.style.opacity = '0';
      element.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
      container.appendChild(element);
      elements.current.push(element);
      return element;
    };

    // Create initial elements
    for (let i = 0; i < 30; i++) {
      createElement();
    }

    // Animation function
    const animate = () => {
      elements.current.forEach((element, index) => {
        const speed = 0.3 + Math.random() * 0.4;
        const currentTop = parseFloat(element.style.top);
        
        if (currentTop > 100) {
          element.style.top = '-10%';
          element.style.left = `${Math.random() * 100}%`;
          element.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
          element.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
        } else {
          element.style.top = `${currentTop + speed}%`;
        }
        
        // Enhanced fade in/out effect
        if (currentTop < 20) {
          element.style.opacity = (currentTop / 20).toString();
        } else if (currentTop > 80) {
          element.style.opacity = ((100 - currentTop) / 20).toString();
        } else {
          element.style.opacity = '1';
        }

        // Add subtle horizontal movement
        const horizontalOffset = Math.sin(Date.now() / 2000 + index) * 2;
        element.style.transform = `translateX(${horizontalOffset}px) rotate(${Math.random() * 10 - 5}deg)`;
      });
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      elements.current.forEach(element => element.remove());
      elements.current = [];
    };
  }, [codeSnippets]);

  return <BackgroundContainer ref={containerRef} />;
};

export default AnimatedBackground; 