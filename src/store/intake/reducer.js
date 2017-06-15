import { initialState } from './selectors'
import {
  ADD_MACHINE_DETAIL, COPY_MACHINE_DETAIL, DELETE_MACHINE_DETAIL, EDIT_MACHINE_DETAIL,
  FIELD_EDIT, REQUEST_PAGE_LOAD_ERROR, REQUEST_PAGE_LOAD_SUCCESS, SUBMIT_INTAKE_FORM
} from "./actions"
import moment from "moment"

const repeatKeyInArray = (arr, repeatKey, nextKey) => {
  const foundKey = arr.indexOf(repeatKey) + 1
  return [].concat(arr.slice(0, foundKey), nextKey, arr.slice(foundKey))
}

const addMachineToIntake = (intakeValues) => {
  const { machineCounter, machineKeys = [], machineDetails = {} } = intakeValues
  const incrementedCounter = machineCounter + 1
  return {
    ...intakeValues,
    machineCounter: incrementedCounter,
    machineKeys: machineKeys.concat(incrementedCounter),
    machineDetails: {
      ...machineDetails,
      [incrementedCounter]: {}
    }
  }
}

const editMachineDetail = (intakeValues, { machineKey, field, value }) => {
  const { machineDetails } = intakeValues
  return {
    ...intakeValues,
    machineDetails: {
      ...machineDetails,
      [machineKey]: {
        ...machineDetails[ machineKey ],
        [field]: value
      }
    }
  }
}

const deleteMachineDetail = (intakeValues, { machineKey }) => {
  const { machineKeys = [], machineDetails = {} } = intakeValues
  const newMachineKeys = machineKeys.filter(k => k !== machineKey)
  return {
    ...intakeValues,
    machineKeys: newMachineKeys,
    machineDetails: newMachineKeys
      .reduce((acc, curr) => Object.assign(acc, { [curr]: machineDetails[ curr ] }), {})
  }
}

const copyMachineDetail = (intakeValues, { machineKey }) => {
  const { machineCounter, machineKeys = [], machineDetails = {} } = intakeValues
  const incrementedCounter = machineCounter + 1
  return {
    ...intakeValues,
    machineCounter: incrementedCounter,
    machineKeys: repeatKeyInArray(machineKeys, machineKey, incrementedCounter),
    machineDetails: {
      ...machineDetails,
      [incrementedCounter]: {
        ...machineDetails[ machineKey ],
        id: undefined
      }
    }
  }
}

const convertDateFields = ({projectGoLive, requestBy, ...machineDetail}) => {
  return {
    projectGoLive: projectGoLive && moment(projectGoLive),
    requestBy: requestBy && moment(requestBy),
    ...machineDetail
  }
}

const populateIntakeValues = ({ machineDetails, ...vals }) => {
  const machineCounter = machineDetails.length
  const machineKeys = new Array(machineCounter).fill(0).map((_, i) => i)
  return {
    machineCounter,
    machineKeys: machineKeys,
    machineDetails: machineKeys
      .reduce((acc, curr) => Object.assign(acc, { [curr]: convertDateFields(machineDetails[ curr ]) }), {}),
    ...vals,
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FIELD_EDIT:
      const { field, value } = action
      let intakeValues = { ...state.intakeValues, ...{ [field]: value } }
      return { ...state, intakeValues }
    case 'ignore':
      return state
    case ADD_MACHINE_DETAIL:
      return { ...state, intakeValues: addMachineToIntake(state.intakeValues) }
    case COPY_MACHINE_DETAIL:
      return { ...state, intakeValues: copyMachineDetail(state.intakeValues, action) }
    case EDIT_MACHINE_DETAIL:
      return { ...state, intakeValues: editMachineDetail(state.intakeValues, action) }
    case DELETE_MACHINE_DETAIL:
      return { ...state, intakeValues: deleteMachineDetail(state.intakeValues, action) }
    case REQUEST_PAGE_LOAD_ERROR:
      return { ...state, error: action.error }
    case REQUEST_PAGE_LOAD_SUCCESS:
      return { ...state, intakeValues: populateIntakeValues(action.values), intakeForm: action.form }
    case SUBMIT_INTAKE_FORM:
      console.log(action.intakeValues)
      return state
  }
  return state
}
