import React, { Component, PropTypes } from 'react'
import Row from 'react-bootstrap'
import TextInput from '../../components'

/**
 * Text input that can switch between text field and label
 * by using attribute `editing`
 */

class EditableText extends Component {
    constructor () {
        super()
        this.state = {
            focus: false
        }
    }

    handleClick () {
        this.setState({ focus: true })
    }
    handleBlur () {
        this.setState({ focus: false })
    }
    render () {
        const {
          children = '',
          editable = false,
          editing = false,
          emptyReadOnlyText = '',
          placeholder = '',
          title,
          ...props
        } = this.props

        /* eslint-disable react/jsx-no-bind */
        if (editable && editing) {
            return (
              <TextInput
                className='editable'
                {...props}
                autoFocus={this.state.focus}
                onBlur={::this.handleBlur}
                placeholder={placeholder}
                ref={(ref) => {
                    this.textInput = ref
                }}
                value={children}
              />
            )
        }
        /* eslint-enable react/jsx-no-bind */
        const emptyText = editable ? placeholder : emptyReadOnlyText
        const text = children || emptyText
        return (
          <Row
            onClick={::this.handleClick} title={title}>
              {text}
          </Row>
        )
    }
}

EditableText.propTypes = {
    /**
     * String value for this text field
     */
    children: PropTypes.string,
    /**
     * Toggle whether the text field is in editable or not. Default is 'false'
     */
    editable: PropTypes.bool,
    /**
     * Toggle whether the text field is in editing mode or not.
     * Default is 'false'
     */
    editing: PropTypes.bool,
    /**
     * Placeholder
     */
    placeholder: PropTypes.string,
    /**
     * String to display if it is editable and children is
     * empty and there is not placeholder
     */
    emptyReadOnlyText: PropTypes.string,
    /**
     * Tooltip
     */
    title: PropTypes.string
}

export default EditableText
