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
import { Button, Col, Layout, Menu, Row, Select } from "antd"
import { HFItem, PInput, PSelect } from "./CustomFormInputs"
import "./RequestPage.scss"

const { Header, Content, Footer } = Layout
const { Option } = Select

const RequestPage = (props) => {
  const { intakeValues, intakeForm, onBaseFieldEdit, addMachineDetail, onIntakeSubmit, onMachineDelete, onMachineEdit, onMachineCopy } = props
  return (
    <Layout className="layout">
      <Header>
        <div className="logo"/>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[ '2' ]}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Row type='flex' className="cap-request-page-container" style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <Col offset={2} span={20}>
            <Row type='flex'>
              <h2>
                General Request Details
              </h2>
            </Row>
            <HFItem label={'Title'}>
              <PInput
                value={intakeValues.title || ''}
                onChange={({ target }) => onBaseFieldEdit(target.name, target.value)}
                name='title'
              />
            </HFItem>
            <HFItem label={'Project Name'}>
              <PInput
                value={intakeValues.projectName || ''}
                onChange={({ target }) => onBaseFieldEdit(target.name, target.value)}
                name='projectName'
              />
            </HFItem>
            <Row>
              <Col span={9}>
                <HFItem label={'Priority'} labelWidth={8}>
                  <PSelect
                    value={intakeValues.priority}
                    style={{ width: 120 }}
                    onSelect={value => onBaseFieldEdit('priority', value)}
                  >
                    {intakeForm.priorityOps.map(op => (<Option key={op.value}>{op.label}</Option>))}
                  </PSelect>
                </HFItem>
              </Col>
              <Col span={15}>
                <HFItem label={'Action Type'}>
                  <PSelect
                    value={intakeValues.actionType}
                    style={{ width: 120 }}
                    onSelect={value => onBaseFieldEdit('actionType', value)}
                  >
                    {intakeForm.actionTypeOps.map(op => <Option key={op.value}>{op.label}</Option>)}
                  </PSelect>
                </HFItem>
              </Col>
            </Row>
            <HFItem label={'Description'}>
              <PInput
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
            <Row>
              <Col className="cap-machine-row-container">
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
            </Row>
            <Row>
              <Col offset={3} span={18}>
                <Button
                  onClick={addMachineDetail}
                  style={{ width: '100%' }}
                  type="dashed"
                  icon="plus"
                >
                  Add Machine Detail
                </Button>
              </Col>
            </Row>
            <Col offset={3} span={18}>
              <Row justify="end" type="flex">
                <Button onClick={() => onIntakeSubmit(intakeValues)} className="cap-submit-btn" type="primary"> Submit
                  Request </Button>
              </Row>
            </Col>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2016 Created by Ant UED
      </Footer>
    </Layout>
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
