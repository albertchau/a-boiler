import React from "react"
import { onlyUpdateForKeys } from "recompose"
import { DatePicker, Select, TextInput, TextArea } from "box-react-ui-core"
// import { TextArea } from "box-react-ui-form-elements"
import { SingleSelectField } from "box-react-ui-overlays"

const HItemLayout = { labelCol: { span: 3 }, wrapperCol: { span: 18 } }
export const HFItem = ({ children, ...passProps }) => {
  return (
    <div {...HItemLayout} {...passProps}>
      {children}
    </div>
  )
}

export class TestTextInput extends React.Component {
  render() {
    const props = this.props
    return (
      <TextInput
        {...props}
        label={props.label}
        name={'soemtin'}
        isRequired
        inputRef={ref => this.ref = ref}
      />
    )
  }
}


const purifyInput = onlyUpdateForKeys([ 'value' ])
export const PTextInput = purifyInput(props => {
  return <TextInput {...props} label={props.label} type='text' isRequired/>
})

export const PTextArea = purifyInput(props => {
  return <TextArea type='text' {...props} label={props.label} isRequired/>
})

const purifySelect = onlyUpdateForKeys([ 'value', 'children' ])
export const PSelect = purifySelect(props => {
  return <Select {...props}/>
})

export const PDatePicker = purifyInput(({ value, ...passProps }) => {
  return <DatePicker value={value} {...passProps} name='date'/>
})

const purifySelectedValue = onlyUpdateForKeys([ 'selectedValue', 'options' ])
export const PSingleSelectField = purifySelectedValue(({ selectedValue, options, allowEmpty = true, ...rest }) => {
  const ops = allowEmpty ? [ { displayText: '', value: '' }, ...options ] : options
  const value = allowEmpty ? (selectedValue || '') : selectedValue
  return (
    <SingleSelectField
      options={ops}
      selectedValue={value}
      {...rest}
    />
  )
})
