import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { getIntakeForm, getIntakeValues, getIsSubmitting } from "../selectors"
import {
  addMachineDetail,
  onBaseFieldEdit,
  postSubmitRequestForm,
  onMachineCopy,
  onMachineDelete,
  onMachineEdit
} from "../actions"
import "../styles/RequestPage.scss"
import { Button, PrimaryButton } from "box-react-ui-core"
import { BasicInfo } from "../components/BasicInfo"
import { CapacityRows } from "../components/CapacityRows"

const RequestPage = (props) => {
  const { intakeValues, intakeForm, onBaseFieldEdit, addMachineDetail, postSubmitRequestForm, onMachineDelete, onMachineEdit, onMachineCopy } = props
  return (
    <div className="cap-request-page-container">
      <BasicInfo
        intakeForm={intakeForm}
        title={intakeValues.title}
        priority={intakeValues.priority}
        requestType={intakeValues.requestType}
        projectName={intakeValues.projectName}
        description={intakeValues.description}
        onChange={onBaseFieldEdit}
        isSubmitting={props.isSubmitting}
      />
      <hr className="hr-splitter"/>
      <CapacityRows
        machineDetails={intakeValues.machineDetails}
        addMachineDetail={addMachineDetail}
        machineKeys={intakeValues.machineKeys}
        onMachineDelete={onMachineDelete}
        onMachineCopy={onMachineCopy}
        onMachineEdit={onMachineEdit}
      />
      <div className="bottom-submit-btns">
        <Button onClick={() => postSubmitRequestForm(intakeValues)} className="cap-submit-btn" type="button" isDisabled={props.isSubmitting}>
          Cancel
        </Button>
        <PrimaryButton onClick={() => postSubmitRequestForm(intakeValues)} className="cap-submit-btn" type="button" isLoading={props.isSubmitting} isDisabled={props.isSubmitting}>
          Submit Request
        </PrimaryButton>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    intakeValues: getIntakeValues(state),
    intakeForm: getIntakeForm(state),
    isSubmitting: getIsSubmitting(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addMachineDetail,
    onMachineDelete,
    onMachineEdit,
    onMachineCopy,
    postSubmitRequestForm,
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
    requestType: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    requestTypeOps: PropTypes.array,
    description: PropTypes.string,
  }),
  intakeForm: PropTypes.shape({
    priorityOps: PropTypes.array,
    requestTypeOps: PropTypes.array
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestPage)
