import { request } from './request';

export function postArticle(data) {
    return request({
        method: 'post',
        url: '/postarticle',
        data: data
    })
}