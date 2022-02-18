import { ApiResponse } from '@/api/basic-model';

/**
 * 線路物件
 */
export interface DepositItem {
  /**
   * 線路 ID
   */
  id?: number;

  /**
   * 線路名稱
   */
  name?: string;

  /**
   * 說明
   */
  note?: string;

  /**
   * Icon
   */
  icon?: string;

  /**
   * 推廣文字
   */
  tooltip?: string;

  /**
   * 充值下限
   */
  lower?: number;

  /**
   * 充值上限
   */
  upper?: number;

  /**
   * 維護狀態 1:維護中 2:正常
   */
  maintain?: number;

  /**
   * 是否推薦
   */
  isRecommend?: boolean;

  /**
   * 是否需要真實姓名
   */
  needRealName?: boolean;

  /**
   * 是否有教學
   */
  hasDoc?: boolean;

  /**
   * 教學文字
   */
  docTitle?: string;

  /**
   * 教學位置
   */
  docURL?: string;
}

/**
 * 存款： 取得線路返回資訊
 */
export interface GetDepositResponseData {
  /**
   * 列表
   */
  list?: DepositItem[];

  /**
   * ERC 匯率
   */
  exchangeRateERC?: number;

  /**
   * TRC 匯率
   */
  exchangeRateTRC?: number;
}

/**
 * 存款： 取得線路 API 返回資訊
 */
export type GetDepositResponse = ApiResponse<GetDepositResponseData>;

/**
 * 存款： 建立存款單請求參數
 */
export interface PostDepositRequestData {
  /**
   * 線路 id
   */
  id?: number;

  /**
   * 存款金額
   */
  amount?: number;

  /**
   * 真實姓名
   */
  realName?: string;
}

/**
 * 存款： 建立存款單返回資料
 */
export interface PostDepositResponseData {
  /**
   * 訂單編號
   */
  id?: string;

  /**
   * 開啟網址
   */
  url?: string;

  /**
   * 開啟方式 1:收銀台
   */
  type?: number;
}

/**
 * 存款： 建立存款單 API 返回資料
 */
export type PostDepositResponse = ApiResponse<PostDepositResponseData>;

/**
 * 存款： 取消充值
 */
export interface PostDepositCancelRequestData {
  /**
   * id
   */
  id?: string;
}
