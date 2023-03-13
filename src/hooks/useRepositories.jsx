import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries.js';

export const useRepositories = () => {

    const {data = {}, loading, refetch} = useQuery(GET_REPOSITORIES);

    const {repositories = null} = data;

    const repositoresNodes = repositories ? repositories.edges.map(edge => edge.node) : [];

    return {loading, repositories: repositoresNodes, refetch}
}