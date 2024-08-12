import Image from "next/image";
import Link from "next/Link";
import { getAllPosts } from "./posts/lib/posts";
import PopularPackages from "./components/home/Packages";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Attraction from "./components/home/Attraction";
import Team from "./components/home/Team";
import Destinations from "./components/home/Destinations";

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <div className="relative bg-image bg-center bg-cover bg-[url('/images/travel-tours-banner.jpg')]">
        {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}
        <div className="max-w-7xl mx-auto relative isolate px-6 lg:px-8">
          <div className="py-32 w-[400px] sm:py-48 lg:py-40">
            <div className="text-left">
              <h2 className="mb-6 uppercase  font-semibold text-white">
                Best destination around nepal
              </h2>
              <h1 className="text-4xl font-bold tracking-tight  sm:text-6xl text-white">
                Travel, enjoy and live a new full life
              </h1>
              <p className="mt-6 text-lg text-white">
                Trekking mountain nepal Pvt. Ltd is your one stop to find all
                the destination and exciting places within and outside of Nepal.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-yellow-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Find out more
                </a>
                <Link
                  href="#popular-packages"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  See packages <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopularPackages posts={posts} />
      <Attraction />
      <Team />
      <WhyChooseUs />
      <div className="bg-white py-20 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="border-t-4 border-red-900 w-10 mx-auto mb-4 rounded-lg"></div>
          <h2 className="text-center text-2xl font-semibold leading-8 text-gray-900 flex items-center justify-center gap-2">
            Trusted Partners
          </h2>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/images/partners/buddhaair.png"
              alt="Transistor"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
              src="/images/partners/himalaya.jpg"
              alt="Reform"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/images/partners/yeti.png"
              alt="Tuple"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="/images/partners/nepal.png"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/images/partners/saurya.jpg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
      <Destinations />s
    </>
  );
}
