import api from '@/api';
import type {
  GetMeResponse,
  PutNameRequestData,
  PostPhoneRequestData,
  PostPhoneResponse,
  PutPhoneRequestData,
  PutEmailRequestData,
  PostPasswordRequestData,
  PostPasswordResponse,
  PutPasswordRequestData,
  GetBankcardsResponse,
  PostBankcardRequestData,
  DeleteBankcardParams,
  PostBankcardOtherRequestData,
  GetUSDTSResponse,
  PostSmsRequestData,
  PostUSDTRequestData,
  DeleteUSDTParams,
  PutDetailRequestData,
} from '@/api/member/model/member-model';

/**
 * Api urls
 */
enum Urls {
  ME = '/member/member/me',
  NAME = '/member/member/name',
  PHONE = '/member/member/phone',
  EMAIL = '/member/member/email',
  PASSWORD = '/member/member/password',
  DETAIL = '/member/member/detail',
  BANKCARDS = '/member/member/bankcards',
  BANKCARD = '/member/member/bankcard',
  BANKCARD_OTHER = '/member/member/bankcard/other',
  USDTS = '/member/member/usdts',
  SMS = '/member/member/sms',
  USDT = '/member/member/usdt',
}

/**
 * 取得會員詳細資料
 * @returns Axios request promise
 */
export const getMe = () => api.get<GetMeResponse>(Urls.ME);

/**
 * 修改會員實名
 * @param data Put data
 * @returns Axios request promise
 */
export const putName = (data?: PutNameRequestData) => api.put(Urls.NAME, data);

/**
 * 發送手機驗證碼
 * @param data Post data
 * @returns Axios request promise
 */
export const postPhone = (data?: PostPhoneRequestData) => api.post<PostPhoneResponse>(Urls.PHONE, data);

/**
 * 修改會員手機
 * @param data Put data
 * @returns Axios request promise
 */
export const putPhone = (data?: PutPhoneRequestData) => api.put(Urls.PHONE, data);

/**
 * 修改會員信箱
 * @param data Put data
 * @returns Axios request promise
 */
export const putEmail = (data?: PutEmailRequestData) => api.put(Urls.EMAIL, data);

/**
 * 驗證舊密碼
 * @param data Post data
 * @returns Axios request promise
 */
export const postPassword = (data?: PostPasswordRequestData) => api.post<PostPasswordResponse>(Urls.PASSWORD, data);

/**
 * 修改會員密碼
 * @param data Put data
 * @returns Axios request promise
 */
export const putPassword = (data?: PutPasswordRequestData) => api.put(Urls.PASSWORD, data);

/**
 * 修改會員資料
 * @param data Put data
 * @returns Axios request promise
 */
export const putDetail = (data?: PutDetailRequestData) => api.put(Urls.DETAIL, data);

/**
 * 取得會員銀行卡
 * @returns Axios request promise
 */
export const getBankcards = () => api.get<GetBankcardsResponse>(Urls.BANKCARDS);

/**
 * 新增會員銀行卡
 * @param data Post data
 * @returns Axios request promise
 */
export const postBankcard = (data?: PostBankcardRequestData) => api.post(Urls.BANKCARD, data);

/**
 * 刪除會員銀行卡
 * @param params Delete query params
 * @returns Axios request promise
 */
export const deleteBankcard = (params?: DeleteBankcardParams) => api.delete(Urls.BANKCARD, { params });

/**
 * 新增他人銀行卡
 * @param data Post data
 * @returns Axios request promise
 */
export const postBankcardOther = (data?: PostBankcardOtherRequestData) => api.post(Urls.BANKCARD_OTHER, data);

/**
 * 取得會員USDT
 * @returns Axios request promise
 */
export const getUDSTS = () => api.get<GetUSDTSResponse>(Urls.USDTS);

/**
 * 驗證驗證碼
 * @param data Post data
 * @returns Axios request promise
 */
export const postSms = (data?: PostSmsRequestData) => api.post(Urls.SMS, data);

/**
 * 新增會員USDT
 * @param data Post data
 * @returns Axios request promise
 */
export const postUSDT = (data?: PostUSDTRequestData) => api.post(Urls.USDT, data);

/**
 * 刪除會員USDT
 * @param params Delete query params
 * @returns Axios request promise
 */
export const deleteUSDT = (params?: DeleteUSDTParams) => api.delete(Urls.USDT, { params });