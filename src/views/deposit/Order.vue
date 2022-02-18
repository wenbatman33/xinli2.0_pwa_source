<template lang="pug">
//- 提款單
.flex-grow.grid.grid-rows-content.justify-stretch
  //- 導覽欄
  BasicNav(:title='t("deposit_order_title")')
    //- 左側
    template(#left)
      //- 關閉
      BackButton(:src='iconClosePrimary')

    //- 右側
    template(#right)
      //- 客服
      ChatButton

  //- 頁面內容
  .flex.flex-col.items-stretch
    //- 灰色區塊
    .flex.flex-col.items-stretch.bg-gray.px-4.pb-6
      //- 水平排列
      .flex.flex-row.items-center.justify-center.mt-6
        //- 有效時間標題
        .body2.text-primary.opacity-40 {{ t("deposit_order_availableTime") }}

        //- 有效時間
        .ml-1.subtitle2.text-accent {{ availableTime }}

      //- 水平排列
      .flex.flex-row.items-center.justify-center.mt-4
        //- 金額
        .headline2.text-primary {{ amount }}

        //- 複製
        img.w-5.h-5.ml-1(:src='iconCopyPrimary40', @click='handleCopyAmountClick')

      //- 提示
      .body3.text-primary.text-center.opacity-40.mt-2 {{ t("deposit_order_amountHint") }}

      //- 銀行卡資訊
      .flex.flex-col.items-stretch.px-4.py-6.bg-white.rounded.mt-6
        //- 銀行
        .grid.grid-cols-info.gap-3.items-center
          //- 圖示
          img.w-6.h-6(:src='""', @error='errorImg')

          //- 名稱
          .headline3.text-primary {{ "工商银行" }}

          //- 提示
          .body3.text-primary.opacity-40 {{ t("deposit_order_oneTimeHint") }}

        //- 卡號
        .grid.grid-cols-info.gap-3.items-center.mt-6
          //- 標題
          .body2.text-primary.opacity-40 {{ t("deposit_order_bankcardNumber") }}

          //- 數值
          .subtitle2.text-primary.text-right {{ "3333 5555 6666 7777 888" }}

          //- 複製
          BasicButton(bg='primary5', textColor='primary', size='medium', rounded='full', @click='handleCopyBankcardNumberClick') {{ t("deposit_order_copy") }}

        //- 戶名
        .grid.grid-cols-info.gap-3.items-center.mt-6
          //- 標題
          .body2.text-primary.opacity-40 {{ t("deposit_order_bankAccountName") }}

          //- 數值
          .subtitle2.text-primary.text-right {{ "李大春" }}

          //- 複製
          BasicButton(bg='primary5', textColor='primary', size='medium', rounded='full', @click='handleCopyBankcardAccountClick') {{ t("deposit_order_copy") }}

        //- 附言
        .grid.grid-cols-info.gap-3.items-center.mt-6
          //- 標題
          .body2.text-primary.opacity-40 {{ t("deposit_order_bankNote") }}

          //- 數值
          .subtitle2.text-primary.text-right {{ "345924" }}

          //- 複製
          BasicButton(bg='primary5', textColor='primary', size='medium', rounded='full', @click='handleCopyBankcardNoteClick') {{ t("deposit_order_copy") }}

    //- 白色區塊
    .flex.flex-col.items-stretch.px-1
      //- 渠道
      .grid.grid-cols-info.gap-2.mt-4.px-7
        //- 標題
        .body2.text-primary.opacity-40 {{ t("deposit_order_gateway") }}

        //- 數值
        .col-span-2.subtitle2.text-primary.text-right {{ "网银內容字數超超超超超超超超超級長請折到下一行" }}

      //- 金額
      .grid.grid-cols-info.gap-2.mt-4.px-7
        //- 標題
        .body2.text-primary.opacity-40 {{ t("deposit_order_depositAmount") }}

        //- 數值
        .col-span-2.subtitle2.text-primary.text-right {{ "¥ 500.00" }}

      //- 實付
      .grid.grid-cols-info.gap-2.mt-4.px-7
        //- 標題
        .body2.text-primary.opacity-40 {{ t("deposit_order_paymentAmount") }}

        //- 數值
        .col-span-2.subtitle2.text-accent.text-right {{ "¥ 499.19" }}

      //- 錢包
      .grid.grid-cols-info.gap-2.mt-4.px-7
        //- 標題
        .body2.text-primary.opacity-40 {{ t("deposit_order_targetWallet") }}

        //- 數值
        .col-span-2.subtitle2.text-primary.text-right {{ "中心钱包" }}

      //- 編號
      .grid.grid-cols-info.gap-2.mt-4.items-center.px-7
        //- 標題
        .body2.text-primary.opacity-40 {{ t("deposit_order_orderSerial") }}

        //- 數值
        .subtitle2.text-primary.text-right {{ "4857206037165" }}

        //- 複製
        img.w-4.h-4(:src='iconCopyPrimary40', @click='handleCopySerialClick')

      //- 分隔線
      .h-px.bg-primary.opacity-5.mt-6

      //- 注意事項標題
      .subtitle1.text-primary.mt-6.px-8 {{ t("deposit_order_noticeTitle") }}

      //- 注意事項1
      .body2.text-accent.opacity-70.mt-2.px-8
        span ●
        span.ml-2 {{ t("deposit_order_noticeContent1") }}

      //- 注意事項2
      .body2.text-primary.opacity-40.mt-2.px-8
        span ●
        span.ml-2 {{ t("deposit_order_noticeContent2") }}

      //- 注意事項3
      .body2.text-primary.opacity-40.mt-2.px-8
        span ●
        span.ml-2 {{ t("deposit_order_noticeContent3") }}

      //- 注意事項4
      .body2.text-primary.opacity-40.mt-2.px-8
        span ●
        span.ml-2 {{ t("deposit_order_noticeContent4") }}

      //- 注意事項5
      .body2.text-primary.opacity-40.mt-2.px-8
        span ●
        span.ml-2 {{ t("deposit_order_noticeContent5") }}

  //- 按鈕
  .px-8.pt-8.pb-12.flex.flex-col.items-stretch
    //- 取消
    BasicButton(:loading='cancelLoading', bg='accent10', textColor='accent', size='large', @click='handleCancelClick') {{ t("deposit_order_cancel") }}

    //- 查看交易紀錄
    BasicButton.mt-4(bg='accent100', size='large', @click='handleRecordClick') {{ t("deposit_order_viewTransactionRecord") }}
</template>

<script setup lang="ts">
  import { ref, computed, onMounted, onUnmounted } from 'vue';
  import { Popup } from 'vant';
  import { useI18n } from 'vue-i18n';
  import { useRoute, useRouter } from 'vue-router';
  import { DEPOSIT_AVAILABLE_MINUTES } from '@/utils/constants';
  import { staticImgUrl, errorImg, commaFormat, copy } from '@/utils';
  import BasicNav from '@/components/nav/BasicNav.vue';
  import BackButton from '@/components/button/BackButton.vue';
  import ChatButton from '@/components/button/ChatButton.vue';
  import BasicButton from '@/components/button/BasicButton.vue';
  import dayjs from 'dayjs';
  import type { Dayjs } from 'dayjs';
  import type { PostDepositResponseData } from '@/api/payment/model/deposit-model';

  /**
   * Static icons
   */
  const iconClosePrimary = staticImgUrl('icon-close-primary.svg');
  const iconCopyPrimary40 = staticImgUrl('icon-copy-primary40.svg');

  /**
   * Vue i18n
   */
  const { t } = useI18n();

  /**
   * Vue router
   */
  const route = useRoute();
  const router = useRouter();

  /**
   * Countdown interval
   */
  const countdownInterval = ref<NodeJS.Timeout>();

  /**
   * Cancel loading
   */
  const cancelLoading = ref(false);

  /**
   * Expired time
   */
  const expiredTime = ref(dayjs().add(DEPOSIT_AVAILABLE_MINUTES, 'minute'));

  /**
   * Current time
   */
  const currentTime = ref(dayjs());

  /**
   * Available time
   */
  const availableTime = computed(() => {
    const diffInSecond = expiredTime.value.diff(currentTime.value, 'second');
    const minute = Math.floor(diffInSecond / 60);
    const minutePrefix = minute < 10 ? '0' : '';
    const second = Math.floor(diffInSecond % 60);
    const secondPrefix = second < 10 ? '0' : '';
    return `${minutePrefix}${minute}:${secondPrefix}${second}`;
  });

  /**
   * Amount
   */
  const amount = computed(() => {
    return commaFormat('499.19');
  });

  /**
   * Handle copy amount button clicked
   */
  const handleCopyAmountClick = () => {
    copy('499.19');
  };

  /**
   * Handle copy bankcard number button clicked
   */
  const handleCopyBankcardNumberClick = () => {
    copy('3333 5555 6666 7777 888');
  };

  /**
   * Handle copy bankcard account button clicked
   */
  const handleCopyBankcardAccountClick = () => {
    copy('李大春');
  };

  /**
   * Handle copy bankcard note button clicked
   */
  const handleCopyBankcardNoteClick = () => {
    copy('345924');
  };

  /**
   * Handle copy serial button clicked
   */
  const handleCopySerialClick = () => {
    copy('4857206037165');
  };

  /**
   * Handle cancel button clicked
   */
  const handleCancelClick = async () => {};

  /**
   * Handle record button clicked
   */
  const handleRecordClick = () => {
    router.push({
      path: '/transaction',
    });
  };

  /**
   * On component mounted
   */
  onMounted(() => {
    countdownInterval.value = setInterval(() => {
      currentTime.value = dayjs();
    }, 1000);
  });

  /**
   * On component unmounted
   */
  onUnmounted(() => {
    if (countdownInterval.value) {
      clearInterval(countdownInterval.value);
    }
  });
</script>

<style scoped lang="scss">
  .grid-rows-content {
    grid-template-rows: auto 1fr auto;
  }

  .bg-gray {
    background: rgba(7, 31, 68, 0.03);
  }

  .grid-cols-info {
    grid-template-columns: auto 1fr auto;
  }
</style>
