import React from "react"
import PropTypes from "prop-types"
import { Col, Form, Input, Select } from "antd"
import { onlyUpdateForKeys } from "recompose"
const FormItem = Form.Item
const { Option } = Select


const HItemLayout = { labelCol: { span: 3 }, wrapperCol: { span: 18 } }
const HItemDyno = n => ({ labelCol: { span: n }, wrapperCol: { span: (24 - 2 * n) } })
export const HFItem = ({ labelWidth, children, ...passProps }) => {
  return (
    <FormItem {...passProps} {...(labelWidth ? HItemDyno(labelWidth) : HItemLayout)}>
      {children}
    </FormItem>
  )
}

const VItemLayout = { xs: 3 }
const VItemDyno = n => ({ xs: n })
export const VFItem = ({ label, children, span, ...passProps }) => {
  return (
    <Col {...passProps} {...(span ? VItemDyno(span) : VItemLayout)}>
      <FormItem label={label} style={{ lineHeight: '25px', marginBottom: '5px' }}>
        {children}
      </FormItem>
    </Col>
  )
}

const purifyInput = onlyUpdateForKeys([ 'value' ])
export const PInput = purifyInput((props) => {
  const { value, onChange, name, ...passProps } = props
  return (
    <Input
      value={value || ''}
      onChange={event => onChange(name, event && event.target.value)}
      {...passProps}
    />
  )
})

PInput.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  name: PropTypes.string
}

const purifySelect = onlyUpdateForKeys(['value', 'options'])
export const PSelect = purifySelect((props) => {
  const { value, onSelect, name, options, ...passProps } = props
  return (
    <Select
      value={value}
      style={{ width: 120 }}
      onSelect={value => onSelect(name, value)}
      {...passProps}
    >
      {options.map(op => (<Option key={op.value}>{op.label}</Option>))}
    </Select>
  )
})

PSelect.propTypes = {
  value: PropTypes.any,
  onSelect: PropTypes.func,
  name: PropTypes.string,
  options: PropTypes.array,
}
