import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { compose, onlyUpdateForKeys, withContext } from "recompose"
import { getMachineDetailForm } from "../selectors"
import MachineRow from "../components/MachineRow"

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
