import api from '@/api';
import type { GetWithdrawalResponse, PostWithdrawalRequestData, PostWithdrawalResponse } from '@/api/payment/model/withdrawal-model';

/**
 * Api urls
 */
enum Urls {
  WITHDRAWAL = '/payment/withdrawal',
}

/**
 * 提款: 提款首頁
 * @returns Axios request promise
 */
export const getWithdrawal = () => api.get<GetWithdrawalResponse>(Urls.WITHDRAWAL);

/**
 * 提款: 提款送出
 * @param data Post request body
 * @returns Axios request promise
 */
export const postWithdrawal = (data?: PostWithdrawalRequestData) => api.post<PostWithdrawalResponse>(Urls.WITHDRAWAL, data);
