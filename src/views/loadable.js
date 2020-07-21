import React, { Component } from 'react'


const loadable = ({
  loading: Loading,
  loader
}) =>{
  return class LoadableComponent extends Component {
    state = {
      LoadedComponent:null

    }
    componentDidMount(){
      loader().then(res =>{
        this.setState({
          LoadedComponent:res.default
        })
      })
    }
    render() {
      const {LoadedComponent} = this.state
      return (
        LoadedComponent?
        <LoadedComponent />:
        <Loading />
      )
    }
  }
}
 

export default loadable
