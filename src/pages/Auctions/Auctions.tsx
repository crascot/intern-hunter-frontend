import AuctionsFilter from '../../components/AuctionsFilter/AuctionsFilter'
import FilteredAuctionList from '../../components/FilteredAuctionList/FilteredAuctionList'
import Footer from '../../components/Footer/Footer'
import NavbarMenuWrapper from '../../components/NavbarMenuWrapper/NavbarMenuWrapper'


const Auctions = () => {

    return (
        <>
            <NavbarMenuWrapper current='Аукционы' />
            {
                window.innerWidth > 1070 ?
                ''
                :
                <AuctionsFilter />
            }
            <FilteredAuctionList />
            <Footer />
        </>
    )
}

export default Auctions