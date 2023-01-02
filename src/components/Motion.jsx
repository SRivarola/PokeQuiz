import { motion } from 'framer-motion'

const pageTransition = {
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    }
}

const Motion = ({children}) => {
  return (
    <motion.div
        className="page"
        initial='out'
        animate='in'
        exit='out'
        variants={pageTransition}
        >
            {children}
    </motion.div>
  )
}
export default Motion