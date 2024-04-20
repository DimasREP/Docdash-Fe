<template>
  <div class="w-screen">
    <!-- Content -->
    <div class="mx-auto mt-8 max-w-screen-lg px-2">
      <!-- Header -->
      <div class="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
        <p class="flex-1 text-base font-bold text-gray-900">Data Document</p>
        <div class="mt-4 sm:mt-0 text-center sm:text-left sm:w-auto flex-1">
          <div class="flex items-center justify-center sm:justify-start">
            <div class="flex items-center">
              <label for="" class="mr-2 flex-shrink-0 text-sm font-medium text-gray-900">
                Search:
              </label>
              <input type="text"
                class="sm: mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm"
                placeholder="Search..." />
            </div>
            <button @click="showModal = true"
              class="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow">
              <svg class="mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  class=""></path>
              </svg>
              ADD
            </button>
          </div>
        </div>
      </div>
      <!-- Table -->
      <div class="mt-6 overflow-hidden rounded-xl border shadow">
        <table class="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
          <thead class="hidden border-b lg:table-header-group">
            <tr class="">
              <td width="20%" class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                No
              </td>
              <td width="15%" class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                Nama File
              </td>
              <td width="15%" class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                File
              </td>
              <td width="15% " class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                Upload
              </td>
              <td width="15%" class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                Update
              </td>
              <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                Action
              </td>
            </tr>
          </thead>
          <tbody class="lg:border-gray-300">
            <tr v-for="(item, index) in getDocument" :key="item.id">
              <td width="20%" class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                {{ index + 1 }}
              </td>
              <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                {{ item.namefile }}
              </td>
              <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                {{ item.file }}
              </td>
              <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                {{ item.createdAt }}
              </td>
              <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                {{ item.updatedAt }}
              </td>
              <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                |
                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Modal untuk tambah data -->
    <div v-if="showModal" class="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <div class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full mx-6">
        <div class="py-4 px-6">
          <div class="flex justify-between items-center">
            <h2 class="text-lg font-bold text-gray-900">Tambah Data</h2>
            <button @click="showModal = false" class="text-gray-500 hover:text-gray-600 focus:outline-none">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <form @submit.prevent="addData">
            <div class="mt-4">
              <label class="block text-sm font-medium text-gray-700">Nama File:</label>
              <input v-model="newData.namefile" type="text" required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            </div>
            <div class="mt-4">
              <label class="block text-sm font-medium text-gray-700">File:</label>
              <input type="file" @change="onFileChange" accept="" multiple
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            </div>

            <div class="mt-4 flex justify-end">
              <button type="submit"
                class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Simpan</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      showModal: false,
      newData: {
        namefile: '',
        file: '',
      }
    }
  },
  computed: {
    ...mapGetters("document", ["getDocument"]),
  },
  methods: {
    ...mapActions("document", ["fetchDocument"], ["addDocument"]),
    async addData() {
      const documentData = {
        namefile: this.newData.namefile,
        file: this.newData.file
      };
      try {
        const success = await this.$store.dispatch(
          "document/addDocument",
          documentData
        );
        this.newData.namefile = "";
        this.newData.file = "";
        this.showAddPopup = false;
        if (success) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "File Berhasil Ditambahkan!",
            showConfirmButton: false,
            timer: 2000,
          });
          this.fetchDocument();
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Add FIle failed! Please try again.",
        });
        console.error("Error adding file:", error);
      }
    },
  },
  created() {
    this.fetchDocument();

  },
}
</script>
