import axios from 'axios'
import MockAdapter from "axios-mock-adapter"
import { fakeDataJob, fakeDataNews } from './Data';

export const axiosInstance = axios.create();
const mock = new MockAdapter(axiosInstance);

//fake data news

mock.onGet("/api/v2/news").reply(config => {
    const { limit, page,name } = config.params
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const filteredData = name ? fakeDataNews.filter(item => item.content.toLowerCase().includes(name.toLowerCase()))
     : fakeDataNews
    const paginatedData = filteredData.slice(startIndex, endIndex)
    const response = {
        data: paginatedData,
        totalPages: Math.ceil(filteredData.length / limit),
        totalItem: filteredData.length
    };
    return [200, response];
});

mock.onGet(/\/api\/v2\/news\/\d+/).reply(config => {
    const matchResult = config.url?.match(/\/api\/v2\/news\/(\d+)/);
    const idItem = matchResult && matchResult[1];
    const item = fakeDataNews.find(item => item.id === idItem);

    if (item) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([200, item]);
            }, 0);
        });
    } else {
        return new Promise((resolve,) => {
            setTimeout(() => {
                resolve([404]);
            }, 0);
        });
    }
});

//fake data jobs
mock.onGet("/api/v2/jobs").reply(config => {
    const { limit, page, name, location, group, type } = config.params;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    let filteredData = [...fakeDataJob];
    if (name) {
        filteredData = filteredData.filter(item => item.title.toLowerCase().includes(name.trim().toLowerCase()))
    }
    if (location) {
        filteredData = filteredData.filter(item => item.location.toLowerCase().includes(location.trim().toLowerCase()))
    }
    if (group) {
        filteredData = filteredData.filter(item => item.group.toLowerCase().includes(group.trim().toLowerCase()))
    }
    if (type) {
        filteredData = filteredData.filter(item => item.type.toLowerCase().includes(type.trim().toLowerCase()))
    }
    const paginatedData = filteredData.slice(startIndex, endIndex);
    const response = {
        data: paginatedData,
        totalPages: Math.ceil(filteredData.length / limit),
        totalItem: paginatedData.length
    };

    return [200, response];
});

mock.onGet(/\/api\/v2\/jobs\/\d+/).reply(config => {
    const matchResult = config.url?.match(/\/api\/v2\/jobs\/(\d+)/);
    const idItem = matchResult?.[1]
    const item = fakeDataJob.find(item => item.id === idItem);
    if (item) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([200, item]);
            }, 0);
        });
    } else {
        return new Promise((resolve,) => {
            setTimeout(() => {
                resolve([404]);
            }, 0);
        });
    }
});



















