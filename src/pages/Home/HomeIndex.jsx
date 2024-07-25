import SlidePage from '../../components/SlidePage/SlidePage'
import FeaturesPage from './FeaturesPage/FeaturesPage'
import InfoPage from './InfoPage/InfoPage'
import Hero from '../../components/Hero/Hero'
import Menu from '../../components/menu/Menu'

const HomeIndex = () => {
  return (
    <>
        <Hero />
        <Menu />
        <SlidePage />
        <FeaturesPage />
        <InfoPage />
    </>

  )
}

export default HomeIndex
