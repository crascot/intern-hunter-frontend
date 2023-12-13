import AuctionsFilter from '../../components/AuctionsFilter/AuctionsFilter'
import FilteredAuctionList from '../../components/FilteredAuctionList/FilteredAuctionList'
import NavbarMenuWrapper from '../../components/NavbarMenuWrapper/NavbarMenuWrapper'


const Auctions = () => {
    return (
        <>
            <NavbarMenuWrapper current='Аукционы' />
            {
                window.innerWidth > 1070 ?? <AuctionsFilter />
            }
            <FilteredAuctionList />
        </>
    )
}

export default Auctions