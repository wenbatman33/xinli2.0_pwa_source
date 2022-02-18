import api from '@/api';
import type { GetDepositResponse, PostDepositRequestData, PostDepositResponse, PostDepositCancelRequestData } from '@/api/payment/model/deposit-model';

/**
 * Api urls
 */
enum Urls {
  DEPOSIT = '/payment/deposit',
  CANCEL = '/payment/deposit/cancel',
}

/**
 * 存款： 取得線路
 * @returns Axios request promise
 */
export const getDeposit = () => api.get<GetDepositResponse>(Urls.DEPOSIT);

/**
 * 存款： 建立存款單
 * @param data Post body data
 * @returns Axios request promise
 */
export const postDeposit = (data?: PostDepositRequestData) => api.post<PostDepositResponse>(Urls.DEPOSIT, data);

/**
 * 存款： 取消充值
 * @param data Post body data
 * @returns Axios request promise
 */
export const postDepositCancel = (data?: PostDepositCancelRequestData) => api.post(Urls.CANCEL, data);
