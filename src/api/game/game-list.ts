import api from '@/api';
import type {
  GetByGroupIdParams,
  GetByGroupIdResponse,
  GetFavoriteGameParams,
  GetFavoriteGameResponse,
  GetHotGameParams,
  GetHotGameResponse,
  GetPlayedGameParams,
  GetPlayedGameResponse,
  PostLikeRequestData,
  DeleteUnlikeParams,
} from '@/api/game/model/game-list-model';

/**
 * Api urls
 */
enum Urls {
  GET_BY_GROUP_ID = '/game/gamelist/getbygroupid',
  GET_FAVOIRTE_GAME = '/game/gamelist/getfavoritegame',
  HOT_GAME = '/game/gamelist/hotgame/h5',
  PLAYED_GAME = '/game/gamelist/playedgame',
  LIKE = '/game/gamelist/like',
  UNLIKE = '/game/gamelist/unlike',
}

/**
 * 取得大廳遊戲類型
 * @returns Axios request promise
 */
export const getByGroupId = (params?: GetByGroupIdParams) => api.get<GetByGroupIdResponse>(Urls.GET_BY_GROUP_ID, { params });

/**
 * 取得大廳遊戲類型
 * @returns Axios request promise
 */
export const getFavoriteGame = (params?: GetFavoriteGameParams) => api.get<GetFavoriteGameResponse>(Urls.GET_FAVOIRTE_GAME, { params });

/**
 * 取得熱門遊戲
 * @returns Axios request promise
 */
export const getHotGame = (params?: GetHotGameParams) => api.get<GetHotGameResponse>(Urls.HOT_GAME, { params });

/**
 * 取得最近遊玩遊戲
 * @returns Axios request promise
 */
export const getPlayedGame = (params?: GetPlayedGameParams) => api.get<GetPlayedGameResponse>(Urls.PLAYED_GAME, { params });

/**
 * 取得最近遊玩遊戲
 * @returns Axios request promise
 */
export const postLike = (data?: PostLikeRequestData) => api.post(Urls.LIKE, data);

/**
 * 取得最近遊玩遊戲
 * @returns Axios request promise
 */
export const deleteUnlike = (params?: DeleteUnlikeParams) => api.delete(Urls.UNLIKE, { params });
