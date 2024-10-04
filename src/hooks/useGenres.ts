 import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres'
import APIClient from '../services/api-client';
import ms from 'ms'
 


export interface Genre {
    id: number;
    name: string;
    image_background: string;
}


// const useGenres = () => useData<Genre>('/genres');

//const useGenres = () => ({data: genres, isLoading: false, error: null})

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => {
    return useQuery ({
        queryKey: ['genres'],
        queryFn: apiClient.getALl,
        staleTime: ms('24h'), //24 h    24*60*60*1000
        initialData: genres
    })
}

export default useGenres;
