import api from '@/api';
import type { GetGameGroupLobbyResponse, GetGameGroupWalletTypeResponse } from '@/api/game/model/game-group-model';

/**
 * Api urls
 */
enum Urls {
  LOBBY = '/game/gamegroup/lobby',
  WALLET_TYPE = '/game/gamegroup/wallettype',
}

/**
 * 取得大廳遊戲類型
 * @returns Axios request promise
 */
export const getGameGroupLobby = () => api.get<GetGameGroupLobbyResponse>(Urls.LOBBY);

/**
 * 取得遊戲錢包類型
 * @returns Axios request promise
 */
export const getGameGroupWalletType = () => api.get<GetGameGroupWalletTypeResponse>(Urls.WALLET_TYPE);
