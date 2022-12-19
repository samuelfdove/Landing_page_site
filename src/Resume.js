import { useEffect, useRef, useState } from 'react';

function Resume() {
  //TODO: restructure this to resize for each screen

  const [windowDimensions,detectResize] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });
  const detectSize = () => {
    detectResize({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }
  useEffect(() => {
    window.addEventListener('resize',detectSize)

    return () => {
      window.removeEventListener('resize',detectSize)
    }
  }, [windowDimensions])

  return(
    <iframe src="https://drive.google.com/file/d/1Bxi6g5Bl8fyLWFcpvivkWMn8Fly72EdT/preview" width={windowDimensions.winWidth} height={windowDimensions.winHeight} allow="autoplay"></iframe>
  )
}

export default Resume