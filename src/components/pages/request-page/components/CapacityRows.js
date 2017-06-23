import React from "react"
import PropTypes from 'prop-types'
import MachineRow from "../containers/MachineRowContainer"
import { Button } from "box-react-ui-core"
import { IconAdd } from "box-react-ui-icons"

const CapacityRows = ({ machineKeys, machineDetails, onMachineCopy, onMachineDelete, onMachineEdit, addMachineDetail }) => {
  return (
    <div className="cap-machine-requests-container">
      <div className="cap-machine-title">
        <h3>
          Capacity Request
        </h3>
        <div>
          <Button onClick={addMachineDetail} type="button">
            <IconAdd color="black" height={11} width={11} className="add-machine-icon-btn"/>
            &nbsp;&nbsp;Add Machine Detail
          </Button>
        </div>
      </div>
      <div>
        <div className="cap-machine-row-container">
          {machineKeys.map(key => (
            <MachineRow
              key={key}
              machine={machineDetails[ key ]}
              onDelete={onMachineDelete.bind(null, key)}
              onCopy={onMachineCopy.bind(null, key)}
              onEdit={onMachineEdit.bind(null, key)}
            />)
          )}
        </div>
      </div>
    </div>
  )
}

CapacityRows.propTypes = {
  machineKeys: PropTypes.array,
  machineDetails: PropTypes.object,
  onMachineCopy: PropTypes.func,
  onMachineDelete: PropTypes.func,
  onMachineEdit: PropTypes.func,
  addMachineDetail: PropTypes.func,
}

export { CapacityRows }
