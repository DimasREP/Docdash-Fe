<template>
  <div class="w-screen">
    <div class="mx-auto mt-8 max-w-screen-lg px-2">
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

            <button type="button"
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

      <div class="mt-6 overflow-hidden rounded-xl border shadow">
        <table class="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
          <thead class="hidden border-b lg:table-header-group">
            <tr class="">
              <td width="50%" class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                No
              </td>

              <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                Document
              </td>

              <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                Action
              </td>
            </tr>
          </thead>

          <tbody class="lg:border-gray-300">
            <tr class="">
              <td width="50%" class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                1
                <div class="mt-1 lg:hidden">
                  <p class="font-normal text-gray-500">07 February, 2022</p>
                </div>
              </td>

              <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                Fashion
              </td>

              <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                |
                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                           
              </td>
            </tr>

            <tr class="">
              <td width="50%" class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                2
                <div class="mt-1 lg:hidden">
                  <p class="font-normal text-gray-500">09 January, 2022</p>
                </div>
              </td>

              <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                Fashion
              </td>

              <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                |
                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                           
              </td>
            </tr>

            <tr class="">
              <td width="50%" class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                3
                <div class="mt-1 lg:hidden">
                  <p class="font-normal text-gray-500">15 December, 2021</p>
                </div>
              </td>

              <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                Fashion
              </td>

              <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                |
                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                           
              </td>
            </tr>

            <tr class="">
              <td width="50%" class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                4
                <div class="mt-1 lg:hidden">
                  <p class="font-normal text-gray-500">14 November, 2021</p>
                </div>
              </td>

              <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                Fashion
              </td>

              <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                |
                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                           
              </td>
            </tr>

            <tr class="">
              <td width="50%" class="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                5
                <div class="mt-1 lg:hidden">
                  <p class="font-normal text-gray-500">15 October, 2021</p>
                </div>
              </td>

              <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                Fashion
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
  </div>
</template>
