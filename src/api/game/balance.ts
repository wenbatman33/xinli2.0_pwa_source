import api from '@/api';
import type { GetBalanceCurrentResponse, GetBalanceSingleParams, GetBalanceSingleResponse } from '@/api/game/model/balance-model';

/**
 * Api urls
 */
enum Urls {
  CURRENT = '/game/game/balance/current',
  SINGLE = '/game/game/balance/single',
}

/**
 * 立即取得所有錢包餘額
 * @returns Axios request promise
 */
export const getBalanceCurrent = () => api.get<GetBalanceCurrentResponse>(Urls.CURRENT);

/**
 * 立即取得單一錢包餘額
 * @param params Get query params
 * @returns Axios request promise
 */
export const getBalanceSingle = (params?: GetBalanceSingleParams) => api.get<GetBalanceSingleResponse>(Urls.SINGLE, { params });
