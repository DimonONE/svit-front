interface IProps {
  color?: string
}

export const ToTop: React.FC<IProps> = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="0.6875rem" viewBox="0 0 20.199 11.513">
      <path
        id="Контур_384"
        data-name="Контур 384"
        d="M1629.9,1566.744l9.392,9.392,9.392-9.392"
        transform="translate(1649.388 1577.55) rotate(180)"
        fill="none"
        stroke={color || 'currentColor'}
        stroke-width="2"
      />
    </svg>
  )
}
