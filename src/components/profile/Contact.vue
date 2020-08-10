<template>
  <div class="contact">
    <h2>{{ $t('accountSections.contact') }}</h2>
    <div>{{ $t('contact.description') }}</div>
    <form v-if="user">
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
      <div>
        <contact-input
          name="city"
          :label="$t('contact.fields.city')"
          :value="user.address.street"
        />
        <contact-input
          name="zip"
          :label="$t('contact.fields.zip')"
          :value="user.address.zip"
        />
      </div>
      <!-- <contact-input
        name="country"
        :label="$t('contact.fields.country')"
        :value="user.address.country"
      /> -->
      <contact-input
          name="website"
          :label="$t('contact.fields.website')"
          :value="user.website"
        />
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import ContactInput from '../common/ContactInput.vue';

import { UserType } from '../../types/UserType';

const user = namespace('user');

@Component({
  components: {
    'contact-input': ContactInput,
  },
})
export default class UserCard extends Vue {
  @user.State
  public user!: UserType;

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
