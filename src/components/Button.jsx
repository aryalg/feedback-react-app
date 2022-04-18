


import PropTypes from 'prop-types'

const Button = ({ children, isDisabled, type, version }) => {
    return (
        <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    type: 'button',
    version: 'primary',
    isDisabled: false
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool
}



export default Button