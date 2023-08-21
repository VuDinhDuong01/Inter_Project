import queryString from 'query-string';

export const QueryParams = () => {
    const search = window.location.search;
    return queryString.parse(search)
}
