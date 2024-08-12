import Image from "next/image";

export default function Destinations() {
  return (
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
            Pokhara
          </div>
          <div className="w-full h-[300px] overflow-hidden">
            <Image
              src="/images/destinations/pokhara.jpg"
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

        <div className="relative bg-white overflow-hidden group">
          <div className="rounded-lg absolute z-10 top-4 left-2 bg-black bg-opacity-40 px-3 py-1 text-xs text-white">
            Kathmandu
          </div>
          <div className="w-full h-[300px] overflow-hidden">
            <Image
              src="/images/destinations/pasupati.jpg"
              alt=""
              className="h-full w-full object-cover object-center transition-transform duration-300 transform group-hover:scale-110"
              width={500}
              height={200}
            />
          </div>
          <div className="cursor-pointer absolute z-10 hidden group-hover:block inset-0 bg-black bg-opacity-40">
            <div className="h-full flex flex-col justify-center items-center">
              <div className="text-sm w-full text-center font-semibold text-white">
                Pasupathinath Temple
              </div>
              <div className="uppercase text-sm w-full text-center font-semibold text-white">
                Culture & Heritage
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-white overflow-hidden group">
          <div className="rounded-lg absolute z-10 top-4 left-2 bg-black bg-opacity-40 px-3 py-1 text-xs text-white">
            Chitwan
          </div>
          <div className="w-full h-[300px] overflow-hidden">
            <Image
              src="/images/destinations/chitwan.jpg"
              alt=""
              className="h-full w-full object-cover object-center transition-transform duration-300 transform group-hover:scale-110"
              width={500}
              height={200}
            />
          </div>
          <div className="cursor-pointer absolute z-10 hidden group-hover:block inset-0 bg-black bg-opacity-40">
            <div className="h-full flex flex-col justify-center items-center">
              <div className="text-sm w-full text-center font-semibold text-white">
                Safari
              </div>
              <div className="uppercase text-sm w-full text-center font-semibold text-white">
                Chitwan National Park
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
