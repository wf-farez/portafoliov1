/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderSlot, s as spreadAttributes, e as renderComponent, f as renderHead, F as Fragment } from '../chunks/astro/server_DUCXgumC.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Intro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center mt-20"> <img class="animate-pulse" src="images/cuy.jpg" alt="" width="300" height="300"> </div> <div> <h1 class="text-1xl md:text-2xl lg:text-3xl font-bold flex justify-center"> <b class="text-yellow-300 "> &lt;&gt;  
      Transformando Ideas en Código
    &lt;/&gt; </b> </h1> </div>`;
}, "D:/PROYECTOS NUEVOS/ASTRO/portafoliov1/src/components/Intro.astro", void 0);

const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-600"> <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> <a href="" class="flex items-center space-x-3 rtl:space-x-reverse"> <img src="images/perfil.jpg" class="h-8 rounded-full" alt="Walter Farez"> <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Walter Farez</span> </a> <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"> <a href="mailto:fabian.fp95@gmail.com" target="_blank" class="lg:visible xl:visible md:invisible sm:invisible bg-yellow-300 text-black focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm px-4 py-2 text-center focus:ring-while-800">fabian.fp95@gmail.com</a> <a id="menu-button" data-collapse-toggle="navbar-sticky" data-nav-toggle="#navbar-sticky" href="#" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </a> </div> <div id="menu-open" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 navbar" id="navbar-sticky"> <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"> <li> <a href="#principal" class="btn  block py-2 px-3 text-white rounded md:bg-transparen md:p-0 hover:text-yellow-300" aria-current="page">Acerca de mi</a> </li> <li> <a href="#experiencia" class="btn block py-2 px-3 text-white  rounded md:bg-transparen md:p-0 hover:text-yellow-300 ">Experiencia</a> </li> <li> <a href="#proyectos" class="btn block py-2 px-3 text-white  rounded md:bg-transparen md:p-0 hover:text-yellow-300 ">Proyectos</a> </li> </ul> </div> </div> </nav> `;
}, "D:/PROYECTOS NUEVOS/ASTRO/portafoliov1/src/layouts/NavBar.astro", void 0);

const $$Astro$6 = createAstro();
const $$CardProjects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$CardProjects;
  const { href, title, descriptions, img, active } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <h1 class="text-white mt-9 mb-4"> ${title}</h1> ${active == 1 && renderTemplate`<figure class="relative h-80 w-full"> <img class="h-full w-full rounded-xl object-cover object-center"${addAttribute(img, "src")} alt="projects image"> <figcaption class="absolute bottom-10 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-blue-400 bg-blue-950 py-4 px-6 shadow-lg shadow-black/5 saturate-50 backdrop-blur-sm"> <div> <a${addAttribute(href, "href")} target="_blank" class="block font-sans text-base antialiased font-light leading-relaxed text-white"> ${descriptions} </a> </div> <a${addAttribute(href, "href")} target="_blank">
Ver
</a> </figcaption> </figure>`} </div>`;
}, "D:/PROYECTOS NUEVOS/ASTRO/portafoliov1/src/components/CardProjects.astro", void 0);

const $$Astro$5 = createAstro();
const $$Conteiners = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Conteiners;
  const { id, class: ClassName, _style } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`${ClassName}`, "class")}${addAttribute(_style, "style")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "D:/PROYECTOS NUEVOS/ASTRO/portafoliov1/src/components/Conteiners.astro", void 0);

const $$Astro$4 = createAstro();
const $$GitHubIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$GitHubIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 250" width="256" height="250" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" fill="#545454"></path></svg>`;
}, "D:/PROYECTOS NUEVOS/ASTRO/portafoliov1/src/components/Icons/GitHubIcon.astro", void 0);

const $$Astro$3 = createAstro();
const $$LinkedInIcono = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LinkedInIcono;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"> <path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#0A66C2"></path></svg>`;
}, "D:/PROYECTOS NUEVOS/ASTRO/portafoliov1/src/components/Icons/LinkedInIcono.astro", void 0);

const $$Astro$2 = createAstro();
const $$Enlaces = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Enlaces;
  const { name, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="h-15 w-56 bg-slate-900  bottom-2 border border-white text-white  rounded-2xl shadow-md  hover:bg-blue-950 hover:shadow-green-200"${addAttribute(link, "href")} target="_blank"> <div class="flex justify-center gap-x-3"> ${name === "Linkedin" ? renderTemplate`${renderComponent($$result, "LinkedInIcon", $$LinkedInIcono, { "class": "size-6 text-white my-4  " })}` : name === "Github" ? renderTemplate`${renderComponent($$result, "GitHubIcon", $$GitHubIcon, { "class": "size-6 text-white my-4 " })}` : ""} <span class="pt-3">${name}</span> </div> </a>`;
}, "D:/PROYECTOS NUEVOS/ASTRO/portafoliov1/src/components/Enlaces.astro", void 0);

const dataExperiencie = [
  {
    role: "Software Developer",
    company: "Futura Ec",
    duration: "240 horas",
    address: "Cuenca, Azuay, Ecuador",
    aptitudes: " ·Migracion de base de datos ·Analisis y planificacion de migracion· Implementacion de scripts ·Pruebas y validacion ·Documentación"
  }
];

const $$Experiencia = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${dataExperiencie.map((r) => renderTemplate`${maybeRenderHead()}<div class="relative flex flex-col mt-6   text-gray-700 bg-slate-950 border border-1 border-white  shadow-md bg-clip-border rounded-xl hover:bg-blue-950 hover:shadow-orange-200"><div class="p-6"><h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-white"><span>&rarr;</span>${" "}${r.role}</h5><p class="block font-sans text-base antialiased font-light leading-relaxed text-white">${r.company}</p><p class="block font-sans text-base antialiased font-light leading-relaxed text-white">${r.address}</p><p class="block font-sans text-base antialiased font-light leading-relaxed text-white">${r.duration}</p><p class="block font-sans text-base antialiased font-light leading-relaxed text-white">${r.aptitudes}</p></div></div>`)}`;
}, "D:/PROYECTOS NUEVOS/ASTRO/portafoliov1/src/components/Experiencia.astro", void 0);

const $$Principal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="px-2 my-2"> <hr> <img class=" rounded-full size-40 float-center lg:float-end my-10 border border-1 border-white animate-wiggle animate-infinite" src="images/perfil.jpg" alt=""> <h2 class="text-white text-xl mt-20">
“Hola, soy Walter, un apasionado desarrollador web con conocimientos en
<span class="text-yellow-300 font-semibold">frontend, backend
</span>
y
<span class="text-yellow-300 font-semibold">bases de datos.”</span> </h2> </section>`;
}, "D:/PROYECTOS NUEVOS/ASTRO/portafoliov1/src/components/Principal.astro", void 0);

const $$Astro$1 = createAstro();
const $$Title = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Title;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1 class="text-1xl md:text-2xl lg:text-3xl font-bold flex justify-left">${title}</h1>`;
}, "D:/PROYECTOS NUEVOS/ASTRO/portafoliov1/src/components/Title.astro", void 0);

const dataRS = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/walter-farez-66358931a/",
    icons: "LinkedIn"
  },
  {
    name: "Github",
    link: "https://github.com/wf-farez",
    icons: "Github"
  }
];

const dataProjects = [
  {
    id: 1,
    title: "Frontend: Solución de Software para transporte de pasajeros",
    img: "images/projects/frontend.png",
    description: "Frontend Sistema de administrador para ingreso de información de servicio de transporte intercantonal e interprovincial en Ecuador. Desarrollado en Angular",
    url: "https://github.com/wf-farez/frontend_transporte",
    active: 1
  },
  {
    id: 2,
    title: "Backend: Solución de Software para transporte de pasajeros",
    img: "images/projects/frontend.png",
    description: "Backend Sistema de administrador para ingreso de informacion de servicio de transporte intercantonal e interprovincial en Ecuador. Desarrollo en Spring. Base de Datos Postgres",
    url: "https://github.com/wf-farez/backend_transporte",
    active: 1
  }
];

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderComponent($$result, "NavBar", $$NavBar, { "data-astro-cid-sckkx6r4": true })} <main data-astro-cid-sckkx6r4> ${renderComponent($$result, "Conteiners", $$Conteiners, { "id": "", "class": "pb-10 pt-10", "_style": "", "data-astro-cid-sckkx6r4": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Intro", $$Intro, { "data-astro-cid-sckkx6r4": true })} ` })} ${renderComponent($$result, "Conteiners", $$Conteiners, { "id": "principal", "class": "pb-10 pt-10", "_style": "", "data-astro-cid-sckkx6r4": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Principal", $$Principal, { "data-astro-cid-sckkx6r4": true })} ` })} ${renderComponent($$result, "Conteiners", $$Conteiners, { "id": "enlaces", "class": "pb-10 pt-10", "_style": "", "data-astro-cid-sckkx6r4": true }, { "default": ($$result2) => renderTemplate` <ul class="w-full gap-x-4 py-10 p-1 flex justify-normal shadow-neutral-800" data-astro-cid-sckkx6r4> ${dataRS.map((r) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Enlaces", $$Enlaces, { "name": r.name, "link": r.link, "data-astro-cid-sckkx6r4": true })}` })}`)} </ul> ` })} ${renderComponent($$result, "Conteiners", $$Conteiners, { "id": "experiencia", "class": "pb-10 pt-10", "_style": "", "data-astro-cid-sckkx6r4": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Title", $$Title, { "title": "Experiencia Laboral", "data-astro-cid-sckkx6r4": true })} <ul class="w-full gap-x-4 py-10 p-1 flex justify-normal shadow-neutral-800" data-astro-cid-sckkx6r4> ${renderComponent($$result2, "Experiencia", $$Experiencia, { "data-astro-cid-sckkx6r4": true })} </ul> ${renderComponent($$result2, "Conteiners", $$Conteiners, { "id": "proyectos", "class": "pb-10 pt-10 animate-fade-up", "_style": "", "data-astro-cid-sckkx6r4": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Title", $$Title, { "title": "Proyectos", "data-astro-cid-sckkx6r4": true })} <ul class="grid gap-4 shadow-neutral-800" data-astro-cid-sckkx6r4> ${dataProjects.map(
    (r) => renderTemplate`${renderComponent($$result3, "CardProjects", $$CardProjects, { "title": r.title, "img": r.img, "href": r.url, "descriptions": r.description, "active": r.active, "data-astro-cid-sckkx6r4": true })}`
  )} </ul> ` })} ` })}</main> </body></html>`;
}, "D:/PROYECTOS NUEVOS/ASTRO/portafoliov1/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome." })}`;
}, "D:/PROYECTOS NUEVOS/ASTRO/portafoliov1/src/pages/index.astro", void 0);

const $$file = "D:/PROYECTOS NUEVOS/ASTRO/portafoliov1/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
