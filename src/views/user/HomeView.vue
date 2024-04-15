<template>
  <section class="w-screen py-10">
    <h1 class="mb-6 text-left font-sans text-4xl font-bold pl-20">Home</h1>
    <div
      class="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-3 sm:grid-cols-2 md:grid-cols-3 lg:gap-10"
    >
      <article
        class="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg"
      >
        <img
          class="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48"
          src="https://images.unsplash.com/photo-1611002214172-792c1f90b59a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="blog"
        />
        <div class="py-6 px-5">
          <a
            href="/folder"
            class="group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600"
          >
            <span>▷ </span>
            <span class="underline">Lihat Lebih Detail</span>
          </a>
        </div>
        <div class="flex flex-wrap items-center justify-between px-6 pt-1 pb-4">
          <div class="mt-1"></div>
        </div>
      </article>

      <article
        class="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg"
      >
        <img
          class="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48"
          src="https://images.unsplash.com/photo-1611002214172-792c1f90b59a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="blog"
        />
        <div class="py-6 px-5">
          <a
            href="/document"
            class="group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600"
          >
            <span>▷ </span>
            <span class="underline">Lihat Lebih Detail</span>
          </a>
        </div>
        <div class="flex flex-wrap items-center justify-between px-6 pt-1 pb-4">
          <div class="mt-1"></div>
        </div>
      </article>

      <article
        class="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg"
      >
        <img
          class="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48"
          src="https://images.unsplash.com/photo-1611002214172-792c1f90b59a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="blog"
        />
        <div class="py-6 px-5">
          <a
            href="#"
            class="group text-lg font-bold focus:text-indigo-600 hover:text-indigo-600"
          >
            <span>▷ </span>
            <span class="underline">Lihat Lebih Detail</span>
          </a>
        </div>
        <div class="flex flex-wrap items-center justify-between px-6 pt-1 pb-4">
          <div class="mt-1"></div>
        </div>
      </article>
    </div>
  </section>

  <div class="bg-white py-6 sm:py-8 lg:py-12 mt-12">
    <div class="mx-auto max-w-screen-xl px-4 md:px-8">
      <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
        <div class="md:pt-8 lg:flex lg:flex-col lg:justify-center">
          <p class="text-center font-bold text-green-500 md:text-left">
            Who we are
          </p>

          <h1
            class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left"
          >
            Operational since 1967
          </h1>

          <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            accusamus esse cum, praesentium laudantium enim pariatur magnam
            accusantium illum animi? Quos quisquam at laborum eius?
          </p>
        </div>
        <div>
          <div
            class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto"
          >
            <img
              src="https://images.unsplash.com/photo-1554743365-a80c1243316e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              loading="lazy"
              alt="Photo by Martin Sanchez"
              class="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div class="md:col-span-2">
          <h2
            class="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left"
          >
            About us
          </h2>

          <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            veritatis a suscipit similique cum obcaecati maxime, fugit officia
            sunt. Laudantium est repellendus, necessitatibus totam, deleniti
            distinctio aliquid assumenda dolore voluptas molestiae perspiciatis
            temporibus ex ea.
          </p>
        </div>
      </div>
    </div>
  </div>

  <Footer></Footer>
</template>
<script setup>
// import Footer from "../components/user/Footer.vue";
</script>
