import {request} from './request';

export function getAllArticles() {
    return request({
        url: '/article/all'
    })
}

export function getArticlesPage(page) {
    return request({
        url: '/article/page',
        data: page,
        method: 'post'
    })
}