import { useState, useEffect } from 'react';
import { useIndexedDB } from 'react-indexed-db';

const useSaveData = async (data, queryId) => {
  const [save, setSave] = useState('');
  const { add, getAll, update } = useIndexedDB('boatbooking');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const _fun = async () => {
      if (!loading && data) {
        await getAll()
          .then(async pagedata => {
            const saveddata = pagedata.find(page => page.id === queryId);
            setLoading(true);

            if (!saveddata) {
              await add({ value: JSON.stringify(data), key: queryId, id: queryId })
                .then(event => { setSave(event); setLoading(true); })
                .catch(error => { setLoading(false); });
            }
            if (saveddata) {
              await update({ value: JSON.stringify(data), key: queryId, id: queryId })
                .then(event => { setSave(event); setLoading(true); })
                .catch(error => { setLoading(false); });
            }

          })
          .catch(error => { console.log(error.message); setLoading(false); });
      }
    }
    _fun();
    return () => {
      _fun();
    }
  }, [loading, add, update, getAll, data, queryId]);

  return { save };
}

export default useSaveData;