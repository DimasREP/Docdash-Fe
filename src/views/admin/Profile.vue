<template>
  <div class="mt-28 ml-96 m-10 max-w-sm">
    <div class="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
      <div class="relative mx-auto w-36 rounded-full">
        <img class="mx-auto h-auto w-full rounded-full"
          src="https://cdn.idntimes.com/content-images/post/20240207/33bac083ba44f180c1435fc41975bf36-ca73ec342155d955387493c4eb78c8bb.jpg"
          alt="" />
      </div>
      <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
        <li class="flex items-center py-3 text-sm">
          <span>Username</span>
          <span class="ml-auto">{{ getMe.username }}</span> 
        </li>
        <li class="flex items-center py-3 text-sm">
          <span>Email</span>
          <span class="ml-auto">{{ getMe.email }}</span> 
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("auth", ["getMe"]),
  },
  methods: {
    ...mapActions("auth", ["fetchMe"]),
  },
  created() {
    this.fetchMe(); // Memanggil aksi fetchMe untuk mendapatkan data pengguna
  },
};
</script>
