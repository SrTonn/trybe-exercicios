import React from 'react'
import PropTypes from 'prop-types'

class Pokemon extends React.Component {
  render() {
    const name = this.props.name
    const type = this.props.type
    const weight = this.props.weight
    const image = this.props.image
    console.log(image)

    return(
      <div className='pokemon-card'>
        <p>
          {name}
          <br />
          {type}
          <br />
          Average weight: {weight}
        </p>
          <img src={image} alt={`pokemon ${name}`} />
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Pokemon