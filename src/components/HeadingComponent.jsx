 
import { useState } from 'react'

export default function HeadingComponent ({text} ) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <h1 
      className=" bg-black text-white text-5xl md:text-7xl font-extrabold tracking-tight text-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`header-element  inline-block transition-all duration-300 ${
            isHovered 
              ? 'transform hover:scale-110 hover:text-purple-400' 
              : ''
          }`}
          style={{ transitionDelay: `${index * 50}ms` }}
        >
          {char}
        </span>
      ))}
    </h1>
    // <h1 className='header-element'>{text}</h1>
  )
}

