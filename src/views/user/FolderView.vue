<template>
  <div v-if="getFolder == false"></div>

  <div v-else>
    <div class="w-screen">
      <div class="mx-auto mt-8 max-w-screen-lg px-2">
        <div class="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
          <p class="flex-1 text-base font-bold text-gray-900">Folder</p>

          <div class="mt-4 sm:mt-0 text-center sm:text-left sm:w-auto flex-1 sm:flex-shrink-0">
            <div class="flex items-center justify-center sm:justify-start">
              <div class="flex items-center">
                <label for="" class="mr-2 flex-shrink-0 text-sm font-medium text-gray-900">
                  Search:
                </label>
                <input v-model="searchKeyword" @input="search" type="text"
                  class="sm: mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm"
                  placeholder="Search..." />
              </div>

              <button type="button" @click="showAddPopup = true"
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

        <div class="mt-6 overflow-hidden rounded-xl border shadow bg-teal-700 w-auto">
          <table class="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
            <thead class="hidden border-b lg:table-header-group">
              <tr class="">
                <td width="20%" class="whitespace-normal py-4 text-sm font-medium text-white sm:px-10">
                  ID Folder
                </td>

                <td width="50%" class="whitespace-normal py-4 text-sm font-medium text-white sm:px-10">
                  Folder Name
                </td>

                <td class="whitespace-normal py-4 text-sm font-medium text-white sm:px-10">
                  Action
                </td>
              </tr>
            </thead>
            <tbody class=" bg-slate-400">
              
              <tr v-if="filteredFolder.length === 0">
                <td colspan="3" class="text-center py-4 text-black">
                  Data tidak ditemukan
                </td>
              </tr>

              <tr v-else v-for="item in filteredFolder" :key="item.id">
                <td class="whitespace-no-wrap py-5 text-xs font-bold text-black sm:px-12 ">
                  <span style="font-size: 18px;"> {{ item?.id }}</span>
                </td>
                <td class="whitespace-no-wrap py-5 text-xs font-bold text-black sm:px-8">
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ">
                      <path
                        d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" />
                    </svg>
                    <span style="font-size: 18px; margin-left: 10px;">{{ item?.FolderName }}</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="bungkus ml-2" style="display: flex; align-items: center; gap: 5px ">
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
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <form @submit.prevent="addData">
        <!-- Pop-up Tambah Data -->
        <div v-if="showAddPopup"
          class="fixed inset-0 z-10 overflow-y-auto bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div class="bg-white p-8 rounded-lg shadow-xl w-96">
            <h2 class="text-lg font-semibold mb-4">Tambah Data</h2>
            <input v-model="formKey.user_id" type="text" class="border border-gray-300 p-2 rounded-lg mb-4 w-full"
              placeholder="user_id" />
            <input v-model="formKey.FolderName" type="text" class="border border-gray-300 p-2 rounded-lg mb-4 w-full"
              placeholder="Folder Name" />
            <div class="flex justify-end">
              <button class="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2">
                Add
              </button>
              <button @click="cancelAdd" class="bg-red-500 text-white px-4 py-2 rounded-lg">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
      <!-- Pop-up Edit Data -->
      <form>
        <div v-if="showEditPopupData"
          class="fixed inset-0 z-10 overflow-y-auto bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div class="bg-white p-8 rounded-lg shadow-xl w-96">
            <h2 class="text-lg font-semibold mb-4">Edit Data</h2>
            <input v-model="editFormData.id" type="text" class="border border-gray-300 p-2 rounded-lg mb-4 w-full"
              placeholder="ID Folder" disabled />
            <input v-model="editFormData.FolderName" type="text"
              class="border border-gray-300 p-2 rounded-lg mb-4 w-full" placeholder="Folder Name" />
            <div class="flex justify-end">
              <button @click="updateData" class="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2">
                Update
              </button>
              <button @click="cancelEdit" class="bg-red-500 text-white px-4 py-2 rounded-lg">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      showAddPopup: false,
      showEditPopupData: false,
      formKey: {
        user_id: "",
        FolderName: "",
      },
      editFormData: {
        id: "",
        FolderName: "",
      },
      searchKeyword: "",
    };
  },

  computed: {
    ...mapGetters("folder", ["getFolder"]),
    folder() {
      return this.getFolder?.rows;
    },
    filteredFolder() {
      if (this.searchKeyword === "") {
        return this.folder;
      } else {
        return this.folder.filter(item =>
          item.FolderName.toLowerCase().includes(this.searchKeyword.toLowerCase())
        );
      }
    },
  },

  methods: {
    ...mapActions("folder", [
      "addFolder",
      "fetchFolder",
      "updateFolder",
      "deleteFolder",
    ]),

    async addData() {
      const folderData = {
        user_id: this.formKey.user_id,
        FolderName: this.formKey.FolderName,
      };
      try {
        const success = await this.$store.dispatch(
          "folder/addFolder",
          folderData
        );
        this.formKey.FolderName = "";
        this.showAddPopup = false;
        if (success) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Folder Berhasil Ditambahkan!",
            showConfirmButton: false,
            timer: 2000,
          });
          this.fetchFolder();
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Add Folder failed! Please try again.",
        });
        console.error("Error adding folder:", error);
      }
    },

    search() {
      this.fetchFolder();
    },

    showEditPopup(item) {
      this.editFormData.id = item.id;
      this.editFormData.FolderName = item.FolderName;
      this.showEditPopupData = true;
    },

    async updateData() {
      const folderData = {
        id: this.editFormData.id,
        FolderName: this.editFormData.FolderName,
      };
      try {
        const success = await this.$store.dispatch(
          "folder/updateFolder",
          folderData
        );
        this.editFormData.id = "";
        this.editFormData.FolderName = "";
        this.showEditPopupData = false;
        if (success) {
          alert("Gagal edit folder")
        }
      } catch (error) {
        alert("Berhasil edit folder")
          this.fetchFolder();
       
      }
    },

    async deleteFolder(folderId) {
      try {
        const result = await Swal.fire({
          title: "Are you sure?",
          text: "You will not be able to recover this folder!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Yes, delete it!",
        });
        if (result.isConfirmed) {
          const success = await this.$store.dispatch(
            "folder/deleteFolder",
            folderId
          );
          if (success) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Delete Folder failed! Please try again.",
            });
          }
        }
      } catch (error) {
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "Your folder has been deleted.",
        });
        this.fetchFolder();
      }
    },

    cancelAdd() {
      this.showAddPopup = false;
      this.formKey.FolderName = "";
    },

    cancelEdit() {
      this.showEditPopupData = false;
      this.editFormData.id = "";
      this.editFormData.FolderName = "";
    },
  },
  mounted() {
    this.fetchFolder();
  },
};
</script>
