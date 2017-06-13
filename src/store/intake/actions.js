// // actions
//
// export const EDIT_FIELD = 'EDIT_FIELD'
//
// export const editField = fieldId => (field) => {
//   return {
//     type: EDIT_FIELD,
//     field,
//     fieldId
//   }
// }
//
// export const DELETE_FIELD = 'DELETE_FIELD'
//

export const ADD_MACHINE_DETAIL = 'ADD_MACHINE_DETAIL'
export const DELETE_MACHINE_DETAIL = 'DELETE_MACHINE_DETAIL'
export const EDIT_MACHINE_DETAIL = 'EDIT_MACHINE_DETAIL'
export const COPY_MACHINE_DETAIL = 'COPY_MACHINE_DETAIL'
export const FIELD_EDIT = 'FIELD_EDIT'
export const SUBMIT_INTAKE_FORM = 'SUBMIT_INTAKE_FORM'

export const addMachineDetail = () => {
  return {
    type: ADD_MACHINE_DETAIL
  }
}

export const onBaseFieldEdit = (field, value) => {
  return {
    type: FIELD_EDIT,
    field,
    value
  }
}

export const onMachineEdit = (machineKey, field, value) => {
  return {
    type: EDIT_MACHINE_DETAIL,
    value,
    field,
    machineKey
  }
}

export const onMachineDelete = (machineKey) => {
  return {
    type: DELETE_MACHINE_DETAIL,
    machineKey
  }
}

export const onMachineCopy = (machineKey) => {
  return {
    type: COPY_MACHINE_DETAIL,
    machineKey
  }
}

export const onIntakeSubmit = (intakeValues) => {
  return {
    type: SUBMIT_INTAKE_FORM,
    intakeValues
  }
}

const requestIntakeForm = () => {

  return {}
}
