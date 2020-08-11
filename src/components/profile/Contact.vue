<template>
  <div class="contact">
    <h2>{{ $t('accountSections.contact') }}</h2>
    <div class="contact-description">{{ $t('contact.description') }}</div>
    <form v-if="user && currentCountry">
      <contact-input
        name="firstName"
        :label="$t('contact.fields.firstName')"
        :value="user.firstName"
      />
      <contact-input
        name="lastName"
        :label="$t('contact.fields.lastName')"
        :value="user.lastName"
      />
      <contact-input
        name="phone"
        :label="$t('contact.fields.phone')"
        :value="user.phone"
      />
      <contact-input
        name="company"
        :label="$t('contact.fields.company')"
        :value="user.company"
      />
      <contact-input
        name="street"
        :label="$t('contact.fields.street')"
        :value="user.address.street"
      />
      <div class="form-row">
        <contact-input
          name="city"
          :label="$t('contact.fields.city')"
          :value="user.address.city"
        />
        <contact-input
          name="zip"
          :label="$t('contact.fields.zip')"
          :value="user.address.zip"
        />
      </div>
      <div class="contact-field">
        <select class="contact-field__input" v-model="user.address.country">
          <option v-for="country in countries" :key="country.code" :value="country.id">
            {{ country.name }}
          </option>
        </select>
        <label class="contact-field__label">{{ $t('contact.fields.country') }}</label>
      </div>
      <contact-input
          name="website"
          :label="$t('contact.fields.website')"
          :value="user.website"
        />
    </form>
    <button class="form-button">{{ $t('contact.save') }}</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import ContactInput from '../common/ContactInput.vue';

import { UserType } from '../../types/UserType';
import { CountryType } from '../../types/CountryType';

const user = namespace('user');
const country = namespace('country');

@Component({
  components: {
    'contact-input': ContactInput,
  },
})
export default class Contact extends Vue {
  @user.State
  public user!: UserType;

  @country.State
  public countries!: CountryType[];

  @country.Getter
  public currentCountry!: CountryType;

  // get fields() {
  //   return [
  //     {
  //       name: 'firstName',
  //       label: this.$t('contact.fields.firstName'),
  //       value: this.user.firstName,
  //     },
  //     {
  //       name: 'lastName',
  //       label: this.$t('contact.fields.lastName'),
  //       value: this.user.lastName,
  //     },
  //   ];
  // }
}
</script>
