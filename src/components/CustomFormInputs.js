import React from "react"
import moment from 'moment'
import { DatePicker, Form, Input, Select } from "antd"
import { onlyUpdateForKeys } from "recompose"
const FormItem = Form.Item

const HItemLayout = { labelCol: { span: 3 }, wrapperCol: { span: 18 } }
export const HFItem = ({ children, ...passProps }) => {
  return (
    <FormItem {...HItemLayout} {...passProps}>
      {children}
    </FormItem>
  )
}

const purifyInput = onlyUpdateForKeys([ 'value' ])
export const PInput = purifyInput(props => {
  return <Input {...props}/>
})

const purifySelect = onlyUpdateForKeys([ 'value', 'children' ])
export const PSelect = purifySelect(props => {
  return <Select {...props}/>
})

export const PDatePicker = purifyInput(({ value, ...passProps }) => {
  const val = (typeof value === "string") ? moment(value) : value
  return <DatePicker value={val} {...passProps}/>
})
