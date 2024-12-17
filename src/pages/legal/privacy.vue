<script setup lang="ts">

import AppBreadcrumbs from "~/components/App/AppBreadcrumbs.vue";
</script>

<template>
  <v-container class="fill-height">
    <v-row class="fill-height">
      <v-col class="fill-height overflow-y-auto scrollbar-invisible" :md="9" :offset-md="2">

        <div>

          <AppBreadcrumbs title="Privacy Policy" />

          <section>
            <h2>Information We Collect</h2>
            <p>Gridsky does not collect, store, or process any personal information or user data.</p>
          </section>
          <section>
            <h2>Cookies and Tracking</h2>
            <p>We do not use cookies, tracking technologies, or any form of analytics that collect or track your
              data.</p>
          </section>
          <section>
            <h2>Third-Party Services</h2>
            <p>
              While Gridsky provides access to the Bluesky decentralized network, we do not control or manage data
              processed
              by the Bluesky network or other third-party services you may interact with through our platform.
              We encourage you to review their respective privacy policies for more details.
            </p>
          </section>
          <section>
            <h2>Your Privacy Rights</h2>
            <p>
              Since we do not collect or store personal information, there is no data to access, modify, or
              delete.
            </p>
          </section>

        </div>

      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.v-col {
  display: grid;
  align-items: center;
}

section {
  &:not(:last-child) {
    margin: 0 0 24px 0;
  }

  h2 {
    margin-bottom: 12px;
  }

  p {
    opacity: 0.8;
  }
}
</style>