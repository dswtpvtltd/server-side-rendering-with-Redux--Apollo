import { useQuery } from '@apollo/client';

export const useSelectorQuery = (selectQuery, variables) => {
    const { loading, error, data } = useQuery(selectQuery, { variables });
    return { loading, error, data };
};