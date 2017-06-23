import React from "react"
import { TextInput } from "box-react-ui-form-elements"

const InputNumber = (props) => {
  return (
    <TextInput {...props} type='number'/>
  )
}

InputNumber.propTypes = {}

export { InputNumber }
