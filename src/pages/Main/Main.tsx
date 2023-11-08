import Become from '../../components/Become/Become'
import HowWork from './HowWork/HowWork'
import MainSearch from './MainSearch/MainSearch'
import Footer from '../../components/Footer/Footer'
import NavbarMenuWrapper from '../../components/NavbarMenuWrapper/NavbarMenuWrapper'

const Main = () => (
    <>
        <NavbarMenuWrapper current='Домой' />
        <MainSearch />
        <HowWork />
        <Become />
        <Footer />
    </>
)

export default Main