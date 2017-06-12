import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { compose, onlyUpdateForKeys } from "recompose"
import { Button, Col, Input, Row } from "antd"
import { getMachineDetailForm } from "../store/intake/selectors"
import { VFItem } from "./CustomFormInputs"

const MachineRow = (props) => {
  const { machine, onEdit, onCopy, onDelete, machineDetailForm } = props
  return (
    <Row gutter={16} type='flex'>
      <VFItem span={3} label={'Testing'}>
        <Input
          value={machine.serviceName || ''}
          onChange={({ target }) => onEdit(target.name, target.value)}
          name='serviceName'
        />
      </VFItem>
      <VFItem span={4} label={'Longer Testing'}>
        <Input
          value={machine.namingPattern || ''}
          onChange={({ target }) => onEdit(target.name, target.value)}
          name='namingPattern'
        />
      </VFItem>
      <Col>
        <Button onClick={onCopy}>
          C
        </Button>
      </Col>
      <Col>
        <Button onClick={onDelete}>
          D
        </Button>
      </Col>
    </Row>
  )
}

MachineRow.propTypes = {
  machine: PropTypes.shape({
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
    onEdit: PropTypes.func
  }),

  // these are from connected
  machineDetailForm: PropTypes.shape({
    requestTypeOptions: PropTypes.array,
    environmentOptions: PropTypes.array,
    platformOptions: PropTypes.array,
    skuOptions: PropTypes.array,
  })
}

const updateHOC = onlyUpdateForKeys([ 'machine' ])
const mapStateToProps = state => ({ machineDetailForm: getMachineDetailForm(state) })
const enhance = compose(
  connect(mapStateToProps),
  updateHOC
)

export default enhance(MachineRow)
