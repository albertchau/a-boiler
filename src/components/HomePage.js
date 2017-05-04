import { Button } from 'antd'
import React from 'react'
import Testing from './Testing'

const HomePage = () => {
  return (
    <div>
      <Testing />
      <Button loading={{ delay: 2000 }}> Hello Button! </Button>
    </div>
  )
}

export default HomePage
