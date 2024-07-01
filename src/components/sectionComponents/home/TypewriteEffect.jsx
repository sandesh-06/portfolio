import React from 'react'
import { useTypewriter } from "react-simple-typewriter";
const TypewriteEffect = ({words = [], className=""}) => {
    const [typeEffect] = useTypewriter({
        words: words,
        loop: {},
        typeSpeed: 150,
        deleteSpeed: 70,
      });
  return (
    <p className={`${className}`}>{typeEffect}</p>
  )
}

export default TypewriteEffect