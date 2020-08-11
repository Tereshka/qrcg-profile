<template>
  <div class="usage-card">
    <div class="usage-card__title">{{ title }}</div>
    <div class="usage-card__value">{{ value }}</div>
    <div class="usage-card__default">{{ dafaultValue }}</div>
    <button class="usage-card__button" @click="handleClick">{{ button }}</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export default class UsageCard extends Vue {
  @Prop({ required: true, type: String, default: 'title' }) title!: string;

  @Prop({ required: true, type: Number, default: 0 }) value!: number;

  @Prop({ required: true, type: Number, default: 0 }) dafaultValue!: number;

  @Prop({ required: true, type: String, default: '' }) button!: string;

  // @Prop() handleButtonClick!: any;

  @Emit('handleButtonClick')
  private handleClick(): void {}
}
</script>
