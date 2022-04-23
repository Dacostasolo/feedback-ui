import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
function Card({ children, reverse }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ transitionProperty: 'transform', transitionDelay: '200ms' }}
      >
        <div className={`card ${reverse && 'reverse'}`}>{children}</div>
      </motion.div>
    </AnimatePresence>
  )
}

Card.defaultProps = {
  reverse: false,
}

Card.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node.isRequired,
}
export default Card
