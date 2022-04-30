import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export function ActiveLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to)
  let match = useMatch({ path: resolved.pathname, end: true })

  return (
    <>
      <Link
        className='transition-colors pb-2 border-b-2'
        style={{
          borderBottomColor: match ? '#795548' : 'transparent',
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </>
  )
}
