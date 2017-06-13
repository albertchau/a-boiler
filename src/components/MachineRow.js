import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { compose, onlyUpdateForKeys, withContext } from "recompose"
import { Col, Icon, InputNumber, Select, Row } from "antd"
import { getMachineDetailForm } from "../store/intake/selectors"
import { PDatePicker, PInput, PSelect } from "./CustomFormInputs"
const { Option } = Select

const selectWidth = { width: '100px' }
const MachineRow = (props) => {
  const { machine, onEdit, onCopy, onDelete, machineDetailForm } = props
  return (
    <Row gutter={12} type='flex' className="cap-machine-row" justify="space-between">
      <Col>
        <PSelect
          placeholder="Action Type"
          value={machine.actionType}
          style={selectWidth}
          onSelect={value => onEdit('actionType', value)}
        >
          {machineDetailForm.actionTypeOps.map(op => (<Option key={op.value}>{op.label}</Option>))}
        </PSelect>
      </Col>
      <Col span={3}>
        <PInput
          placeholder="Service Name"
          value={machine.serviceName || ''}
          onChange={({ target }) => onEdit(target.name, target.value)}
          name='serviceName'
        />
      </Col>
      <Col span={3}>
        <PInput
          placeholder="Naming Pattern"
          value={machine.namingPattern || ''}
          onChange={({ target }) => onEdit(target.name, target.value)}
          name='namingPattern'
        />
      </Col>
      <Col>
        <PDatePicker
          placeholder="Project Live Date"
          value={machine.projectGoLive}
          onChange={(date) => onEdit('projectGoLive', date)}
        />
      </Col>
      <Col>
        <PDatePicker
          placeholder="Request By"
          value={machine.requestBy}
          onChange={(date) => onEdit('requestBy', date)}
        />
      </Col>
      <Col>
        <PSelect
          placeholder="Environment"
          value={machine.environment}
          style={selectWidth}
          onSelect={value => onEdit('environment', value)}
        >
          {machineDetailForm.environmentOps.map(op => (<Option key={op.value}>{op.label}</Option>))}
        </PSelect>
      </Col>
      <Col>
        <PSelect
          placeholder="Platform"
          value={machine.platform}
          style={selectWidth}
          onSelect={value => onEdit('platform', value)}
        >
          {machineDetailForm.platformOps.map(op => (<Option key={op.value}>{op.label}</Option>))}
        </PSelect>
      </Col>
      <Col>
        <PSelect
          placeholder="Data Center"
          value={machine.dataCenter}
          style={selectWidth}
          onSelect={value => onEdit('dataCenter', value)}
        >
          {machineDetailForm.dataCenterOps.map(op => (<Option key={op.value}>{op.label}</Option>))}
        </PSelect>
      </Col>
      <Col>
        <PSelect
          placeholder="SKU"
          value={machine.sku}
          style={selectWidth}
          onSelect={value => onEdit('environment', value)}
        >
          {machineDetailForm.skuOps.map(op => (<Option key={op.value}>{op.label}</Option>))}
        </PSelect>
      </Col>
      <Col>
        <InputNumber
          placeholder="Quantity"
          value={machine.quantity}
          onChange={value => onEdit('quantity', value)}
        />
      </Col>
      <Col>
        <Icon style={iconStyle} onClick={onCopy} type="copy"/>
      </Col>
      <Col>
        <Icon style={iconStyle} onClick={onDelete} type="delete"/>
      </Col>
    </Row>
  )
}

const iconStyle = {
  cursor: 'pointer',
  position: 'relative',
  top: '4px',
  fontSize: '18px',
  color: '#999',
  transition: 'all .3s',
}

MachineRow.propTypes = {
  machine: PropTypes.shape({
    actionType: PropTypes.string,
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
    actionTypeOps: PropTypes.array,
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
  withContext(
    { size: PropTypes.string },
    () => ({ size: 'large' })
  ),
  updateHOC
)

export default enhance(MachineRow)
