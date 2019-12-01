import { request } from './request';

export function postArticle(content) {
    return request({
        method: 'post',
        url: '/postarticle',
        data: {
            content: content,
            date: ''
        }
    })
}