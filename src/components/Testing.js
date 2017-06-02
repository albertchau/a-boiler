import { Button } from "antd"
import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { testingRequest } from "../store/testing/actions"

const Testing = ({ action }) => <div><Button onClick={action}> Press Me For Magic </Button></div>

export default connect(null, dispatch => ({ action: bindActionCreators(testingRequest, dispatch) }))(Testing)
