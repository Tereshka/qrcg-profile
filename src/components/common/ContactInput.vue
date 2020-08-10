<template>
  <div>
    <input type='text' :id="name" :value="value" />
    <label :for="name">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ContactInput extends Vue {
  @Prop({ required: true, type: String, default: 'title' }) name!: string;

  @Prop({ required: true, type: String, default: 'value' }) value!: string;

  @Prop({ required: true, type: String, default: 'label' }) label!: string;

  private model = '';
}
</script>
