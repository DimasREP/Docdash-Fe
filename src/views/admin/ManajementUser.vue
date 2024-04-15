<template>
  <div class="text-gray-900 ml-64 mt-16 bg-gray-400">
    <div class="p-4 flex">
      <h1 class="text-3xl">Users</h1>
    </div>
    <div class="px-3 py-4 flex justify-center">
      <table class="w-full text-md bg-white shadow-md rounded mb-4">
        <tbody>
          <tr class="border-b">
            <th class="text-left p-3 px-5">Name</th>
            <th class="text-left p-3 px-5">Email</th>
            <th class="text-left p-3 px-5">Role</th>
            <th class="text-left p-3 px-5">Action</th>
          </tr>
          <tr v-for="user in getMe" :key="user.id" class="border-b">
            <td class="p-3 px-5">{{ user.username }}</td>
            <td class="p-3 px-5">{{ user.email }}</td>
            <td class="p-3 px-5">{{ user.role }}</td>
            <td class="p-3 px-5">
              <button
                type="button"
                class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                @click="onDeleteUser(user.id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Swal from "sweetalert2";

export default {
  computed: {
    ...mapGetters("auth", ["getMe"]),
  },
  methods: {
    ...mapActions("auth", ["fetchAllUsers", "deleteUser"]),
    async onDeleteUser(userId) {
      // Menampilkan pop up Sweet Alert konfirmasi
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      // Jika pengguna mengonfirmasi penghapusan
      if (result.isConfirmed) {
        try {
          // Panggil aksi deleteUser dengan userId
          await this.deleteUser(userId);
          // Tampilkan Sweet Alert sukses
          await Swal.fire("Deleted!", "Your user has been deleted.", "success");
          // Refresh data pengguna setelah penghapusan
          this.fetchAllUsers();
        } catch (error) {
          // Tangani kesalahan jika ada
          Swal.fire(
            "Error!",
            "An error occurred while deleting user.",
            "error"
          );
        }
      }
    },
  },
  created() {
    this.fetchAllUsers();
  },
};
</script>

<style>
/* Tambahkan CSS sesuai kebutuhan */
</style>
