<template lang="pug">
//- 虛擬貨幣提領地址物件
.flex.flex-col.items-stretch.p-4.mx-4.mt-2.shadow.rounded.bg-white(@click='handleItemClick')
  //- 名稱資訊
  .grid.grid-cols-names.gap-4.items-center
    //- 名稱
    .subtitle1.text-primary {{ name }}

    //- 類型
    .subtitle2.text-primary.opacity-60 {{ type }}

  //- 地址資訊
  .grid.grid-cols-address.gap-2.items-center.mt-2
    //- 地址
    .body2.text-primary.opacity-60.break-all {{ address }}

    //- 刪除
    BasicButton(rounded='full')
      img.p-2(:src='iconDeletePrimary')

    //- 編輯
    BasicButton(rounded='full')
      img.p-2(:src='iconEditPrimary')
</template>

<script setup lang="ts">
  import { defineProps, defineEmits, computed } from 'vue';
  import { staticImgUrl } from '@/utils';
  import BasicButton from '@/components/button/BasicButton.vue';
  import type { USDTItem } from '@/api/member/model/member-model';

  /**
   * Static icons
   */
  const iconDeletePrimary = staticImgUrl('icon-delete-primary.svg');
  const iconEditPrimary = staticImgUrl('icon-edit-primary.svg');

  /**
   * Component props interface
   */
  interface Props {
    /**
     * Altcoin item
     */
    item?: USDTItem;
  }

  /**
   * Component emits interface
   */
  interface Emits {
    /**
     * Click item
     */
    (e: 'clickItem', item?: USDTItem): void;
  }

  /**
   * Component props
   */
  const props = defineProps<Props>();

  /**
   * Component emit
   */
  const emit = defineEmits<Emits>();

  /**
   * Name
   */
  const name = computed(() => {
    return props?.item?.name || '';
  });

  /**
   * Type
   */
  const type = computed(() => {
    return props?.item?.type || '';
  });

  /**
   * Address
   */
  const address = computed(() => {
    return props?.item?.address || '';
  });

  /**
   * Handle item clicked
   */
  const handleItemClick = () => {
    emit('clickItem', props.item);
  };
</script>

<style scoped lang="scss">
  .grid-cols-names {
    grid-template-columns: 1fr auto;
  }

  .grid-cols-address {
    grid-template-columns: 1fr auto auto;
  }
</style>
