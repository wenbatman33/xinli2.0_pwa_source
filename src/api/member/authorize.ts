import api from '@/api';
import type {
  GetRegisterConfigResponse,
  GetLoginConfigResponse,
  PostSSORegisterRequestData,
  PostSSORegisterResponse,
  PostSSOLoginRequestData,
  PostSSOLoginResponse,
  PostLoginRequestData,
  PostLoginResponse,
  PostPhoneRequestData,
  PostSendSmsRequestData,
  PostSecondRequestData,
  PostSecondResponse,
  GetCaptchaResponse,
} from '@/api/member/model/authorize-model';

/**
 * Api urls
 */
enum Urls {
  REGISTER_CONFIG = '/member/authorize/register/config',
  LOGIN_CONFIG = '/member/authorize/login/config',
  SSO_REGISTER = '/member/authorize/sso_register',
  SSO_LOGIN = '/member/authorize/sso_login',
  LOGIN = '/member/authorize/login',
  PHONE = '/member/authorize/phone',
  SEND_SMS = '/member/authorize/send_sms',
  SECOND = '/member/authorize/second',
  CAPTCHA = '/member/authorize/captcha',
  LOGOUT = '/member/authorize/logout',
}

/**
 * 取得註冊設定
 * @returns Axios request promise
 */
export const getRegisterConfig = () => api.get<GetRegisterConfigResponse>(Urls.REGISTER_CONFIG);

/**
 * 取得註冊設定
 * @returns Axios request promise
 */
export const getLoginConfig = () => api.get<GetLoginConfigResponse>(Urls.LOGIN_CONFIG);

/**
 * SSO註冊
 * @param data Post data
 * @returns Axios request promise
 */
export const postSSORegister = (data?: PostSSORegisterRequestData) => api.post<PostSSORegisterResponse>(Urls.SSO_REGISTER, data);

/**
 * SSO登入
 * @param data Post data
 * @returns Axios request promise
 */
export const postSSOLogin = (data?: PostSSOLoginRequestData) => api.post<PostSSOLoginResponse>(Urls.SSO_LOGIN, data);

/**
 * 登入
 * @param data Post data
 * @returns Axios request promise
 */
export const postLogin = (data?: PostLoginRequestData) => api.post<PostLoginResponse>(Urls.LOGIN, data);

/**
 * 二階段驗證手機
 * @param data Post data
 * @returns Axios request promise
 */
export const postPhone = (data?: PostPhoneRequestData) => api.post(Urls.PHONE, data);

/**
 * 二階段驗證發送簡訊
 * @param data Post data
 * @returns Axios request promise
 */
export const postSendSms = (data?: PostSendSmsRequestData) => api.post(Urls.SEND_SMS, data);

/**
 * 二階段驗證
 * @param data Post data
 * @returns Axios request promise
 */
export const postSecond = (data?: PostSecondRequestData) => api.post<PostSecondResponse>(Urls.SECOND, data);

/**
 * 取得驗證碼
 * @returns Axios request promise
 */
export const getCaptcha = () => api.get<GetCaptchaResponse>(Urls.CAPTCHA);

/**
 * 登出
 * @returns Axios request promise
 */
export const postLogout = () => api.post(Urls.LOGOUT);
