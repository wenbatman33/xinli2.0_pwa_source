import api from '@/api';
import type {
  GetGameLogListParams,
  GetGameLogListResponse,
  GetSlotLogListResponse,
  GetEsportLogListResponse,
  GetLotteryLogListResponse,
  GetFishLogListResponse,
  GetSportLogListResponse,
} from '@/api/game/model/log-model';

/**
 * Api urls
 */
enum Urls {
  LIST = '/game/log/list',
  SLOT_LIST = '/game/log/slot/list',
  ESPORT_LIST = '/game/log/esport/list',
  LOTTERT_LIST = '/game/log/lottery/list',
  FISH_LIST = '/game/log/fish/list',
  SPORT_LIST = '/game/log/sport/list',
}

/**
 * 注單列表
 * @param params Get query params
 * @returns Axios request promise
 */
export const getGameLogList = (params?: GetGameLogListParams) => api.get<GetGameLogListResponse>(Urls.LIST, { params });

/**
 * 老虎機注單詳情
 * @param params Get query params
 * @returns Axios request promise
 */
export const getSlotLogList = (params?: GetGameLogListParams) => api.get<GetSlotLogListResponse>(Urls.SLOT_LIST, { params });

/**
 * 電競體育類注單詳情
 * @param params Get query params
 * @returns Axios request promise
 */
export const getEsportLogList = (params?: GetGameLogListParams) => api.get<GetEsportLogListResponse>(Urls.ESPORT_LIST, { params });

/**
 * 彩票類注單詳情
 * @param params Get query params
 * @returns Axios request promise
 */
export const getLotteryLogList = (params?: GetGameLogListParams) => api.get<GetLotteryLogListResponse>(Urls.LOTTERT_LIST, { params });

/**
 * 補魚類注單詳情
 * @param params Get query params
 * @returns Axios request promise
 */
export const getFishLogList = (params?: GetGameLogListParams) => api.get<GetFishLogListResponse>(Urls.FISH_LIST, { params });

/**
 * 體育類注單詳情
 * @param params Get query params
 * @returns Axios request promise
 */
export const getSportLogList = (params?: GetGameLogListParams) => api.get<GetSportLogListResponse>(Urls.SPORT_LIST, { params });
