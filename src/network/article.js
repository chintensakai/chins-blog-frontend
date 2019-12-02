import { request } from './request';

export function postArticle(article) {
    return request({
        method: 'post',
        url: '/postarticle',
        data: {
            article: article
        }
    })
}