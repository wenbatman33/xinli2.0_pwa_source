import api from '@/api';
import type { PostRecycleResponse, GetGameLoginParams, GetGameLoginResponse } from '@/api/game/model/game-model';

/**
 * Api urls
 */
enum Urls {
  RECYCLE = '/game/game/recycle',
  LOGIN = '/game/game/login',
}

/**
 * 一鍵回收
 * @param data Post data
 * @returns Axios request promise
 */
export const postRecycle = () => api.post<PostRecycleResponse>(Urls.RECYCLE);

/**
 * 登入遊戲取得網址
 * @returns Axios request promise
 */
export const getGameLogin = (params?: GetGameLoginParams) => api.get<GetGameLoginResponse>(Urls.LOGIN, { params });
