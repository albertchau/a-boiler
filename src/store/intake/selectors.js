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

export const getIntakeForm = (state = initialState) => {
  const { priorityOps, requestTypeOps } = state.intake ? state.intake.intakeForm : state.intakeForm
  return { priorityOps, requestTypeOps }
}

export const getMachineDetailForm = (state = initialState) => {
  const { dataCenterOps, platformOps, skuOps, environmentOps, actionTypeOps } =
    state.intake ? state.intake.intakeForm : state.intakeForm
  return { dataCenterOps, platformOps, skuOps, environmentOps, actionTypeOps }
}
