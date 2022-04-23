import PropTypes from 'prop-types'

function Header({ text, bgColor, color }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: color,
  }
  return (
    <header style={headerStyle}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: ' Feedback UI',
  bgColor: 'rgba(0,0,0,0.9)',
  color: '#ff6a95',
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
}
export default Header
