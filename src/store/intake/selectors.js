import faker from "faker"
import { createSelector } from "reselect"

export const initialState = {
  intakeValues: {
    title: undefined,
    projectName: undefined,
    priority: undefined,
    actionType: undefined,
    description: undefined,
    machineCounter: 0,
    machineKeys: [],
    machineDetails: {}
  },
}

export const getIntakeValues = (state = initialState) => {
  return state.intake ? state.intake.intakeValues : state.intakeValues
}

const priorityOps = new Array(6).fill(0).map((_, n) => ({ value: faker.random.uuid(), label: faker.lorem.words(2) }))
const actionTypeOps = new Array(6).fill(0).map((_, n) => ({ value: faker.random.uuid(), label: faker.lorem.words(2) }))
export const getIntakeForm = () => {
  return {
    priorityOps,
    actionTypeOps,
  }
}

export const getMachineDetailForm = () => {
  return {
    dataCenterOps: actionTypeOps,
    platformOps: actionTypeOps,
    skuOps: actionTypeOps,
    environmentOps: actionTypeOps,
    requestTypeOps: actionTypeOps
  }
}
