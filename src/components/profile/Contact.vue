<template>
  <div class="contact">
    <h2>{{ $t('accountSections.contact') }}</h2>
    <div class="contact-description">{{ $t('contact.description') }}</div>
    <form v-if="userClone && currentCountry">
      <contact-input
        name="firstName"
        type="text"
        :label="$t('contact.fields.firstName')"
        :value="userClone.firstName"
        :error="errors.firstName"
        @onChangeValue="onChangeInput"
      />
      <contact-input
        name="lastName"
        type="text"
        :label="$t('contact.fields.lastName')"
        :value="userClone.lastName"
        :error="errors.lastName"
        @onChangeValue="onChangeInput"
      />
      <contact-input
        name="phone"
        type="number"
        :label="$t('contact.fields.phone')"
        :value="userClone.phone"
        :error="errors.phone"
        @onChangeValue="onChangeInput"
      />
      <contact-input
        name="company"
        type="text"
        :label="$t('contact.fields.company')"
        :value="userClone.company"
        :error="errors.company"
        @onChangeValue="onChangeInput"
      />
      <contact-input
        name="street"
        type="text"
        :label="$t('contact.fields.street')"
        :value="userClone.address.street"
        :error="errors.street"
        @onChangeValue="onChangeInput"
      />
      <div class="form-row">
        <contact-input
          name="city"
          type="text"
          :label="$t('contact.fields.city')"
          :value="userClone.address.city"
          :error="errors.city"
          @onChangeValue="onChangeInput"
        />
        <contact-input
          name="zip"
          type="text"
          :label="$t('contact.fields.zip')"
          :value="userClone.address.zip"
          :error="errors.zip"
          @onChangeValue="onChangeInput"
        />
      </div>
      <div class="contact-field">
        <select
          id="country"
          name="country"
          class="contact-field__input"
          v-model="userClone.address.country"
          @change="onChangeInput"
        >
          <option v-for="country in countries" :key="country.code" :value="country.id">
            {{ country.name }}
          </option>
        </select>
        <label class="contact-field__label">{{ $t('contact.fields.country') }}</label>
      </div>
      <contact-input
          name="website"
          type="text"
          :label="$t('contact.fields.website')"
          :value="userClone.website"
          :error="errors.website"
          @onChangeValue="onChangeInput"
        />
    </form>
    <button
      :class="['form-button', {'active': isDataChanged }]"
      @click="saveChanges"
    >
      {{ $t('contact.save') }}
    </button>
    <button
      v-if="isDataChanged"
      class="form-button"
      @click="cancelChanges"
    >
      {{ $t('contact.cancel') }}
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import ContactInput from '../common/ContactInput.vue';

import { UserType } from '../../types/UserType';
import { CountryType } from '../../types/CountryType';
import UserService from '../../services/UserService';

import { bus } from '../../main';

const user = namespace('user');
const country = namespace('country');

type Error = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  company?: string;
  street?: string;
  city?: string;
  zip?: string;
  website?: string;
};

@Component({
  components: {
    'contact-input': ContactInput,
  },
})
export default class Contact extends Vue {
  @user.State
  public user!: UserType;

  @user.Mutation
  public setUser!: (user: UserType) => void;

  @country.State
  public countries!: CountryType[];

  @country.Getter
  public currentCountry!: CountryType;

  private userClone?: UserType;

  private errors: Error = {};

  private isDataChanged = false;

  @Watch('user')
  onUserChanged(val: UserType, oldVal: UserType) {
    this.userClone = this.clone(val);
  }

  created() {
    this.userClone = this.clone(this.user);
  }

  // eslint-disable-next-line class-methods-use-this
  private clone(value: UserType) {
    if (value === undefined) return {};
    return JSON.parse(JSON.stringify(value));
  }

  private cancelChanges() {
    this.userClone = this.clone(this.user);
    this.isDataChanged = false;
    this.errors = {};
  }

  private saveChanges() {
    if (Object.keys(this.errors).length !== 0) {
      bus.$emit('onShowNotification', 'Please, fill required fields');
      return;
    }
    this.isDataChanged = false;

    UserService.update(this.user.id, this.userClone)
      .then((res) => {
        this.setUser(res.data);
        bus.$emit('onShowNotification', 'Your contact information has successfully updated!');
      })
      .catch((e) => {
        bus.$emit('onShowNotification', 'Something went wrong. Sorry((');
        console.log(e);
      });
  }

  private onChangeInput(e: any) {
    this.isDataChanged = true;
    const { name, value } = e.target;

    if (['street', 'city', 'zip', 'country'].includes(name)) {
      this.userClone.address[name] = value;
    } else {
      this.userClone[name] = value;
    }

    this.errors = this.validateFields();
  }

  private validateFields() {
    const errors: Error = {};

    if (this.userClone!.firstName === '') {
      errors.firstName = '* First name is required';
    }
    if (this.userClone!.lastName === '') {
      errors.lastName = '* Last name is required';
    }

    if (this.userClone!.phone.length < 5) {
      errors.phone = '* Your phone number is too small';
    }

    if (this.userClone!.company === '') {
      errors.company = '* Company is required';
    }

    if (this.userClone!.address.street === '') {
      errors.street = '* Street is required';
    }

    if (this.userClone!.address.city === '') {
      errors.city = '* City is required';
    }

    if (this.userClone!.address.zip === '') {
      errors.zip = '* ZIP code is required';
    }

    if (this.userClone!.website === '') {
      errors.website = '* Website is required';
    }

    return errors;
  }
}
</script>
