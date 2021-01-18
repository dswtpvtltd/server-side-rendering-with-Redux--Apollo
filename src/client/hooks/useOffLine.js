import { hash } from '../store/actions/index';

const useOffLine = (query, variables) => {
    const queryId = hash(JSON.stringify({ query, variables }));
    return { queryId };
}

export default useOffLine;