import React from "react"
import PropTypes from "prop-types"
import { Button, ButtonGroup, Label, Tooltip } from "box-react-ui-core"
import classNames from 'classnames'

const RadioGroup = ({
                      className = '',
                      error = '',
                      label,
                      hideOptionalLabelText,
                      isRequired,
                      ...rest
                    }) => {

  const classes = classNames(className, 'text-area-container', {
    'show-error': !!error,
  })

  return (
    <div className={ classes }>
      <Label text={ label } showOptionalText={ !hideOptionalLabelText && !isRequired }><div/></Label>
      <_RadioGroup {...rest} />
    </div>
  )
}

const _RadioGroup = (props) => {
  return (
    <ButtonGroup>
      {props.options.map(op =>
        <Button
          key={op.value}
          isSelected={props.selectedValue === op.value}
          onClick={event => {
            event.preventDefault()
            event.stopPropagation()
            props.onChange(op.value)
          }}
        >
          {op.displayText}
        </Button>
      )}
    </ButtonGroup>
  )
}

RadioGroup.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
  selectedValue: PropTypes.string
}

export { RadioGroup, _RadioGroup }
