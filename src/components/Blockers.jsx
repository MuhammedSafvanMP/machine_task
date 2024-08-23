import React from 'react'

export default function Blockers({ blocks }) {
  return (
    <section className='blockers'>
      <h1>BLOCKERS</h1>
      <div className='box'>
      {blocks.map((value, index) => (
          <h3 key={index}>
          {value.data}
        </h3>
      ))}
      </div>
    </section>
  )
}
