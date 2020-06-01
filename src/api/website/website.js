import { httpGet } from '@/http/http.js'

const website = (info) => httpGet('/websit/info', info)


export {
    website
}