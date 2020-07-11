import React, { Component } from 'react'
import './index.less'

import {Button} from 'antd'

const textHOC = (WrappedCompent) =>{
  return class HOCCompontent extends Component {
    render(){
      return (
        < >
          <WrappedCompent/>
          <div>这是高阶组件</div>
        </>
      )
      
    }
  }
}

@textHOC
class App extends Component {
  render() {
    return (
      <div>
        <Button type='primary'>测试按钮</Button>
      </div>
    )
  }
}
export default App
