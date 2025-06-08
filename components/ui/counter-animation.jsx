"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export function CounterAnimation({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    let startTimestamp;
    let animationFrameId;
    const duration = 2000; // 2 seconds

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * target);

      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    if (isInView) {
      animationFrameId = requestAnimationFrame(step);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [target, isInView]);

  return (
    <span ref={nodeRef}>
      {count}
      {suffix}
    </span>
  );
}
