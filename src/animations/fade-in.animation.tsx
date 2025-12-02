import * as motion from "motion/react-client";
import React, { PropsWithChildren } from "react";

type FadeInProps = PropsWithChildren<{
    duration?: number;
}>

export default function FadeIn({ children, duration = 0.6 }: FadeInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: duration }}
        >
            {children}
        </motion.div>
    );
}