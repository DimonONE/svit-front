interface IProps {
  size?: [number | string, number | string]
}

export const ToLeft: React.FC<IProps> = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={(size && size[0]) || '1.25rem'}
      height={(size && size[1]) || '2.1875rem'}
      viewBox="0 0 21.116 39.403"
    >
      <path
        id="Контур_371"
        data-name="Контур 371"
        d="M2399,2529.043l-18.995,18.995,8.706,8.706L2399,2567.032"
        transform="translate(-2378.591 -2528.336)"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      />
    </svg>
  )
}
