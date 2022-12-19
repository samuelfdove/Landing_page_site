import { useEffect, useRef, useState } from 'react';


function Userdataset() {
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
    <iframe src="https://datastudio.google.com/embed/reporting/36f0034e-5c67-485a-be5a-7e1288315fec/page/Xv89C" width={windowDimensions.winWidth} height={Math.max(windowDimensions.winHeight)} frameborder="0" allowfullscreen></iframe>
  )
}

export default Userdataset