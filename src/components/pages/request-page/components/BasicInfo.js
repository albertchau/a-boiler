import React from "react"
import PropTypes from 'prop-types'
import { PTextInput } from "../components/CustomFormInputs"
import { RadioGroup } from "components/core/RadioGroup/RadioGroup"
import { PTextArea } from "./CustomFormInputs"

const BasicInfo = ({ intakeForm, title, priority, requestType, projectName, description, onChange }) => {
  return (
    <div className="cap-general-info-container">
      <div className="cap-general-info-wrapper">
        <h3>
          General Request Info
        </h3>
        <PTextInput
          value={title || ''}
          onChange={({ target }) => onChange(target.name, target.value)}
          name='title'
          label={'Title'}
        />
        <RadioGroup
          hideOptionalLabelText
          label={'Priority'}
          selectedValue={priority}
          onChange={value => onChange('priority', value)}
          options={intakeForm.priorityOps.map(op => ({ value: op.id, displayText: op.label }))}
        />
        <RadioGroup
          hideOptionalLabelText
          label={'Request Type'}
          selectedValue={requestType}
          onChange={value => onChange('requestType', value)}
          options={intakeForm.requestTypeOps.map(op => ({ value: op.id, displayText: op.label }))}
        />
        <PTextInput
          value={projectName || ''}
          onChange={({ target }) => onChange(target.name, target.value)}
          name='projectName'
          label={'Project Name'}
        />
        <PTextArea
          type='textarea'
          rows={3}
          value={description || ''}
          onChange={({ target }) => onChange(target.name, target.value)}
          name='description'
          label={'Description'}
        />
      </div>
    </div>
  )
}

BasicInfo.propTypes = {
  title: PropTypes.string,
  priority: PropTypes.string,
  requestType: PropTypes.string,
  projectName: PropTypes.string,
  description: PropTypes.string,
  onChange: PropTypes.func,

}

export { BasicInfo }
