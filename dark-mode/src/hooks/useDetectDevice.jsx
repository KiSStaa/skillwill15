import { useEffect, useState } from "react"

const breakPoints = 576
const detectDevice = () =>{
    return window.innerWidth <= breakPoints ? "Light-Mode" : "Dark-Mode"
}
const useDetectDevice = () => {
    const [device, setDevice] = useState(() => detectDevice())

    useEffect(() => {
        const handleResize = () => {
            setDevice(detectDevice())
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    },[])

    return device
}


export default useDetectDevice