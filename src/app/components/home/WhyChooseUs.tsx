"use client";

import { useEffect } from "react";

export default function WhyChooseUs() {
  useEffect(() => {
    const listener = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(123);

            entry.target.classList.add("animate__animated");
            entry.target.classList.add("animate__fadeInDown");
          }
        });
      });

      document.querySelectorAll(".animated").forEach((element) => {
        observer.observe(element);
      });
    };

    document.addEventListener("DOMContentLoaded", listener);

    return () => {
      document.removeEventListener("DOMContentLoaded", listener);
    };
  }, []);

  return (
    <div className="py-24 sm:py-24">
      <div className="bg-gray-100 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <div className="border-t-4 border-red-900 w-10 mx-auto mb-4 rounded-lg"></div>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Us
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Travel to some of the best destination of Nepal. Explore the
              beauty and nature our country has at the best deals. We are
              tursted by more than 2000 travelers foriegn and domestic.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-4xl sm:mt-12 lg:mt-16 lg:max-w-7xl">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              <div className="animated relative pl-28">
                <dt className="text-base font-semibold leading-7 text-blue-900">
                  <div className="absolute left-0 top-0 flex h-20 w-20 items-center justify-center rounded-full bg-[#0072c0]">
                    <i className="fa-solid fa-globe text-white fa-lg"></i>
                  </div>
                  Diverse Destinations
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  We are authorized to acquire a license to operate Travel,
                  Tours, Trekking related tourism activities within Nepal,
                  Tibet, Bhutan and India.
                </dd>
              </div>
              <div className="animated relative pl-28">
                <dt className="text-base font-semibold leading-7 text-blue-900">
                  <div className="absolute left-0 top-0 flex h-20 w-20 items-center justify-center rounded-full bg-[#0072c0]">
                    <i className="fa-solid fa-shop text-white fa-lg"></i>
                  </div>
                  Culture & Heritage
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  We are authorized to acquire a license to operate Travel,
                  Tours, Trekking related tourism activities within Nepal,
                  Tibet, Bhutan and India.
                </dd>
              </div>
              <div className="animated relative pl-28">
                <dt className="text-base font-semibold leading-7 text-blue-900">
                  <div className="absolute left-0 top-0 flex h-20 w-20 items-center justify-center rounded-full bg-[#0072c0]">
                    <i className="fa-solid fa-calendar-days text-white fa-lg"></i>
                  </div>
                  20 year`s of Service
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  We are authorized to acquire a license to operate Travel,
                  Tours, Trekking related tourism activities within Nepal,
                  Tibet, Bhutan and India.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
