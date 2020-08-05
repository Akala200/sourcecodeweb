<template>
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">
        Linked Account or Card
      </h4>
    </div>
    <div class="card-body">
      <div class="form">
        <ul class="linked_account">
          <li>
            <div class="row">
              <div class="col-9">
                <div class="media">
                  <span class="mr-3"><i class="fa fa-bank" /></span>
                  <div class="media-body">
                    <h5 class="mt-0 mb-1">
                      Bank of America
                    </h5>
                    <p>Bank **************5421</p>
                  </div>
                  <div class="edit-option">
                    <a href="#"><i class="fa fa -eye" /></a>
                    <a href="#"><i class="fa fa-pencil" /></a>
                    <a href="#"><i class="fa fa-trash" /></a>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="verify">
                  <div class="verified">
                    <span><i class="la la-check" /></span>
                    <a href="#">Verified</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li />
          <ul />
        </ul>

        <div class="mt-5">
          <router-link
            to="/dashboard/verify-step-5"
            class="btn btn-primary px-4 mr-3"
          >
            Add Bank
            Account
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
