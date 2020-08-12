<template>
  <div class="contact-field">
    <input
      class="contact-field__input"
      :type="type"
      :id="name"
      :name="name"
      :value="value"
      @input="updateValue"
    />
    <label class="contact-field__label" :for="name">{{ label }}</label>
    <div v-if="error" class="contact-field__error">{{ error }}</div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
  Emit,
} from 'vue-property-decorator';

@Component
export default class ContactInput extends Vue {
  @Prop({ required: true, type: String, default: 'name' }) name!: string;

  @Prop({ required: true, type: String, default: 'type' }) type!: string;

  @Prop({ required: true, type: String, default: 'value' }) value!: string;

  @Prop({ required: true, type: String, default: 'label' }) label!: string;

  @Prop({ type: String, default: null }) error!: string;

  @Emit('onChangeValue')
  // eslint-disable-next-line class-methods-use-this
  private updateValue(event: object) {
    return event;
  }
}
</script>
