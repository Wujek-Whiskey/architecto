import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PageNotFound } from './PageNotFound'
import { Home } from '@views'
import { Navbar } from '@components'

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'*'} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
