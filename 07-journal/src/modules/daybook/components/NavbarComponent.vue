<template>
  <nav class="navbar bg-primary">
    <a class="navbar-brand text-white">
      <img
        src="@/assets/logo.png"
        alt="Vue logo"
        class="d-inline-block align-text-top mx-2"
        height="24"
      />
      {{ username }}
    </a>

    <div class="d-flex">
      <button class="btn btn-outline-info mx-2" @click="onLogout">
        <i class="fas fa-sign-out-alt"></i>
        <span>Logout</span>
      </button>
    </div>
  </nav>
</template>

<script>
import useAuth from "@/modules/auth/composables/useAuth";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { username, logout } = useAuth();

    const router = useRouter();
    return {
      username,
      onLogout: () => {
        router.push({ name: "login" });
        logout();
      },
    };
  },
};
</script>
