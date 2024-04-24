import React from 'react'

type Props = {
    data: string,
}

export default function LoginRegister({data}: Props) {
  return (
    <div>{data}</div>
  )
}