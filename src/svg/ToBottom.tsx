interface IProps {
  size?: [number | string, number | string]
}

export const ToBottom: React.FC<IProps> = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={(size && size[0]) || '0.9375rem'}
      height={(size && size[1]) || '0.5rem'}
      viewBox="0 0 20.199 11.513"
    >
      <path
        id="Контур_385"
        data-name="Контур 385"
        d="M1629.9,1566.744l9.392,9.392,9.392-9.392"
        transform="translate(-1629.189 -1566.037)"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      />
    </svg>
  )
}
