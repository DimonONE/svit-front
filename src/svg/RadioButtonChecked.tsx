import React from 'react'

interface IProps {
  checked?: boolean
}
export const RadioButtonChecked: React.FC<IProps> = ({ checked }) => {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" aria-hidden="true">
      <path
        fill={checked ? '#34A10E' : '#ddd'}
        d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
      />
    </svg>
  )
}
