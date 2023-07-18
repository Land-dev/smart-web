import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" class="flex items-center">
      <img src="https://smartmagnet.org/wp-content/uploads/2021/03/cropped-cropped-SMARTlogo_nbgv_FINAL8-1.jpg" class="h-8 mr-3" alt="Flowbite Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SMART Project</span>
  </a>
  <ul class="list-none space-x-10">
    <li class ="display: inline">
      <Link href="/about">
      About
      </Link>
    </li>
    <li class="display: inline">
      <Link href="/login">
      Sign In
      </Link>
    </li>
  </ul>
    
  </div>
  
</nav>

  );
};
export default Navbar;