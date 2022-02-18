import api from '@/api';
import type { GetRecordParams, GetBonusRecordResponse, GetDepositRecordResponse, GetWithdrawalRecordResponse } from '@/api/payment/model/record-model';

/**
 * Api urls
 */
enum Urls {
  BONUS = '/payment/record/bonus',
  DEPOSIT = '/payment/record/deposit',
  WITHDRAWAL = '/payment/record/withdrawal',
}

/**
 * 交易紀錄：紅利紀錄
 * @param params Get query params
 * @returns Axios request promise
 */
export const getBonusRecord = (params?: GetRecordParams) => api.get<GetBonusRecordResponse>(Urls.BONUS, { params });

/**
 * 交易紀錄：充值紀錄
 * @param params Get query params
 * @returns Axios request promise
 */
export const getDepositRecord = (params?: GetRecordParams) => api.get<GetDepositRecordResponse>(Urls.DEPOSIT, { params });

/**
 * 交易紀錄：提款紀錄
 * @param params Get query params
 * @returns Axios request promise
 */
export const getWithdrawalRecord = (params?: GetRecordParams) => api.get<GetWithdrawalRecordResponse>(Urls.WITHDRAWAL, { params });
