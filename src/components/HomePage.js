import React from "react"
import Testing from "./Testing"
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Button } from "antd"

const HomePage = () => {
  return (
    <Grid fluid>
      <Row>
        <Col xs={6} md={3}>
          <Testing />
          <Button
            onClick={e => console.log(e)}
            backgroundColor="primary"
            color="white"
            inverted
            rounded
          >
            Button
          </Button>
        </Col>
      </Row>
    </Grid>
  )
}

export default HomePage
