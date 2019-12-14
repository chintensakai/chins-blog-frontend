import { request } from './request';

export function postArticle(data) {
    return request({
        method: 'post',
        url: '/article/postarticle',
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
        url: '/article/archive/' + year
    })
}

export function getYearlyArchiveCount() {
    return request({
        url: '/article/archive'
    })
}

export function increArticleViews(data) {
    return request({
        url: '/article/increviews',
        method: 'post',
        data: data
    })
}

export function getTopViewsArticle() {
    return request({
        url: '/article/topviews',
    })
}

export function searchArticle(title) {
    return request({
        url: '/article/search',
        params: {
            title: title
        }
    })
}