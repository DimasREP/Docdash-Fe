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
                placeholder="Search..." v-model="searchQuery" @input="filterDocuments" />
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
            <template v-if="filteredDocuments.length > 0">
              <tr v-for="(item, index) in filteredDocuments" :key="item.id">
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
                <div class="bungkus ml-5 mt-6" style="display: flex; align-items: center; gap: 5px ">
                  <button @click="showEditPopup(item)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                      class="w-6 h-6 text-blue-700">
                      <path
                        d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                      <path
                        d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                    </svg>
                  </button>
                  |
                  <button @click="deleteFolder(item.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                      class="w-6 h-6 text-red-600">
                      <path fill-rule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                        clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
              </tr>
            </template>
            <template v-else>
              <tr>
                <td colspan="6" class="text-center py-4 text-gray-500">Nama file yang Anda cari tidak ada.</td>
              </tr>
            </template>
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
          <form @submit.prevent="submitData" enctype="multipart/form-data">
            <div class="mt-4">
              <label class="block text-sm font-medium text-gray-700">ID Folder:</label>
              <input v-model="formKey.folder_id" type="text" required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div class="mt-4">
              <label class="block text-sm font-medium text-gray-700">Nama File:</label>
              <input v-model="formKey.namefile" type="text" required
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            </div>
            <div class="mt-4">
              <label class="block text-sm font-medium text-gray-700">File:</label>
              <input type="file" @change="handleFileUpload" name="file" id="file"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>

            <div class="mt-4 flex justify-end">
              <button type="submit"
                class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      showModal: false,
      searchQuery: "",
      formKey: {
        folder_id: "",
        namefile: "",
        file: null
      },
    };
  },
  computed: {
    ...mapGetters("document", ["getDocument"]),
    filteredDocuments() {
      return this.getDocument.filter(item =>
        item.namefile.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    ...mapActions("document", ["fetchDocument", "addData"]),
    handleFileUpload(event) {
      const fileInput = event.target.files[0];
      if (!fileInput) return;
      if (fileInput) {
        const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
        if (!allowedTypes.includes(fileInput.type)) {
          this.$message.error(
            "Invalid file type. Please upload a valid image file."
          );
          return;
        }

        const maxSize = 5 * 1024 * 1024; // 5 MB in bytes
        if (fileInput.size > maxSize) {
          this.$message.error(
            "File size exceeds the limit. Please upload a file less than 5 MB."
          );
          return;
        }
        // Set file object to formKey
        this.formKey.file = fileInput;
      } else {
        this.formKey.file = null;
      }
    },
    async submitData() {
      try {
        const formData = new FormData();
        Object.keys(this.formKey).forEach((key) => {
          formData.append(key, this.formKey[key]);
        });

        await this.addData(formData);
        this.showModal = false;
        this.fetchDocument();
      } catch (error) {
        console.error("Error adding file:", error);
      }
    },
    filterDocuments() {
      // Fetch documents when search query changes
      this.fetchDocument();
    },
  },
  created() {
    this.fetchDocument();
  },
};
</script>
