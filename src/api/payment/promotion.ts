import api from '@/api';
import type {
  GetPromotionParams,
  GetPromotionResponse,
  GetPromotionOneParams,
  GetPromotionOneResponse,
  GetPromotionDropdownResponse,
  PostApplyPromotionRequestData,
  PostApplyPromotionResponse,
} from '@/api/payment/model/promotion-model';

/**
 * Api urls
 */
enum Urls {
  PROMOTION = '/payment/promotion',
  PROMOTION_ONE = '/payment/promotion/one',
  PROMOTION_DROPDOWN = '/payment/promotion/dropdown',
  PROMOTION_APPLY = '/payment/promotion/apply',
}

/**
 * 優惠活動：列表
 * @param params Query params
 * @returns Axios request promise
 */
export const getPromotion = (params?: GetPromotionParams) => api.get<GetPromotionResponse>(Urls.PROMOTION, { params });

/**
 * 優惠活動：單則優惠內容
 * @param params Query params
 * @returns Axios request promise
 */
export const getPromotionOne = (params?: GetPromotionOneParams) => api.get<GetPromotionOneResponse>(Urls.PROMOTION_ONE, { params });

/**
 * 優惠：下拉選單
 * @param params Query params
 * @returns Axios request promise
 */
export const getPromotionDropdown = () => api.get<GetPromotionDropdownResponse>(Urls.PROMOTION_DROPDOWN);

/**
 * 優惠：申請
 * @param data Post body data
 * @returns Axios request promise
 */
export const postApplyPromotion = (data?: PostApplyPromotionRequestData) => api.post<PostApplyPromotionResponse>(Urls.PROMOTION_APPLY, data);
