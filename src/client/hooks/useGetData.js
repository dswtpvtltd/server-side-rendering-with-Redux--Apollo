import { useState, useEffect } from 'react';
import { useIndexedDB } from 'react-indexed-db';

const useGetData = (queryId) => {
    const { getAll } = useIndexedDB('boatbooking');
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const abc = async () => {
            if (!loading) {
                await getAll()
                    .then(pagedata => {
                        const saveddata = pagedata.find(page => page.id === queryId);
                        setData(JSON.parse(saveddata.value));
                        setLoading(true);
                    })
                    .catch(error => { console.log(error.message); setLoading(false); });
            }
        }
        abc();
        return () => {
            abc();
        }
    }, [queryId, getAll, loading]);

    return { data };
}

export default useGetData;