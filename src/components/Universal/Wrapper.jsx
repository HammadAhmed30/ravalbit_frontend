import React from 'react'

export default function Wrapper({className, children}) {
  return (
    <div className={`px-2 md:px-4 w-full max-w-[1280px] mx-auto ${className || ""}`}>
        {children}
    </div>
  )
}
