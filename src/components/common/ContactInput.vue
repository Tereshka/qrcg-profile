<template>
  <div class="contact-field">
    <input class="contact-field__input" type='text' :id="name" :value="value" @input="updateValue($event.target.value)"/>
    <label class="contact-field__label" :for="name">{{ label }}</label>
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

  private updateValue(value: string) {
    this.$emit('input', value);
  }
}
</script>
