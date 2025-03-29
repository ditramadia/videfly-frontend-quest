"use client";

import React, { useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

const AnimatedNumber = ({ value }: { value: number }) => {
  const spring = useSpring(value, { mass: 5, stiffness: 140, damping: 100 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{display}</motion.span>;
}

export default AnimatedNumber