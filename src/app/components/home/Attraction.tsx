import Image from "next/image";

export default function Attraction() {
  return (
    <div className="py-24 sm:py-24">
      <div className="grid grid-cols-2 h-[500px]">
        <div className="relative h-full w-full group">
          <div className="group-hover:fadeInScale opacity-0 absolute inset-0 bg-black/50 z-10">
            <div className="flex h-full justify-center items-center text-center flex-col">
              <div className="text-5xl font-semibold text-white italic">
                Trekking
              </div>
              <div className="w-1/2 text-white text-sm mt-6">
                We have over 12 different trips for you to trek all over the
                hills and himalayas of Nepal. Contact us to learn more.
              </div>
            </div>
          </div>
          <Image
            src="/img-1.jpg"
            width={1000}
            height={1000}
            alt="pokhara"
            className="w-full h-full"
          ></Image>
        </div>
        <div className="relative h-full w-full group">
          <div className="group-hover:fadeInScale opacity-0 absolute inset-0 bg-black/50 z-10">
            <div className="flex h-full justify-center items-center text-center flex-col">
              <div className="text-5xl font-semibold text-white italic">
                Hiking
              </div>
              <div className="w-1/2 text-white text-sm mt-6">
                We have over 12 different trips for you to trek all over the
                hills and himalayas of Nepal. Contact us to learn more.
              </div>
            </div>
          </div>
          <Image
            src="/img-2.jpg"
            width={1000}
            height={1000}
            alt="pokhara"
            className="w-full h-full"
          ></Image>
        </div>
        {/* <div className="h-full w-full flip-card bg-grey-100">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <Image
                src="/img-2.jpg"
                alt="Avatar"
                width={1000}
                height={1000}
                className="w-full h-full"
              />
            </div>
            <div className="flip-card-back flex flex-col justify-center items-center">
              <div className="text-5xl font-semibold text-white italic">
                Trekking
              </div>
              <div className="w-1/2 text-white text-sm mt-6">
                We have over 12 different trips for you to trek all over the
                hills and himalayas of Nepal. Contact us to learn more.
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
