import React, { Suspense } from 'react'
import Loading from '../components/common/Loading'

const Routes = React.lazy(() => import('./Routes'))
export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes />
    </Suspense>
  )
}
