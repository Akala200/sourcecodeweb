<template>
  <div class="sidebar">
    <div class="menu">
      <ul>
        <li>
          <router-link
            v-b-tooltip.hover="{placement: 'right'}"
            to="/dashboard/home"
            title="Home"
          >
            <span><i class="la la-igloo" /></span>
          </router-link>
        </li>
        <li>
          <router-link
            v-b-tooltip.hover="{placement: 'right'}"
            to="/dashboard/buy-sell"
            title="Exchange"
          >
            <span><i class="la la-exchange-alt" /></span>
          </router-link>
        </li>
        <li>
          <router-link
            v-b-tooltip.hover="{placement: 'right'}"
            to="/dashboard/accounts"
            title="Account"
          >
            <span><i class="la la-user" /></span>
          </router-link>
        </li>
        <li>
          <router-link
            v-b-tooltip.hover="{placement: 'right'}"
            to="/dashboard/settings"
            title="Setting"
          >
            <span><i class="la la-tools" /></span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
