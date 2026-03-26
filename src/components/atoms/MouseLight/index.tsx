'use client';

import type React from 'react';
import { useEffect, useRef } from 'react';

function MouseLight(): React.ReactElement {
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect((): (() => void) => {
    let frameId: null | number = null;
    let lastX = -9999;
    let lastY = -9999;
    let active = window.innerWidth >= 1024;

    const updateLightPosition = (): void => {
      if (lightRef.current) {
        const lightSize = 400;
        lightRef.current.style.transform = `translate(${lastX - lightSize}px, ${lastY - lightSize}px)`;
      }

      frameId = null;
    };

    const queuePositionUpdate = (x: number, y: number): void => {
      lastX = x;
      lastY = y;

      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(updateLightPosition);
    };

    const handlePointerMove = (event: PointerEvent): void => {
      if (!active) return;
      queuePositionUpdate(event.clientX, event.clientY);
    };

    const handleResize = (): void => {
      active = window.innerWidth >= 1024;
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('resize', handleResize);

    return (): void => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 hidden mix-blend-screen lg:block"
      ref={lightRef}
      style={{
        transform: 'translate(-9999px, -9999px)',
        willChange: 'transform',
      }}
    >
      <div className="size-200 rounded-full bg-(--mouse-light-gradient) opacity-80 blur-[55px]" />
    </div>
  );
}

export default MouseLight;
