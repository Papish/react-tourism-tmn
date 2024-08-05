export default function TheFooter() {
  return (
    <footer className="mt-24 bg-zinc-50 text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left">
      <div className="max-w-7xl px-6 mx-auto py-24 text-center md:text-left">
        <div className="grid-1 grid gap-8 grid-cols-12">
          <div className="col-span-6">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              Travel & Tourism
            </h6>
            <p className="p-0 sm:pr-40">
              Discover the world with our exceptional travel and tour services!
              We provide personalized itineraries, ensuring your journey is
              seamless and memorable. Our expert team handles all the details,
              from flights to accommodations, leaving you stress-free.
            </p>
          </div>
          <div className="col-span-3">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Services
            </h6>
            <p className="mb-4">
              <a href="#!">Family Packages</a>
            </p>
            <p className="mb-4">
              <a href="#!">Trekking & Hiking</a>
            </p>
            <p className="mb-4">
              <a href="#!">Helicopter Tours</a>
            </p>
            <p>
              <a href="#!">Travel Guides</a>
            </p>
          </div>
          <div className="col-span-3">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact Us
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              Thamel, Sworbeni Chowk 8, Nepal
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              info@example.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              + 01 234 567 88
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black/5 p-6 text-center">
        <span>© 2024 Copyright:</span>
        <a className="font-semibold" href="#">
          Travel and Tourism, Nepal
        </a>
      </div>
    </footer>
  );
}
