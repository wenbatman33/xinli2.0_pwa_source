<template lang="pug">
//- 晉級動畫
Popup.h-full.w-full.bg-transparent(:show='show', teleport='body', :closeable='false')
  //- 等級提升
  .flex.flex-col.items-center
    //- 標題
    .headline2.text-white.mt-14 {{ t("vip_levelUpgrade_title") }}

    //- 內容
    .relative.flex.flex-col.items-center.self-stretch.mt-14
      //- 底圖
      img.z-10.level-bg(:src='backgroundVipLevelUpgrade')

      //- 光暈
      img.z-20.level-grow(:src='iconVipLevelGrow')

      //- 徽章
      img.z-30.level-badge(:src='currentLevelSrc')

      //- 進度
      Progress.z-40.level-progress(:percentage='100', :show-pivot='false', :color='levelProgressColour', track-color='#f3f4f6')

      //- 等級
      .z-50.level-level.headline3 {{ currentLevelText }}

    //- 查看晉級獎勵
    BasicButton.next-btn.mt-8(rounded='md', size='medium', @click='handleNextClick')
      .subtitle3 {{ t("vip_levelUpgrade_detail") }}
</template>

<script setup lang="ts">
  import { defineProps, ref, computed, watch } from 'vue';
  import { Popup, Progress } from 'vant';
  import { useI18n } from 'vue-i18n';
  import { staticImgUrl, levelImg, levelProgressColor } from '@/utils';
  import BasicButton from '@/components/button/BasicButton.vue';
  import type { GetVipInfoResponseData, GiftItem, LevelItem } from '@/api/member/model/vip-model';

  /**
   * Static icons
   */
  const backgroundVipLevelUpgrade = staticImgUrl('background-vip-level-upgrade.svg');
  const iconVipLevelGrow = staticImgUrl('icon-vip-level-grow.svg');

  /**
   * Component props interface
   */
  interface Props {
    /**
     * Vip data
     */
    vipData?: GetVipInfoResponseData;

    /**
     * Gift list
     */
    giftList?: GiftItem[];

    /**
     * Level list
     */
    levelList?: LevelItem[];
  }

  /**
   * Component props
   */
  const props = defineProps<Props>();

  /**
   * Vue i18n
   */
  const { t } = useI18n();

  /**
   * Show popup
   */
  const show = ref(false);

  /**
   * The lowest level
   */
  const lowestLevel = ref(0);

  /**
   * The highest level
   */
  const highestLevel = ref(0);

  /**
   * Current level in animator progress
   */
  const currentLevel = ref(0);

  /**
   * Current level image source
   */
  const currentLevelSrc = computed(() => {
    const level = Math.ceil(currentLevel.value);
    return levelImg(level);
  });

  /**
   * Current level progress color
   */
  const levelProgressColour = computed(() => {
    const level = Math.ceil(currentLevel.value);
    return levelProgressColor(level);
  });

  /**
   * Current level text
   */
  const currentLevelText = computed(() => {
    const level = Math.ceil(currentLevel.value);
    return `VIP ${level}`;
  });

  /**
   * Contains next upgrade info
   */
  const containsNext = computed(() => {});

  /**
   * Handle next button clicked
   */
  const handleNextClick = () => {
    show.value = false;
  };

  /**
   * Watch vip data changed
   */
  watch(
    () => [props.vipData, props.giftList, props.levelList],
    () => {
      // Compute upgrade info
      if (props.vipData && props.giftList && props.levelList) {
        // Compute level upgrade info
        currentLevel.value = props.vipData.level || 0;
        lowestLevel.value = currentLevel.value;
        highestLevel.value = currentLevel.value;
        props.giftList.forEach((element) => {
          const giftLevel = element.vipLevel || currentLevel.value;
          if (giftLevel < lowestLevel.value) {
            lowestLevel.value = giftLevel;
            currentLevel.value = giftLevel;
          }
        });

        // Compute upgrade gift info

        // Compute withdrawal amout limit upgrade info

        // Compute withdrawal times limit upgrade info

        // Compute sport refund upgrade info

        // Compute person refund upgrade info

        // Compute esport refund upgrade info

        // Compute electronic refund upgrade info

        // Compute lottery refund upgrade info

        // Compute monthly gift info

        // Compute anniversary gift info

        // Compute birthday gift info

        // Compute custom1 info

        // Compute custom2 info

        // Compute custom3 info

        // Compute custom4 info

        // Show upgrade popup if
        if (false) {
          show.value = true;
        }
      }
    }
  );
</script>

<style scoped lang="scss">
  .level-bg {
    width: 300px;
    height: 162px;
    margin-top: 125px;
  }

  .level-grow {
    position: absolute;
    width: 252px;
    height: 252px;
  }

  .level-badge {
    position: absolute;
    width: 184px;
    height: 150px;
    top: 51px;
  }

  .level-progress {
    position: absolute;
    width: 148px;
    height: 8px;
    bottom: 59px;
  }

  .level-level {
    position: absolute;
    bottom: 27px;
  }

  .next-btn {
    color: rgba(0, 0, 0, 0.8);
    background: linear-gradient(180deg, #c8a674 0%, #ebc994 100%);
  }
</style>
