import React from "react"
import { Col, DatePicker, Form, Input, Select } from "antd"
import { onlyUpdateForKeys } from "recompose"
const FormItem = Form.Item

const HItemLayout = { labelCol: { span: 3 }, wrapperCol: { span: 18 } }
const HItemDyno = n => ({ labelCol: { span: n }, wrapperCol: { span: (24 - 2 * n) } })
export const HFItem = ({ labelWidth, children, ...passProps }) => {
  return (
    <FormItem {...passProps} {...(labelWidth ? HItemDyno(labelWidth) : HItemLayout)}>
      {children}
    </FormItem>
  )
}

const purifyInput = onlyUpdateForKeys([ 'value' ])
export const PInput = purifyInput(props => {
  console.log('input pure')
  return <Input {...props}/>
})

const purifySelect = onlyUpdateForKeys([ 'value', 'options' ])
export const PSelect = purifySelect(props => {
  console.log('select pure')
  return <Select {...props}/>
})

export const PDatePicker = purifyInput(props => {
  console.log('datePicker pure')
  return <DatePicker {...props}/>
})
