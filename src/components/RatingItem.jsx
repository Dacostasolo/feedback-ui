import PropTypes from 'prop-types'

function RatingItem({ type, id, nameValue, value, changeHandler, selected }) {
  return (
    <input
      type={type}
      id={id}
      name={nameValue}
      value={value.toString()}
      onChange={changeHandler}
      checked={selected === value}
    />
  )
}

RatingItem.defaultProps = {
  type: 'radio',
  nameValue: 'rating',
}

RatingItem.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  nameValue: PropTypes.string,
  value: PropTypes.number,
  changeHandler: PropTypes.func,
}

export default RatingItem
