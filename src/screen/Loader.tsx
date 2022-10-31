import { motion } from 'framer-motion'


export const Loader = () => {
    return (
        <div className='h-screen w-screen  bg-slate-100 flex justify-center items-center'>
           
            <motion.div 
                className='rounded-full w-[4rem] h-[4rem] bg-orange-500 '
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                }}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1
                }}
            >ㅤ
            </motion.div>

             <motion.div 
                className='rounded-full w-[4rem] h-[4rem] bg-orange-500 border-2'
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                }}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1.1
                }}
            >ㅤ
             ㅤ
            </motion.div>

            <motion.div
                className='rounded-full w-[4rem] h-[4rem] bg-orange-500 border-2'
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                }}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1.2
                }}
            >ㅤ
                ㅤ
            </motion.div>
        </div>
    )
}
