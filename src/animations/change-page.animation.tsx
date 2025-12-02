import * as motion from "motion/react-client";
import React, { PropsWithChildren } from "react";

type ChangePageProps = PropsWithChildren<{
    duration?: number;
}>

export default function ChangePage({ children, duration = 0.3 }: ChangePageProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: duration }}
        >
            {children}
        </motion.div>
    );
}