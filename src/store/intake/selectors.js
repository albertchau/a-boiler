import faker from "faker"
import { createSelector } from "reselect"

export const initialState = {
  intakeValues: {
    title: undefined,
    projectName: undefined,
    priority: undefined,
    requestType: undefined,
    description: undefined,
    machineCounter: 0,
    machineKeys: [],
    machineDetails: {}
  },
  intakeForm: {
    priorityOps: [],
    requestTypeOps: [],
    dataCenterOps: [],
    platformOps: [],
    skuOps: [],
    environmentOps: [],
    actionTypeOps: [],
  }
}

export const getIntakeValues = (state = initialState) => {
  return state.intake ? state.intake.intakeValues : state.intakeValues
}

// const priorityOps = new Array(6).fill(0).map((_, n) => ({ id: faker.random.uuid(), label: faker.lorem.words(2) }))
// const actionTypeOps = new Array(6).fill(0).map((_, n) => ({ id: faker.random.uuid(), label: faker.lorem.words(2) }))
export const getIntakeForm = (state = initialState) => {
  const { priorityOps, requestTypeOps } = state.intake ? state.intake.intakeForm : state.intakeForm
  // console.log(priorityOps, requestTypeOps)
  // debugger
  return { priorityOps, requestTypeOps }
}

export const getMachineDetailForm = (state = initialState) => {
  // console.log(!!state.intake)
  // debugger
  const { dataCenterOps, platformOps, skuOps, environmentOps, actionTypeOps } =
    state.intake ? state.intake.intakeForm : state.intakeForm
  return { dataCenterOps, platformOps, skuOps, environmentOps, actionTypeOps }
}
