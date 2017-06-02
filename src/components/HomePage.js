import { Button } from "antd"
import React from "react"
import Testing from "./Testing"

const HomePage = () => {
  return (
    <div>
      <Testing />
      <Button loading={{ delay: 2000 }}> Hello Manninsdf </Button>
    </div>
  )
}

export default HomePage
