import React, { useEffect } from 'react'
import { useState } from 'react'

export default function User(props) {
    const [cnt, setCnt]= useState(0);

    
  return (
    <div className='user-card'>
        <h1>Count: {cnt}</h1>
      <h2>Name: {props.name}</h2>
      <h3>Location: {props.location}</h3>
      <h4>Contact: {props.contact}</h4>
    </div>
  )
}
