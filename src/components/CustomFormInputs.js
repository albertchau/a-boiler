import React from "react"
import { Col, Form } from "antd"
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

const VItemLayout = { xs: 3 }
const VItemDyno = n => ({ xs: n })
export const VFItem = ({ label, children, span, ...passProps }) => {
  return (
    <Col {...passProps} {...(span ? VItemDyno(span) : VItemLayout)}>
      <FormItem label={label} style={{lineHeight: '25px', marginBottom: '5px'}}>
        {children}
      </FormItem>
    </Col>
  )
}
