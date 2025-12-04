import { useInView } from "motion/react";
import * as motion from "motion/react-client";
import React, { PropsWithChildren, useRef } from "react";
import GetScrollDirection from "../utils/get-scroll-direction.utils";

type OnScrollProps = PropsWithChildren<{
    className?: string;
    duration?: number;
}>

export default function OnScroll({ children, className, duration = 0.6 }: OnScrollProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50px" });
    const scrollDirection = GetScrollDirection();

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: scrollDirection === "up" ? 20 : -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: duration }}
            className={className}
        >
            {children}
        </motion.div>
    );
}