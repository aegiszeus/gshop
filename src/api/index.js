import ajax from './ajax'

const BASE_URL = '/api'

// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)

// 3、根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax(BASE_URL + '/shops', {latitude, longitude})

/**
 * 获取商家信息
 */
export const reqShopInfo = () => ajax('/info')
