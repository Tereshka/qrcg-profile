<template>
  <div class="sphere">
    <h2>{{ $t('accountSections.whoAreYou') }}</h2>
    <div class="sphere-description">{{ $t('whoAreYou.description') }}</div>
    <div v-if="user" class="sphere-card-wrapper">
      <sphere-card
        v-for="(card, i) in cards"
        :key="`sphere-card-${i}`"
        :title="card.title"
        :icon="card.icon"
        :value="card.value"
        :class="{selected: card.value === user.sphere}"
        :disabled="isDisabled"
        @handleButtonClick="setSphere"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import SphereCard from '../common/SphereCard.vue';

import { UserType } from '../../types/UserType';
import UserService from '../../services/UserService';

import { bus } from '../../main';

const user = namespace('user');

@Component({
  components: {
    'sphere-card': SphereCard,
  },
})
export default class Sphere extends Vue {
  @user.State
  public user!: UserType;

  @user.Mutation
  public setUser!: (user: UserType) => void;

  private isDisabled = false;

  get cards() {
    return [
      {
        title: this.$t('whoAreYou.business'),
        icon: 'briefcase',
        value: 0,
      },
      {
        title: this.$t('whoAreYou.agency'),
        icon: 'store',
        value: 1,
      },
      {
        title: this.$t('whoAreYou.nonprofit'),
        icon: 'hand-holding-heart',
        value: 2,
      },
      {
        title: this.$t('whoAreYou.educational'),
        icon: 'graduation-cap',
        value: 3,
      },
      {
        title: this.$t('whoAreYou.private'),
        icon: 'user',
        value: 4,
      },
    ] || [];
  }

  private setSphere(value: number) {
    this.isDisabled = true;

    UserService.patch(this.user.id, { sphere: value })
      .then((res) => {
        this.setUser(res.data);
        this.isDisabled = false;
        bus.$emit('onShowNotification', this.$t('notification.sphereUpdated'));
      })
      .catch((e) => {
        bus.$emit('onShowNotification', this.$t('notification.somethingWrong'));
        console.log(e);
      });
  }
}
</script>
