import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import React from 'react'

const ResponsiveSideBar = ({ open }) => {
    return (
        <>
            {
                <AnimatePresence mode='wait'>
                    {
                        open && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}

                                className="fixed top-20 right-0 w-full h-screen z-20"
                            >
                                <div className='text-lg font-semibold uppercase bg-primary text-white p-10 m-6 rounded-md'>
                                    <ul className='flex flex-col justify-center  items-center gap-5'>
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Services</li>
                                        <li>Contact</li>
                                    </ul>
                                </div>
                            </motion.div>
                        )
                    }

                </AnimatePresence>}
        </>)
}

export default ResponsiveSideBar
