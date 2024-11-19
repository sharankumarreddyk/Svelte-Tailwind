import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { o as openModal, C as CTAs, H as Header } from "../../chunks/Header.js";
const app = "";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="py-16 sm:py-20 md:py-24 px-4 md:px-8" data-svelte-h="svelte-drzsbc"><div class="max-w-[1200px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-base"><div class="flex flex-col gap-4 md:col-span-2"><h1 class="font-semibold">Dhanush <span class="text-indigo-400">fitness</span></h1></div> <div class="flex flex-col gap-4"><p class="font-bold poppins text-base sm:text-lg">Support</p> <a href="" target="_blank" class="cursor-pointer hover:text-indigo-400 duration-200">Contact Us</a></div> <div class="flex flex-col gap-4"><p class="font-bold poppins text-base sm:text-lg">Research</p> <a href="" target="_blank" class="cursor-pointer hover:text-indigo-400 duration-200">Read the science</a></div> <div class="flex flex-col gap-4"><p class="font-bold poppins text-base sm:text-lg">Follow Us</p> <a href="" target="_blank" class="cursor-pointer hover:text-indigo-400 duration-200"><i class="fa-brands fa-instagram pr-2"></i>
                Instagram</a> <a href="" target="_blank" class="cursor-pointer hover:text-indigo-400 duration-200"><i class="fa-brands fa-youtube pr-2"></i>
                YouTube</a> <a href="" target="_blank" class="cursor-pointer hover:text-indigo-400 duration-200"><i class="fa-brands fa-facebook pr-2"></i>
                Facebook</a> <a href="" target="_blank" class="cursor-pointer hover:text-indigo-400 duration-200"><i class="fa-brands fa-twitter pr-2"></i>
                Twitter</a></div></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let outerHeight;
  let $openModal, $$unsubscribe_openModal;
  $$unsubscribe_openModal = subscribe(openModal, (value) => $openModal = value);
  let y;
  outerHeight = 0;
  $$unsubscribe_openModal();
  return `${$openModal ? `<div class="fixed top-0 left-0 w-screen h-screen border-b bg-white z-50 flex flex-col gap-8 p-5 px-8 md:hidden"><div class="flex items-center justify-between gap-4 border-b pb-2"><h1 class="font-semibold" data-svelte-h="svelte-egf1li">Swoley <span class="text-indigo-400">Moley</span></h1> <button class="outline-none border-none" data-svelte-h="svelte-id4wlh"><i class="fa-solid fa-xmark text-2xl"></i></button></div> <div class="flex flex-col gap-4 flex-1"><button class="border-none outline-none p-2 group duration-200 cursor-pointer text-left" data-svelte-h="svelte-v7agt"><p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold">Product <i class="fa-solid fa-chevron-right text-xl pl-4"></i></p></button> <button class="border-none outline-none p-2 group duration-200 cursor-pointer text-left" data-svelte-h="svelte-18lcaxd"><p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold">Reviews <i class="fa-solid fa-chevron-right text-xl pl-4"></i></p></button> <button class="border-none outline-none p-2 group duration-200 cursor-pointer text-left" data-svelte-h="svelte-1k5qvq5"><p class="duration-200 group-hover:pl-2 poppins text-3xl font-semibold">FAQs <i class="fa-solid fa-chevron-right text-xl pl-4"></i></p></button></div> <div class="flex flex-col items-center justify-center">${validate_component(CTAs, "CtAs").$$render($$result, {}, {}, {})}</div></div>` : ``} ${y > outerHeight ? `<div class="bg-white fixed top-0 left-0 w-full flex flex-col z-20 px-4 fadeIn">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}</div>` : ``} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}  `;
});
export {
  Layout as default
};
