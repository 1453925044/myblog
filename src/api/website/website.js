import { httpGet } from '@/http/http.js'

const website = (info) => httpGet('/website/footer', info)


export {
    website
}