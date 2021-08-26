import React from 'react'
import SpinnerLoader from 'react-loader-spinner'
import { ReactLoader } from './Loader.styled'

function Loader() {
  return (
    <ReactLoader>
      <SpinnerLoader
        type="Bars"
        color="rgb(60 51 132)"
        height={100}
        width={100}
        timeout={3000}
      />
    </ReactLoader>
  )
}

export default Loader
