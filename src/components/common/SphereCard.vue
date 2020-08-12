<template>
  <button class="sphere-card" @click="handleClick">
    <font-awesome-icon class="sphere-card__icon" :icon="icon" />
    <div class="sphere-card__title" >{{ title }}</div>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export default class SphereECard extends Vue {
  @Prop({ required: true, type: String, default: 'user' }) icon!: string;

  @Prop({ required: true, type: String, default: '' }) title!: string;

  @Prop({ required: true, type: Number, default: 0 }) value!: number;

  @Emit('handleButtonClick')
  private handleClick(): number { return this.value; }
}
</script>
