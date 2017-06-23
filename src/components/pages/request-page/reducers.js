import { initialState } from './selectors'
import * as actions from "./actions"
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

const convertDateFields = ({ projectGoLive, requestBy, ...machineDetail }) => {
  return {
    projectGoLive: projectGoLive && moment(projectGoLive).toDate(),
    requestBy: requestBy && moment(requestBy).toDate(),
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

const requestPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FIELD_EDIT:
      const { field, value } = action
      let intakeValues = { ...state.intakeValues, ...{ [field]: value } }
      return { ...state, intakeValues }
    case actions.ADD_MACHINE_DETAIL:
      return { ...state, intakeValues: addMachineToIntake(state.intakeValues) }
    case actions.COPY_MACHINE_DETAIL:
      return { ...state, intakeValues: copyMachineDetail(state.intakeValues, action) }
    case actions.EDIT_MACHINE_DETAIL:
      return { ...state, intakeValues: editMachineDetail(state.intakeValues, action) }
    case actions.DELETE_MACHINE_DETAIL:
      return { ...state, intakeValues: deleteMachineDetail(state.intakeValues, action) }
    case actions.REQUEST_PAGE_LOAD_ERROR:
      return { ...state, error: action.error }
    case actions.REQUEST_PAGE_LOAD_SUCCESS:
      return { ...state, intakeForm: action.form, intakeValues: populateIntakeValues(action.values) }
    case actions.POST_REQUEST_FORM_REQUEST:
      return { ...state, isSubmitting: true }
    case actions.POST_REQUEST_FORM_SUCCESS:
      return { ...state, isSubmitting: false, success: action.success }
    case actions.POST_REQUEST_FORM_ERROR:
      return { ...state, isSubmitting: false, failure: action.failure }
    case actions.SUBMIT_INTAKE_FORM:
      console.log(action.intakeValues)
      return state
  }
  return state
}


export { requestPageReducer }
