<template>
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">
        Security
      </h4>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-xl-6">
          <div class="phone_verify">
            <h4 class="card-title mb-3">
              Email Address
            </h4>
            <form @submit.prevent="$router.push('/otp-2')">
              <div class="form-row align-items-center">
                <div class="form-group col-xl-10">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="hello@example.com "
                  >
                  <button class="btn btn-success mt-4">
                    Update Email
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-xl-12">
          <div class="phone_verified">
            <h5> <span><i class="fa fa-envelope" /></span> hello@example.com</h5>
            <div class="verify">
              <div class="verified">
                <span><i class="la la-check" /></span>
                <a href="#">Verified</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
