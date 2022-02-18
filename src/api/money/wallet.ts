import api from '@/api';
import type { GetMemberMoneyResponse } from '@/api/money/model/wallet-model';

/**
 * Api urls
 */
enum Urls {
  MEMBER_MONEY = '/money/wallet/member/money',
}

/**
 * 前台登入取得餘額
 * @returns Axios request promise
 */
export const getMemberMoney = () => api.get<GetMemberMoneyResponse>(Urls.MEMBER_MONEY);
