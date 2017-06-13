import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { compose, onlyUpdateForKeys } from "recompose"
import { Button, Col, DatePicker, Icon, Input, InputNumber, Row, Select } from "antd"
import { getMachineDetailForm } from "../store/intake/selectors"
import { VFItem } from "./CustomFormInputs"
const { Option } = Select

const MachineRow = (props) => {
  const { machine, onEdit, onCopy, onDelete, machineDetailForm } = props
  return (
    <Row gutter={16} type='flex' className={'cap-machine-row'}>
      <VFItem span={2} label={'Request Type'}>
        <Select
          value={machine.requestType}
          style={{ width: 120 }}
          onSelect={value => onEdit('requestType', value)}
        >
          {machineDetailForm.requestTypeOps.map(op => (<Option key={op.value}>{op.label}</Option>))}
        </Select>
      </VFItem>
      <VFItem span={3} label={'Service Name'}>
        <Input
          value={machine.serviceName || ''}
          onChange={({ target }) => onEdit(target.name, target.value)}
          name='serviceName'
        />
      </VFItem>
      <VFItem span={2} label={'Naming Pattern'}>
        <Input
          value={machine.namingPattern || ''}
          onChange={({ target }) => onEdit(target.name, target.value)}
          name='namingPattern'
        />
      </VFItem>
      <VFItem span={2} label={'Project Live Date'}>
        <DatePicker
          value={machine.projectGoLive}
          placeholder=''
          onChange={(date) => onEdit('projectGoLive', date)}
        />
      </VFItem>
      <VFItem span={2} label={'Request By'}>
        <DatePicker
          value={machine.requestBy}
          placeholder=''
          onChange={(date) => onEdit('requestBy', date)}
        />
      </VFItem>
      <VFItem span={2} label={'Environment'}>
        <Select
          value={machine.environment}
          style={{ width: 110 }}
          onSelect={value => onEdit('environment', value)}
        >
          {machineDetailForm.environmentOps.map(op => (<Option key={op.value}>{op.label}</Option>))}
        </Select>
      </VFItem>
      <VFItem span={2} label={'Platform'}>
        <Select
          value={machine.platform}
          style={{ width: 110 }}
          onSelect={value => onEdit('platform', value)}
        >
          {machineDetailForm.platformOps.map(op => (<Option key={op.value}>{op.label}</Option>))}
        </Select>
      </VFItem>
      <VFItem span={2} label={'Data Center'}>
        <Select
          value={machine.dataCenter}
          style={{ width: 110 }}
          onSelect={value => onEdit('dataCenter', value)}
        >
          {machineDetailForm.dataCenterOps.map(op => (<Option key={op.value}>{op.label}</Option>))}
        </Select>
      </VFItem>
      <VFItem span={2} label={'SKU'}>
        <Select
          value={machine.sku}
          style={{ width: 110 }}
          onSelect={value => onEdit('environment', value)}
        >
          {machineDetailForm.skuOps.map(op => (<Option key={op.value}>{op.label}</Option>))}
        </Select>
      </VFItem>
      <VFItem span={2} label={'Quantity'}>
        <InputNumber
          value={machine.quantity || ''}
          onChange={({ target }) => onEdit('quantity', target.value)}
        />
      </VFItem>
      <Col>
        <span>
          <Icon style={iconStyle} onClick={onCopy} type="copy"/>
          <span className="ant-divider"/>
          <Icon style={iconStyle} onClick={onDelete} type="delete"/>
        </span>
      </Col>
    </Row>
  )
}

const iconStyle = {
  marginTop: '33px',
  cursor: 'pointer',
  position: 'relative',
  top: '4px',
  fontSize: '18px',
  color: '#999',
  transition: 'all .3s',
}

MachineRow.propTypes = {
  machine: PropTypes.shape({
    requestType: PropTypes.string,
    serviceName: PropTypes.string,
    namingPattern: PropTypes.string,
    projectGoLive: PropTypes.object,
    requestBy: PropTypes.object,
    environment: PropTypes.string,
    dataCenter: PropTypes.string,
    platform: PropTypes.string,
    sku: PropTypes.string,
    quantity: PropTypes.number,
    onCopy: PropTypes.func,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func
  }),

  // these are from connected
  machineDetailForm: PropTypes.shape({
    requestTypeOps: PropTypes.array,
    environmentOps: PropTypes.array,
    dataCenterOps: PropTypes.array,
    platformOps: PropTypes.array,
    skuOps: PropTypes.array,
  })
}

const updateHOC = onlyUpdateForKeys([ 'machine' ])
const mapStateToProps = state => ({ machineDetailForm: getMachineDetailForm(state) })
const enhance = compose(
  connect(mapStateToProps),
  updateHOC
)

export default enhance(MachineRow)
