import landing from '@/pages/Landing.vue';
import dashboard from '@/pages/Dashboard.vue';
import signIn from "@/pages/Signin.vue";
import Confirm from "@/pages/Confirm.vue";
import signUp from "@/pages/Signup.vue";
import reset from '@/pages/Reset.vue';
import bvn from "@/pages/Bvn.vue";
import lock from '@/pages/Lock.vue';
import payment_verification from "@/pages/payment_verification.vue";

import oneTimePassword1 from '@/pages/OneTimePassword1.vue';
import oneTimePassword2 from '@/pages/OneTimePassword2.vue';
import buySell from '@/contents/dashboard/BuySell.vue';
import home from '@/contents/dashboard/Home.vue';
import dashboardPageTitle from '@/components/dashboard/PageTitle.vue';
import addBankAcc from '@/contents/dashboard/AddBankAcc.vue';
import accounts from '@/contents/dashboard/Accounts.vue';
import history from '@/contents/dashboard/History.vue';
import termCondition from '@/contents/landing/TermCondition.vue';
import privacyPolicy from '@/contents/landing/PrivacyPolicy.vue';
import landingIntro from '@/contents/landing/Intro.vue';
import market from '@/contents/landing/Market.vue';
import features from '@/contents/landing/Features.vue';
import portfolio from '@/contents/landing/Portfolio.vue';
import testimonial from '@/contents/landing/Testimonial.vue';
import contact from '@/contents/landing/Contact.vue';
import completeTransfer from "@/contents/dashboard/CompleteTransfer.vue";

import landingPageTitle from '@/components/landing/PageTitle.vue';
import about from '@/contents/landing/About.vue';
import settings from '@/contents/dashboard/settings/Settings.vue';
import profile from '@/contents/dashboard/settings/Profile.vue';
import preferences from '@/contents/dashboard/settings/Preferences.vue';
import security from '@/contents/dashboard/settings/Security.vue';
import ChangeEmail from "@/contents/dashboard/settings/ChangeEmail.vue";
import verifyEmail from "@/contents/dashboard/settings/verifyemail.vue";

import linkedAccount from '@/contents/dashboard/settings/LinkedAccount.vue';
import verifyStep1 from '@/contents/dashboard/VerifyStep1.vue';
import verifyStep2 from '@/contents/dashboard/VerifyStep2.vue';
import verifyStep3 from '@/contents/dashboard/VerifyStep3.vue';
import verifyStep4 from '@/contents/dashboard/VerifyStep4.vue';
import verifyStep5 from '@/contents/dashboard/VerifyStep5.vue';
import verifyStep6 from '@/contents/dashboard/VerifyStep6.vue';
import addDebitCard from '@/contents/dashboard/AddDebitCard.vue';

export default [
  { path: "*", redirect: "/" },

  {
    path: "/",
    component: landing,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem("token");

      if (isAuthenticated !== null || isAuthenticated !== "")
        next({ path: "/dashboard" });
      else next();
    },
    children: [
      {
        path: "",
        components: {
          landingIntro,
          market,
          features,
          portfolio,
          testimonial,
          contact
        }
      },
      {
        path: "about",
        meta: { title: "About Us" },
        components: { pageTitle: landingPageTitle, about }
      },
      {
        path: "terms-of-service",
        meta: { title: "Terms & Condition" },
        components: { pageTitle: landingPageTitle, termCondition }
      },
      {
        path: "privacy-policy",
        meta: { title: "Privacy Policy" },
        components: { pageTitle: landingPageTitle, privacyPolicy }
      }
    ]
  },

  { path: "/sign-in", meta: { title: "Sign-In" }, component: signIn },
  { path: "/sign-up", meta: { title: "Sign-Up" }, component: signUp },
  { path: "/reset", meta: { title: "Reset Password" }, component: reset },
  {
    path: "/complete_setup",
    meta: { title: "Complete Setup" },
    component: bvn
  },

  {
    path: "/change_password",
    meta: { title: "Verify Code" },
    component: Confirm
  },

  {
    path: "/verify_code",
    meta: { title: "OTP Code" },
    component: oneTimePassword1
  },
  {
    path: "/confirm_password",
    meta: { title: "OTP Code" },
    component: oneTimePassword2
  },
  { path: "/lock", meta: { title: "Locked" }, component: lock },

  {
    path: "/dashboard",
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem("token");

      if (isAuthenticated == null || isAuthenticated == "")
        next({ path: "/sign-in" });
      else next();
    },
    component: dashboard,
    children: [
      { path: "", redirect: "home" },
      {
        path: "home",
        meta: { title: "Dashboard" },
        components: { default: home, dashboardPageTitle }
      },
      {
        path: "buy-sell",
        meta: { title: "Exchange" },
        components: { default: buySell, dashboardPageTitle }
      },
      {
        path: "successful_payment",
        meta: { title: "successful_payment" },
        components: payment_verification
      },
      {
        path: "accounts",
        meta: { title: "Accounts" },
        components: { default: accounts, dashboardPageTitle }
      },
      {
        path: "history",
        meta: { title: "History" },
        components: { default: history, dashboardPageTitle }
      },
      {
        path: "add-bank-acc",
        meta: { title: "Add Bank Account" },
        component: addBankAcc
      },
      {
        path: "add-debit-card",
        meta: { title: "Add Debit Card" },
        component: addDebitCard
      },
      {
        path: "verify-step-1",
        meta: { title: "Verify ID" },
        component: verifyStep1
      },
      {
        path: "verify-step-2",
        meta: { title: "Upload ID" },
        component: verifyStep2
      },
      {
        path: "verify-step-3",
        meta: { title: "ID Verifying..." },
        component: verifyStep3
      },
      {
        path: "verify-step-4",
        meta: { title: "ID Verified" },
        component: verifyStep4
      },
      {
        path: "verify-step-5",
        meta: { title: "Recommendation" },
        component: verifyStep5
      },
      {
        path: "verify-step-6",
        meta: { title: "Success" },
        component: verifyStep6
      },
    
      {
        path: "complete",
        meta: { title: "Complete" },
        component: completeTransfer
      },

      {
        path: "settings",
        components: { default: settings, dashboardPageTitle },
        children: [
          { path: "", meta: { title: "Edit Profile" }, component: profile },

          {
            path: "preferences",
            meta: { title: "Preferences" },
            component: preferences
          },
          {
            path: "edit-email",
            meta: { title: "Edit Email" },
            component: ChangeEmail
          },
          {
            path: "verify-email",
            meta: { title: "Verify Email" },
            component: verifyEmail
          },
          {
            path: "security",
            meta: { title: "Security" },
            component: security
          },
          {
            path: "linked-account",
            meta: { title: "Linked Account" },
            component: linkedAccount
          }
        ]
      }
    ]
  }
];

//ChangeEmail