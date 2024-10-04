 import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres'
import APIClient from '../services/api-client';
 


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
        staleTime: 24*60*60*1000, //24 h
        initialData: {count: genres.length, results: genres}
    })
}

export default useGenres;
