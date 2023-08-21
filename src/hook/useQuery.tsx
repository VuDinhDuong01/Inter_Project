import omitBy from 'lodash/omitBy';
import isUndefined from 'lodash/isUndefined'

import { QueryType } from "../types/query.type"
import { QueryParams } from "./QueryParams"

export const useQuery = () => {

    const queryParams: QueryType = QueryParams()
    if (queryParams.location === 'Tất cả') {
        delete queryParams.location
    }
    if (queryParams.group === 'Tất cả') {
        delete queryParams.group
    }
    if (queryParams.type === 'Tất cả') {
        delete queryParams.type
    }

    const query = omitBy({
        limit: Number(queryParams?.limit) || 8,
        page: Number(queryParams?.page) || 1,
        name: queryParams?.name,
        location: queryParams?.location,
        type: queryParams?.type,
        group: queryParams?.group
    }, isUndefined)
    return query
}
