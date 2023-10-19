<template>
  <div>
    Welcome {{getNewNotifications()}}
  </div>
</template>

<script lang="ts">

import {defineComponent} from "vue";
import {mapStores} from "pinia";
import {notificationStore} from "@/stores/notification/notification";
import type {NotificationBean} from "@/stores/notification/types";

export default defineComponent({
  computed: {
    ...mapStores(notificationStore)
  },
  components: {
  },
  data(){
    return {

    }
  },
  methods: {
    getNewNotifications(): NotificationBean[] {
      return this.notificationStore.getViewList(false)
    }
  },
  async mounted(){
    await this.notificationStore.fetchList()
  }

})
</script>