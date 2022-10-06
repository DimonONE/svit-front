interface IProps {
  color?: string
}

export const Person: React.FC<IProps> = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="3.75rem" height="5rem" viewBox="0 0 69.988 87.495">
      <g id="_16" data-name="16" transform="translate(-448.735 -565.764)">
        <path
          id="Контур_102"
          data-name="Контур 102"
          d="M492.531,610.069l-.663-5.974c4.635-4.016,7.748-11.089,7.748-18.037,0-10.518-1.5-19.044-15.886-19.044s-15.887,8.526-15.887,19.044c0,6.947,3.113,14.021,7.748,18.037l-.663,5.974a5.255,5.255,0,0,1-3.817,4.482l-14.648,4.062a8.842,8.842,0,0,0-6.478,8.519v24.876h67.488V627.133a8.842,8.842,0,0,0-6.478-8.519l-14.647-4.062A5.254,5.254,0,0,1,492.531,610.069Z"
          transform="translate(0 0)"
          fill="none"
          stroke={color || 'currentColor'}
          stroke-linecap="square"
          stroke-miterlimit="10"
          stroke-width="2.5"
        />
        <path
          id="Контур_103"
          data-name="Контур 103"
          d="M470.608,577.868a25.987,25.987,0,0,0,8.1,1.647,30.951,30.951,0,0,0,10.439-2.232s2.987,2.278,6.042,2.23"
          transform="translate(3.588 1.786)"
          fill="none"
          stroke={color || 'currentColor'}
          stroke-linecap="square"
          stroke-miterlimit="10"
          stroke-width="2.5"
        />
        <path
          id="Контур_104"
          data-name="Контур 104"
          d="M467.98,608.468l.963.8a18.271,18.271,0,0,0,23.311,0l.963-.8"
          transform="translate(3.131 7.211)"
          fill="none"
          stroke={color || 'currentColor'}
          stroke-linecap="square"
          stroke-miterlimit="10"
          stroke-width="2.5"
        />
      </g>
    </svg>
  )
}
