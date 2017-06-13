import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { getIntakeForm, getIntakeValues } from "../store/intake/selectors"
import {
  addMachineDetail,
  onBaseFieldEdit,
  onIntakeSubmit,
  onMachineCopy,
  onMachineDelete,
  onMachineEdit
} from "../store/intake/actions"
import PropTypes from "prop-types"
import MachineRow from "./MachineRow"
import { Button, Col, Input, Layout, Row, Select } from "antd"
import { HFItem } from "./CustomFormInputs"
import './RequestPage.scss'

const { Content } = Layout
const { Option } = Select

const RequestPage = (props) => {
  const { intakeValues, intakeForm, onBaseFieldEdit, addMachineDetail, onIntakeSubmit, onMachineDelete, onMachineEdit, onMachineCopy } = props
  return (
    <Content>
      <Row type='flex' className={'cap-request-page-container'}>
        <Col offset={2} span={20}>
          <Row type='flex' style={{ marginBottom: '20px'}}>
            <h2>
              General Request Details
            </h2>
          </Row>
          <HFItem label={'Title'}>
            <Input
              value={intakeValues.title || ''}
              onChange={({ target }) => onBaseFieldEdit(target.name, target.value)}
              name='title'
            />
          </HFItem>
          <HFItem label={'Project Name'}>
            <Input
              value={intakeValues.projectName || ''}
              onChange={({ target }) => onBaseFieldEdit(target.name, target.value)}
              name='projectName'
            />
          </HFItem>
          <Row>
            <Col span={9}>
              <HFItem label={'Priority'} labelWidth={8}>
                <Select
                  value={intakeValues.priority}
                  style={{ width: 120 }}
                  onSelect={value => onBaseFieldEdit('priority', value)}
                >
                  {intakeForm.priorityOps.map(op => (<Option key={op.value}>{op.label}</Option>))}
                </Select>
              </HFItem>
            </Col>
            <Col span={15}>
              <HFItem label={'Action Type'}>
                <Select
                  value={intakeValues.actionType}
                  style={{ width: 120 }}
                  onSelect={value => onBaseFieldEdit('actionType', value)}
                >
                  {intakeForm.actionTypeOps.map(op => <Option key={op.value}>{op.label}</Option>)}
                </Select>
              </HFItem>
            </Col>
          </Row>
          <HFItem label={'Description'}>
            <Input
              type='textarea'
              rows={3}
              value={intakeValues.description || ''}
              onChange={({ target }) => onBaseFieldEdit(target.name, target.value)}
              name='description'
            />
          </HFItem>
          <Row type='flex'>
            <h2>
              Machine Request Details
            </h2>
          </Row>
          <Col offset={1}>
            {intakeValues.machineKeys.map(key => (
              <MachineRow
                key={key}
                machine={intakeValues.machineDetails[ key ]}
                onDelete={onMachineDelete.bind(null, key)}
                onCopy={onMachineCopy.bind(null, key)}
                onEdit={onMachineEdit.bind(null, key)}
              />)
            )}
          </Col>
          <Button onClick={addMachineDetail}>Add Machine Detail</Button>
        </Col>
      </Row>
      <Button onClick={() => onIntakeSubmit(intakeValues)}> Submit Request </Button>
    </Content>
  )
}

const mapStateToProps = (state) => {
  return {
    intakeValues: getIntakeValues(state),
    intakeForm: getIntakeForm(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addMachineDetail,
    onMachineDelete,
    onMachineEdit,
    onMachineCopy,
    onIntakeSubmit,
    onBaseFieldEdit
  }, dispatch)
}

RequestPage.propTypes = {
  intakeValues: PropTypes.shape({
    machineDetails: PropTypes.shape({
      requestType: PropTypes.object,
      serviceName: PropTypes.string,
      namingPattern: PropTypes.string,
      projectGoLive: PropTypes.string,
      requestBy: PropTypes.string,
      environment: PropTypes.object,
      platform: PropTypes.object,
      sku: PropTypes.object,
      quantity: PropTypes.number,
      onCopy: PropTypes.func,
      onDelete: PropTypes.func,
      onEdit: PropTypes.func,
    }),
    title: PropTypes.string,
    projectName: PropTypes.string,
    priority: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    priorityOps: PropTypes.array,
    actionType: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    actionTypeOps: PropTypes.array,
    description: PropTypes.string,
  }),
  intakeForm: PropTypes.shape({
    priorityOps: PropTypes.array,
    actionTypeOps: PropTypes.array
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestPage)
