import React from "react"
import PropTypes from "prop-types"
import { PDatePicker, PSingleSelectField, PTextInput } from "../components/CustomFormInputs"
import { IconReports, IconTrash } from "box-react-ui-icons"
import { Button } from "box-react-ui-core"

const toDisplayOptions = option => ({ displayText: option.label, value: option.id })
const selectWidth = { width: '100px' }
const handleIconClick = onClick => event => {
  event.preventDefault()
  event.stopPropagation()
  onClick()
}
const MachineRow = (props) => {
  const { machine, onEdit, onCopy, onDelete, machineDetailForm } = props
  return (
    <div className="in-machine-row-container">
      <PSingleSelectField
        placeholder="Action Type"
        selectedValue={machine.actionType}
        style={selectWidth}
        onChange={({ value }) => onEdit('actionType', value)}
        options={machineDetailForm.actionTypeOps.map(toDisplayOptions)}
      />
      <PTextInput
        label=""
        hideLabel
        placeholder="Service Name"
        value={machine.serviceName || ''}
        onChange={({ target }) => onEdit(target.name, target.value)}
        name='serviceName'
      />
      <PTextInput
        label=""
        hideLabel
        className="naming-pattern-wrapper"
        placeholder="Naming Pattern"
        value={machine.namingPattern || ''}
        onChange={({ target }) => onEdit(target.name, target.value)}
        name='namingPattern'
      />
      <PDatePicker
        label=""
        hideOptionalLabel
        placeholder="Project Live Date"
        value={machine.projectGoLive}
        onChange={(date) => onEdit('projectGoLive', date)}
      />
      <PDatePicker
        label=""
        hideOptionalLabel
        placeholder="Needed By"
        value={machine.requestBy}
        onChange={(date) => onEdit('requestBy', date)}
      />
      <PSingleSelectField
        placeholder="Environment"
        selectedValue={machine.environment}
        style={selectWidth}
        onChange={({ value }) => onEdit('environment', value)}
        options={machineDetailForm.environmentOps.map(toDisplayOptions)}
      />
      <PSingleSelectField
        placeholder="Platform"
        selectedValue={machine.platform}
        style={selectWidth}
        options={machineDetailForm.platformOps.map(toDisplayOptions)}
        onChange={({ value }) => onEdit('platform', value)}
      />
      <PSingleSelectField
        placeholder="Data Center"
        selectedValue={machine.dataCenter}
        style={selectWidth}
        onChange={({ value }) => onEdit('dataCenter', value)}
        options={machineDetailForm.dataCenterOps.map(toDisplayOptions)}
      />
      <PSingleSelectField
        placeholder="SKU"
        onChange={({ value }) => onEdit('sku', value)}
        selectedValue={ machine.sku}
        options={machineDetailForm.skuOps.map(toDisplayOptions)}
      />
      <PTextInput
        hideLabel
        label=""
        placeholder="Quantity"
        value={machine.quantity}
        onChange={({ value }) => onEdit('quantity', value)}
        name='quality'
        className="quantity-wrapper"
        type='number'
      />
      <div className="in-machine-btns">
        <Button className="in-machine-copy-btn" onClick={handleIconClick(onCopy)} title="copy">
          <IconReports style={iconStyle} height={12} width={12}/>
        </Button>
        <Button className="in-machine-delete-btn" onClick={handleIconClick(onDelete)} title="delete">
          <IconTrash style={iconStyle} height={12} width={12}/>
        </Button>
      </div>
    </div>
  )
}

const iconStyle = {
  cursor: 'pointer',
  position: 'relative',
  top: '4px',
  fontSize: '18px',
  Divor: '#999',
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

export default MachineRow
