import { testLinks } from '../..'
import Navigation from '../../components/Navigation/Navigation'
import Panel from '../../components/Panel/Panel'
import MainSearch from './MainSearch/MainSearch'

const Main = () => {
    return (
        <>
            <Navigation links={testLinks} />
            <Panel />
            <MainSearch />
        </>
    )
}

export default Main