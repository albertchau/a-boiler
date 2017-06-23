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
  },
  isSubmitting: false,
}

export const getIntakeValues = (state = initialState) => {
  return state.requestPage ? state.requestPage.intakeValues : state.intakeValues
}

export const getIntakeForm = (state = initialState) => {
  const { priorityOps, requestTypeOps } = state.requestPage ? state.requestPage.intakeForm : state.intakeForm
  return { priorityOps, requestTypeOps }
}

export const getMachineDetailForm = (state = initialState) => {
  const { dataCenterOps, platformOps, skuOps, environmentOps, actionTypeOps } =
    state.requestPage ? state.requestPage.intakeForm : state.intakeForm
  return { dataCenterOps, platformOps, skuOps, environmentOps, actionTypeOps }
}

export const getIsSubmitting = (state = initialState) => {
  return state.requestPage.isSubmitting
}
