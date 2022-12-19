import { useEffect, useRef, useState } from 'react';

function Piecedataset() {
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
    <iframe src="https://datastudio.google.com/embed/reporting/438bee6c-dd10-45ab-b9b5-ef5de916c81b/page/TTt9C" width={windowDimensions.winWidth} height={windowDimensions.winHeight} frameborder="0" allowfullscreen></iframe>
  )
}

export default Piecedataset