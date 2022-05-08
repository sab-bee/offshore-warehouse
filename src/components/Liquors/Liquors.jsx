
import { useLiquors } from '../../hooks/useLiquors'
import Liquor from '../Liquor/Liquor'
import { motion } from 'framer-motion'
import Spinner from '../Spinner/Spinner'

const Liquors = () => {
  const { liquors, loading } = useLiquors(6)

  return loading ? (
    <Spinner></Spinner>
  ) : (
    <motion.div
      className='mt-12 overflow-hidden w-4/5 mx-auto'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {liquors.map((liquor, index) => {
        if (index > 2) {
          index -= 1
        }
        return (
          <motion.div
            key={liquor._id}
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Liquor liquor={liquor}></Liquor>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default Liquors
