<template>
  <div v-if="isVisible" class="notification">
    {{ text }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { bus } from '../main';

@Component
export default class InformationCard extends Vue {
  private isVisible = false;

  private text = 'Default notification text';

  created() {
    bus.$on('onShowNotification', this.showNotification);
  }

  destroyed() {
    bus.$off('onShowNotification', this.showNotification);
  }

  private showNotification(text: string): void {
    this.isVisible = true;
    this.text = text;
    setTimeout(() => {
      this.isVisible = false;
    }, 6000);
  }
}
</script>
