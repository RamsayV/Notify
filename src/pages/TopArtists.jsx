import {Error, Loader, ArtistCard} from '../components'
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopArtists = () => {
const { data, isFetching, error } = useGetTopChartsQuery()

    
if (isFetching ) return <Loader title="Loading charts" />

if(error && country) return <Error />

return(
<div className='flex flex-col'>
<h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>The World's hottest Artists <span className='font-black'></span>
</h2>
<div className='flex flex-wrap sm:justify-start justify-center gap-8'>
{data?.map((track) => (
    <ArtistCard
    key={track.key}
    track={track}
    
    />
))}
</div>
</div>
)
}

export default TopArtists;

