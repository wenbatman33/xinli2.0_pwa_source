import api from '@/api';
import type { GetRegionParams, GetRegionResponse } from '@/api/member/model/region-model';

/**
 * Api urls
 */
enum Urls {
  PROVINCES = '/member/region/provinces',
  CITIES = '/member/region/cities',
  STATE = '/member/region/state',
  STREET = '/member/region/street',
}

/**
 * 取得省份
 * @returns Axios request promise
 */
export const getProvinces = () => api.get<GetRegionResponse>(Urls.PROVINCES);

/**
 * 取得城市
 * @param params Get query params
 * @returns Axios request promise
 */
export const getCities = (params?: GetRegionParams) => api.get<GetRegionResponse>(Urls.CITIES, { params });

/**
 * 取得區域
 * @param params Get query params
 * @returns Axios request promise
 */
export const getState = (params?: GetRegionParams) => api.get<GetRegionResponse>(Urls.STATE, { params });

/**
 * 取得街區
 * @param params Get query params
 * @returns Axios request promise
 */
export const getStreet = (params?: GetRegionParams) => api.get<GetRegionResponse>(Urls.STREET, { params });
