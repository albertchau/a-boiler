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
import { HFItem, PInput, PSelect } from "./CustomFormInputs"
import "./RequestPage.scss"

const { Content } = Layout
const { Option } = Select

const RequestPage = (props) => {
  const { intakeValues, intakeForm, onBaseFieldEdit, addMachineDetail, onIntakeSubmit, onMachineDelete, onMachineEdit, onMachineCopy } = props
  return (
    <Content>
      <Row type='flex' className={'cap-request-page-container'}>
        <Col offset={2} span={20}>
          <Row type='flex' style={{ marginBottom: '20px' }}>
            <h2>
              General Request Details
            </h2>
          </Row>
          <HFItem label={'Title'}>
            <PInput
              value={intakeValues.title || ''}
              onChange={onBaseFieldEdit}
              name='title'
            />
          </HFItem>
          <HFItem label={'Project Name'}>
            <PInput
              value={intakeValues.projectName || ''}
              onChange={onBaseFieldEdit}
              name="projectName"
            />
          </HFItem>
          <Row>
            <Col span={9}>
              <HFItem label={'Priority'} labelWidth={8}>
                <PSelect
                  value={intakeValues.priority}
                  onSelect={onBaseFieldEdit}
                  name="priority"
                  options={intakeForm.priorityOps}
                  style={{ width: 120 }}
                />
              </HFItem>
            </Col>
            <Col span={15}>
              <HFItem label={'Action Type'}>
                <PSelect
                  value={intakeValues.actionType}
                  style={{ width: 120 }}
                  name="actionType"
                  onSelect={onBaseFieldEdit}
                  options={intakeForm.actionTypeOps}
                />
              </HFItem>
            </Col>
          </Row>
          <HFItem label={'Description'}>
            <PInput
              type="textarea"
              rows={3}
              value={intakeValues.description || ''}
              onChange={onBaseFieldEdit}
              name="description"
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
