<template>
  <main>
    <WelcomeComponent />
  </main>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import WelcomeComponent from "@/components/WelcomeComponent.vue";

export default defineComponent({
  components: {
    WelcomeComponent
  }
})
</script>
