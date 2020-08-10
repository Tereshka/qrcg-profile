<template>
  <div class="information-card">
    <div class="information-card__title">{{ title }}</div>
    <div class="information-card__value">{{ value }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class InformationCard extends Vue {
  @Prop({ required: false, type: String, default: 'title' }) title!: string;

  @Prop({ required: false, type: String, default: 'value' }) value!: string;
}
</script>
