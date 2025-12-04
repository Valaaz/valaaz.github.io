import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

export default function GetScrollDirection() {
    const { scrollY } = useScroll()
    const [scrollDirection, setScrollDirection] = useState("up")

    useMotionValueEvent(scrollY, "change", (current) => {
        const prev = scrollY.getPrevious();
        if (prev === undefined) return;

        const diff = current - prev;
        setScrollDirection(diff > 0 ? "down" : "up");
    });

    return scrollDirection;
}