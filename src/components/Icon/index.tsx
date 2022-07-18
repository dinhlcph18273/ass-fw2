import React from 'react'

type Props = {
    src?: string
}

const Icon = (props: Props) => {
  return (
    <div>
        <img src={props.src} alt="" />
    </div>
  )
}

export default Icon