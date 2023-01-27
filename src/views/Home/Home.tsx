import { documentTitle } from '@utils'
import { AgencySection, Footer, Hero, NewsList, StockDate } from '@components'

function Home() {
  documentTitle('architecto - home')
  return (
    <div>
      <Hero />
      <AgencySection />
      <StockDate />
      <NewsList />
      <Footer />
    </div>
  )
}

export default Home
