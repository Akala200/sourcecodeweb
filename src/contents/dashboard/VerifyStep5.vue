<template>
  <verification-body>
    <template #header>
      <h4 class="card-title">
        Add New Account
      </h4>
    </template>

    <div class="add-bank-card">
      <div class="row my-4">
        <div class="col-md-12">
          <router-link
            to="/dashboard/add-bank-acc"
            class="d-block"
          >
            <div class="media">
              <span class="mr-3"><i class="fa fa-bank" /></span>
              <div class="media-body">
                <h4 class="mt-0 mb-3">
                  Bank account
                </h4>
                <p>
                  Use bank account to make purchase and sells. Prices are
                  locked today. Trades may take 4-5 days to process
                </p>
                <p class="text-muted">
                  Recommended for invest large amount
                </p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </verification-body>
</template>

<script>
import verificationBody from '@/components/dashboard/VerificationBody.vue'

export default {
  components: { verificationBody }
}
</script>
