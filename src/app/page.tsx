import Image from "next/image";
import { getAllPosts } from "./posts/lib/posts";
import PopularPackages from "./components/home/Packages";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Attraction from "./components/home/Attraction";
import Team from "./components/home/Team";

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      {/* Banner */}
      <div className="relative bg-image bg-center bg-cover bg-[url('/pokhara.jpg')]">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="max-w-7xl mx-auto relative isolate px-6 lg:px-8">
          <div className="py-32 w-[400px] sm:py-48 lg:py-36">
            <div className="text-left">
              <h2 className="mb-6 uppercase  font-semibold text-white">
                Best destination around nepal
              </h2>
              <h1 className="text-4xl font-bold tracking-tight  sm:text-6xl text-white">
                Travel, enjoy and live a new full life
              </h1>
              <p className="mt-6 text-lg text-white">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-yellow-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Find out more
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  See packages <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PopularPackages posts={posts} />

      <Attraction />

      {/* Destinations */}
      <div
        className="max-w-7xl mx-auto py-24 sm:py-24 px-6"
        id="popular-destinations"
      >
        <div className="border-t-4 border-red-900 w-10 mb-4 rounded-lg"></div>
        <h2 className="text-3xl mb-2 font-semibold">Popular Destinations</h2>
        <div className="mb-10 text-sm font-semibold text-blue-900">
          See what popular with other travellers
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 rounded-lg overflow-hidden">
          <div className="relative bg-white overflow-hidden group">
            <div className="rounded-lg absolute z-10 top-4 left-2 bg-black bg-opacity-40 px-3 py-1 text-xs text-white">
              Kathmandu
            </div>
            <div className="w-full h-[300px] overflow-hidden">
              <Image
                src="/pokhara.jpg"
                alt=""
                className="h-full w-full object-cover object-center transition-transform duration-300 transform group-hover:scale-110"
                width={500}
                height={200}
              />
            </div>
            <div className="cursor-pointer absolute z-10 hidden group-hover:block inset-0 bg-black bg-opacity-40">
              <div className="h-full flex flex-col justify-center items-center">
                <div className="text-sm w-full text-center font-semibold text-white">
                  Lake Side
                </div>
                <div className="uppercase text-sm w-full text-center font-semibold text-white">
                  Fewa Lake
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhyChooseUs />

      <div className="bg-white py-24 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="border-t-4 border-red-900 w-10 mx-auto mb-4 rounded-lg"></div>
          <h2 className="text-center text-2xl font-semibold leading-8 text-gray-900 flex items-center justify-center gap-2">
            Trusted Partners
          </h2>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>

      <Team />
    </>
  );
}
