import Image from "next/image";

export default function LogoClouds() {
  return (
    // bg white removed
    <div className="py-18 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900 sm:text-xl">
          Tehnologii web si librarii folosite pentru crearea aplicatiilor
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            className="col-span-2 max-h-18 w-full object-contain lg:col-span-1"
            src="/react-from-react-native.svg"
            alt="react js logo"
            width={158}
            height={48}
            priority
          />
          <Image
            className="col-span-2 max-h-18 w-full object-contain lg:col-span-1"
            src="/nextjs-svgrepo-com.svg"
            alt="next js logo"
            width={200}
            height={70}
            priority
          />
          <Image
            className="col-span-2 max-h-18 w-full object-contain lg:col-span-1"
            src="/wordpress-svgrepo-com.svg"
            alt="wordpress logo"
            width={158}
            height={48}
            priority
          />

          <Image
            className="col-span-2 max-h-18 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="/nodejs-svgrepo-com.svg"
            alt="nodejs logo"
            width={158}
            height={48}
            priority
          />

          <Image
            className="col-span-2 col-start-2 max-h-18 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="/aws-svgrepo-com.svg"
            alt="amazon web services aws logo"
            width={158}
            height={48}
            priority
          />
        </div>
      </div>
    </div>
  );
}
