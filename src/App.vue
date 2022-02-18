<template lang="pug">
//- 主框架
.flex.flex-col.flex-grow.items-stretch
  //- Router view
  router-view

  //- Dialog container
  #dialog-container

  //- Toast container
  #toast-container
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import { authorized } from '@/utils';
  import { useSocketStore } from '@/store/socket-store';

  /**
   * Socket store
   */
  const socketStore = useSocketStore();

  /**
   * Connect socket
   */
  const connectSocket = () => {
    socketStore.connect();
  };

  /**
   * On component mounted
   */
  onMounted(() => {
    connectSocket();
  });
</script>

<style scoped lang="scss">
  ::v-deep(.van-dialog__cancel) {
    margin: 0px 4px;
    color: #f0453a;
    background: rgba(240, 69, 58, 0.1);
    border-radius: 6px;
  }

  ::v-deep(.van-dialog__confirm) {
    margin: 0px 4px;
    color: #ffffff;
    background: #f0453a;
    border-radius: 6px;
  }

  ::v-deep(.van-toast--bottom) {
    border-radius: 64px;
  }
</style>
