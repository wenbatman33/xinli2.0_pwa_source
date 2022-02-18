import api from '@/api';
import type { GetVipInfoResponse, GetVipSettingResponse, GetVipGiftResponse, PostVipGiftRequestData, PostVipGiftTypeRequestData, PostVipGiftReadRequestData } from '@/api/member/model/vip-model';

/**
 * Api urls
 */
enum Urls {
  INFO = '/member/vip/info',
  SETTING = '/member/vip/setting',
  GIFT = '/member/vip/gift',
  GIFT_TYPE = '/member/vip/gift/type',
  GIFT_ALL = '/member/vip/gift/all',
  GIFT_READ = '/member/vip/gift/read',
}

/**
 * 取得VIP資訊
 * @returns Axios request promise
 */
export const getVipInfo = () => api.get<GetVipInfoResponse>(Urls.INFO);

/**
 * 取得VIP設定
 * @returns Axios request promise
 */
export const getVipSetting = () => api.get<GetVipSettingResponse>(Urls.SETTING);

/**
 * 取得VIP可領取資訊
 * @returns Axios request promise
 */
export const getVipGift = () => api.get<GetVipGiftResponse>(Urls.GIFT);

/**
 * 領取VIP禮金
 * @param data Post data
 * @returns Axios request promise
 */
export const postVipGift = (data?: PostVipGiftRequestData) => api.post(Urls.GIFT, data);

/**
 * 領取VIP禮金(依照類型)
 * @param data Post data
 * @returns Axios request promise
 */
export const postVipGiftType = (data?: PostVipGiftTypeRequestData) => api.post(Urls.GIFT_TYPE, data);

/**
 * 一鍵領取VIP禮金
 * @returns Axios request promise
 */
export const postVipGiftAll = () => api.post(Urls.GIFT_ALL);

/**
 * 已讀VIP禮金
 * @param data Post data
 * @returns Axios request promise
 */
export const postVipGiftRead = (data?: PostVipGiftReadRequestData) => api.post(Urls.GIFT_READ, data);
