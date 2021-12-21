import React from "react"
import PropTypes from 'prop-types'

/**
 * Renders list of File Systems
 */
const FileSystems = ({ items }) => {
    return (
        <ul>
            {items.map(item => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    )
}

FileSystems.propTypes = {
    items: PropTypes.array
}

FileSystems.defaultProps = {
    items: []
}

export default FileSystems
