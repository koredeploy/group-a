import SlidePage from '../../components/SlidePage/SlidePage'
import FeaturesPage from './FeaturesPage/FeaturesPage'
import InfoPage from './InfoPage/InfoPage'
import Hero from '../../components/Hero/Hero'
import SpecialMenu from './SpeacialMenu/SpecialMenu'

const HomeIndex = () => {
  return (
    <>
        <Hero />
        <SpecialMenu/>
        <SlidePage />
        <FeaturesPage />
        <InfoPage />
    </>

  )
}

export default HomeIndex
