import FilteredAuctionList from '../../components/FilteredAuctionList/FilteredAuctionList'
import Footer from '../../components/Footer/Footer'
import NavbarMenuWrapper from '../../components/NavbarMenuWrapper/NavbarMenuWrapper'

const Auctions = () => {
    return (
        <>
            <NavbarMenuWrapper current='Аукционы' />
            <FilteredAuctionList />
            <Footer />
        </>
    )
}

export default Auctions