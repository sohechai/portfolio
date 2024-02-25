import { useRef, useState } from 'react'
import { motion } from 'framer-motion';

export default function Framer({children}) {
    const ref = useRef(null);
    const [position, setPosition] = useState({x:0,y:0});

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const {height, width, left, top} = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2)
        const middleY = clientY - (top + height / 2)
		setPosition({x: middleX * 0.1, y: middleY * 0.1})
    }

    const reset = () => {
        setPosition({x:0, y:0})
    }

    const { x, y } = position;
    return (
        <motion.div
            style={{
				position: "relative",
				color: "white",
				width: "84px",
				padding: "16px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{x, y}}
            transition={{type: "spring", stiffness: 150, damping: 15, mass: 0.1}}
        >
            {children}
        </motion.div>
    )
}