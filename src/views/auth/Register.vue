<template>
  <div class="flex h-screen w-full items-center justify-center bg-gray-100">
    <div class="w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg sm:flex">
      <div class="m-2 w-full rounded-2xl bg-gray-400 bg-cover bg-center text-white sm:w-2/5" style="background-image: url(https://cdn.sketchrepo.com/images/2x/material-design-ui-kit-free-h2.jpg)"></div>
      <div class="w-full sm:w-3/5">
        <div class="p-8">
          <h1 class="text-3xl font-black text-slate-700">Sign up</h1>
          <p class="mt-2 mb-5 text-base leading-tight text-gray-600">Create an account to get access to Docdash</p>
          <form class="mt-8" @submit.prevent="registerUser">
            <div class="relative mt-2 w-full">
              <input v-model="formKey.username" type="text" id="username" class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
              <label for="username" class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your Username </label>
            </div>
            <div class="relative mt-2 w-full">
              <input v-model="formKey.email" type="text" id="email" class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
              <label for="email" class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your Email </label>
            </div>
            <div class="relative mt-2 w-full">
              <input v-model="formKey.password" type="password" id="password" class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
              <label for="password" class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your Password</label>
            </div>
            <div class="relative mt-2 w-full">
              <input v-model="formKey.role" type="text" id="role" class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
              <label for="role" class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your Role</label>
            </div>
            <button class="mt-4 w-full cursor-pointer rounded-lg bg-blue-600 pt-3 pb-3 text-white shadow-lg hover:bg-blue-400" type="submit">Create account</button>
          </form>
          <div class="mt-4 text-center">
            <p class="text-sm text-gray-600">Already have an account? <router-link to="/login" class="font-bold text-blue-600 no-underline hover:text-blue-400">Sign in</router-link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      formKey: {
        username: "",
        email: "",
        password: "",
        role: "",
      }
    };
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
  },
  methods: {
    ...mapActions('auth', ['register']),
    async registerUser() {
      if (!this.formKey.username || !this.formKey.email || !this.formKey.password || !this.formKey.role) {
        // Tampilkan peringatan jika ada field yang kosong
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'Please fill in all fields.',
        });
        return;
      }

      const credentials = {
        username: this.formKey.username,
        email: this.formKey.email,
        password: this.formKey.password,
        role: this.formKey.role
      };
      try {
    await this.$store.dispatch("auth/register", credentials);
    
    // Tampilkan pesan sukses
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Registration successful! You can now log in.',
    });

    // Redirect ke halaman login setelah registrasi berhasil
    this.$router.push("/login");

    console.log('User registered successfully.');
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Registration failed! Please try again.',
    });
    console.error('Error registering user:', error);
  }
    }
  }
};
</script>
