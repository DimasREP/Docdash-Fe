<template>
  <div class="flex h-screen w-screen items-center overflow-hidden px-2">
    <!-- Login -->
    <div class="relative flex w-96 flex-col space-y-5 rounded-lg border bg-white px-5 py-10 shadow-xl sm:mx-auto">
      <div
        class="-z-10 absolute top-4 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg bg-blue-600 sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0">
      </div>
      <div class="mx-auto mb-2 space-y-3">
        <h1 class="text-center text-3xl font-bold text-gray-700">Sign in</h1>
        <p class="text-gray-500">Sign in to access your account</p>
      </div>

      <div>
        <div class="relative mt-2 w-full">
          <input v-model="formKey.username" autocomplete="off" id="username" name="username" type="text"
            class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
            placeholder="Username" />
          <label for="email"
            class="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300">
            Enter Your Username
          </label>
        </div>
      </div>

      <div>
        <div class="relative mt-2 w-full">
          <input v-model="formKey.password" autocomplete="off" id="password" name="password" type="password"
            class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
            placeholder="Password" />
          <label for="password"
            class="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300">
            Enter Your Password</label>
        </div>
      </div>
      <div class="flex w-full items-center">
        <button @click="loginUsers()" class="bg-blue-500 text-white rounded-md px-2 py-1">
          LOGIN
        </button>
        <a class="w-full text-center text-sm font-medium text-gray-600 hover:underline" href="#">Forgot your
          password?</a>
      </div>
      <p class="text-center text-gray-600">
        Don't have an account?
        <router-link to="/register">
          <a class="whitespace-nowrap font-semibold text-gray-900 hover:underline">Sign up</a>
        </router-link>
      </p>
    </div>

    <!-- /Login -->
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      formKey: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("auth", ["login"]),
    async loginUsers() {
      try {
        const response = await this.login(this.formKey);

        if (response && response.token && response.role) {
          const { token, role } = response;
          localStorage.setItem("token", token);
          localStorage.setItem("role", role);

          await Swal.fire({
            title: "Login Success",
            text: "Welcome!",
            icon: "success",
            confirmButtonText: "OK",
          });

          // Redirect user according to their role
          if (role === "user") {
            this.$router.push("/");
          } else if (role === "admin") {
            this.$router.push("/admin");
          }
        } else {
          // Invalid response from server
          throw new Error("Invalid response from server");
        }
      } catch (error) {
        let errorMessage = "An error occurred during login";
        if (error.response && error.response.status === 401) {
          errorMessage = error.response.data.msg;
        }
        Swal.fire({
          title: "Error",
          text: errorMessage,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    },
  },
};
</script>
