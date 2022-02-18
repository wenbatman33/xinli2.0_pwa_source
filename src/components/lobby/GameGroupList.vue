<template lang="pug">
//- 廠商列表
.grid.grid-cols-3.gap-4
  //- 廠商物件
  transition-group(name='fade-in')
    GameGroupListItem(v-for='item in filterList', :item='item', :key='item.id', @showGameGroupPopup='handleShowGameGroupPopup', @showGameLobbyPopup='handleShowGameLobbyPopup')

  //- 遊戲集結頁彈窗
  GameGroupPopup(v-model:show='showGameGroupPopup', :gameGroup='popupGameGroupItem', :gameType='gameType')

  //- 遊戲大廳列表彈窗
  GameLobbyPopup(v-model:show='showGameLobbyPopup', :gameGroup='popupGameLobbyItem')
</template>

<script setup lang="ts">
  import { defineProps, ref, computed, watch } from 'vue';
  import Sortable from 'sortablejs';
  import GameGroupPopup from '@/components/lobby/GameGroupPopup.vue';
  import GameLobbyPopup from '@/components/lobby/GameLobbyPopup.vue';
  import GameGroupListItem from '@/components/lobby/GameGroupListItem.vue';
  import type { GameGroupItem, GameType } from '@/api/game/model/game-group-model';
  /**
   * Component props interface
   */
  interface Props {
    /**
     * Game group list
     */
    list?: GameGroupItem[];

    /**
     * Parent game type
     */
    gameType?: GameType;
  }

  /**
   * Component props
   */
  const props = defineProps<Props>();

  /**
   * Show game group popup
   */
  const showGameGroupPopup = ref(false);

  /**
   * Show game lobby popup
   */
  const showGameLobbyPopup = ref(false);

  /**
   * Popup game group item
   */
  const popupGameGroupItem = ref<GameGroupItem>({});

  /**
   * Popup game lobby item
   */
  const popupGameLobbyItem = ref<GameGroupItem>({});

  /**
   * Filter game group list
   */
  const filterList = computed(() => {
    const list = props.list || [];
    return list.filter((element) => {
      return element.id && element.id > 0;
    });
  });

  /**
   * Handle show game group popup
   */
  const handleShowGameGroupPopup = (item?: GameGroupItem) => {
    popupGameGroupItem.value = item || {};
    showGameGroupPopup.value = true;
  };

  /**
   * Handle show game lobby popup
   */
  const handleShowGameLobbyPopup = (item?: GameGroupItem) => {
    popupGameLobbyItem.value = item || {};
    showGameLobbyPopup.value = true;
  };
</script>

<style scoped lang="scss">
  .fade-in-enter-active {
    transition: all 0.3s ease;
  }

  .fade-in-leave-active {
    transition: all 0.3s ease;
  }

  .fade-in-enter,
  .fade-in-leave-to {
    opacity: 0;
  }
</style>
