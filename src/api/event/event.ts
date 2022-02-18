import api from '@/api';
import type {
  GetAnnouncementResponse,
  GetBannerParams,
  GetBannerResponse,
  GetLetterListParams,
  GetLetterListResponse,
  GetLetterParams,
  GetLetterResponse,
  PutLetterRequestData,
  PutLetterResponse,
  DeleteLetterParams,
  DeleteLetterResponse,
} from '@/api/event/model/event-model';

/**
 * Api urls
 */
enum Urls {
  ANNOUNCEMENT = '/event/announcement',
  BANNER = '/event/banner',
  LETTER_LIST = '/event/letter/list',
  LETTER = '/event/letter',
}

/**
 * 取得公告
 * @returns Axios request promise
 */
export const getAnnouncement = () => api.get<GetAnnouncementResponse>(Urls.ANNOUNCEMENT);

/**
 * 取得廣告
 * @param params Query params
 * @returns Axios request promise
 */
export const getBanner = (params?: GetBannerParams) => api.get<GetBannerResponse>(Urls.BANNER, { params });

/**
 * 會員站內信
 * @param params Query params
 * @returns Axios request promise
 */
export const getLetterList = (params?: GetLetterListParams) => api.get<GetLetterListResponse>(Urls.LETTER_LIST, { params });

/**
 * 單一站內信
 * @param params Query params
 * @returns Axios request promise
 */
export const getLetter = (params?: GetLetterParams) => api.get<GetLetterResponse>(Urls.LETTER, { params });

/**
 * 讀取站內信
 * @param data Put request data
 * @returns Axios request promise
 */
export const putLetter = (data?: PutLetterRequestData) => api.put<PutLetterResponse>(Urls.LETTER, data);

/**
 * 刪除站內信
 * @param params Delete request query params
 * @returns Axios request promise
 */
export const deleteLetter = (params?: DeleteLetterParams) => api.delete<DeleteLetterResponse>(Urls.LETTER, { params });
