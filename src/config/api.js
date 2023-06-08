const apiRoutes = {

    // types of oil
    GET_ALL_CATEGORY:'category',

    // Oils
    GET_ALL_PRODUCT:'product',
    GET_PRODUCT_DY_IDS:'product/byIds',
    GET_ONE_PRODUCT:'product/withParameters',
    GET_PRODUCT_WITH_DISCOUNT:'product/withDiscount',
    GET_PRODUCT_BY_SEARCH:'product/search',

    // News
    GET_NEWS: 'news',

    // Portfolio
    GET_PORTFOLIO: 'portfolio',

    // Services
    GET_ALL_SERVICES: 'service',

    // Information about us
    GET_INFORMATION:'settings',

    // Banner
    GET_BANNER:'banner/visible',

    // Order
    CREATE_ORDER:'order',

    // Connection
    CREATE_CONNECT:'callRequest',
}

const BASE_URL = process.env.REACT_APP_BASE_URL
const BASE_API_URL = process.env.REACT_APP_BASE_API_URL
export {apiRoutes, BASE_URL, BASE_API_URL}
