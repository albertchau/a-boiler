export const ADD_MACHINE_DETAIL = 'ADD_MACHINE_DETAIL'
export const DELETE_MACHINE_DETAIL = 'DELETE_MACHINE_DETAIL'
export const EDIT_MACHINE_DETAIL = 'EDIT_MACHINE_DETAIL'
export const COPY_MACHINE_DETAIL = 'COPY_MACHINE_DETAIL'
export const FIELD_EDIT = 'FIELD_EDIT'
export const SUBMIT_INTAKE_FORM = 'SUBMIT_INTAKE_FORM'
export const REQUEST_PAGE_LOAD_REQUEST = 'REQUEST_PAGE_LOAD_REQUEST'
export const REQUEST_PAGE_LOAD_ERROR = 'REQUEST_PAGE_LOAD_ERROR'
export const REQUEST_PAGE_LOAD_SUCCESS = 'REQUEST_PAGE_LOAD_SUCCESS'
export const POST_REQUEST_FORM_REQUEST = 'POST_REQUEST_FORM_REQUEST'
export const POST_REQUEST_FORM_ERROR = 'POST_REQUEST_FORM_ERROR'
export const POST_REQUEST_FORM_SUCCESS = 'POST_REQUEST_FORM_SUCCESS'

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

const fetchRequestPageValues = api => api.get('/intake-values')
const fetchRequestPageForm = api => api.get('/intake-form')

export const requestPageLoadRequest = (dispatch, getState, { api }) => {
  return Promise.all([ fetchRequestPageValues(api), fetchRequestPageForm(api) ])
    .then(([ values, form ]) => dispatch(requestPageLoadSuccess(values, form)))
    .catch(error => dispatch(requestPageLoadFailure(error)))
}

export const requestPageLoadSuccess = (values, form) => {
  return {
    type: REQUEST_PAGE_LOAD_SUCCESS,
    values,
    form
  }
}

export const requestPageLoadFailure = (error) => {
  return {
    type: REQUEST_PAGE_LOAD_ERROR,
    error
  }
}

export const postSubmitRequestForm = (data) => (dispatch, getState, { api }) => {
  console.log(data)
  dispatch(submitRequestFormRequest)
  return setTimeout(
    () => api.post('/intake-values', data)
      .then(success => dispatch(submitRequestFormSuccess(success)))
      .catch(e => dispatch(submitRequestFormFailure(e)))
    , 5000)
}

const submitRequestFormSuccess = (success) => {
  return {
    type: POST_REQUEST_FORM_SUCCESS,
    success,
  }
}

const submitRequestFormRequest = { type: POST_REQUEST_FORM_REQUEST }

const submitRequestFormFailure = (error) => {
  return {
    type: POST_REQUEST_FORM_ERROR,
    error
  }
}
