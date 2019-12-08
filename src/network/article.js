import { request } from './request';

export function postArticle(data) {
    return request({
        method: 'post',
        url: '/postarticle',
        data: data
    })
}

export function getArticleDetail(id) {
    return request({
        url: '/article/' + id
    })
}

export function getArchiveArticle(year) {
    return request({
        url: '/archive/' + year
    })
}

export function getYearlyArchiveCount() {
    return request({
        url: '/archive'
    })
}

export function increArticleViews(data) {
    return request({
        url: '/article/increviews',
        method: 'post',
        data: data
    })
}