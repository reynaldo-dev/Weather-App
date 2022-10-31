
import { motion } from 'framer-motion'
import { TiWeatherPartlySunny} from 'react-icons/ti'


interface IProps {
    isShowing : boolean,
    setIsShowing: React.Dispatch<React.SetStateAction<boolean>>
}

export const Suggestion = ({ isShowing, setIsShowing } : IProps) => {
    const handleClick = ()=>{
        setIsShowing(!isShowing)
    }

    return (
        <motion.div
            className='flex justify-around m-1 p-2 w-full rounded-md'
            onClick={handleClick}
            whileHover={{ backgroundColor:'#f3f4f6', borderRadius:'10px', cursor:'pointer'}}
            transition={{ ease:'linear' }}
        >

            <span className='text-gray-600'>San Salvador, SV</span>
            <span className='text-gray-600'>30 C</span>
            <span className='text-gray-600'><TiWeatherPartlySunny /></span>

        </motion.div>
    )
}




























