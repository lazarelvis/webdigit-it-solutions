"use client";

import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { sendContactForm } from "@/app/Lib/api";

export default function Support({ ref }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await sendContactForm(data);
      toast.info("In cel mai scurt timp vei fi contact");
    } catch (error) {
      console.log("error.message:", error.message);

      toast.error("Eroare la trimiterea mesajului");
    }
    reset();
  };
  return (
    <div
      ref={ref}
      className="relative isolate overflow-hidden bg-[#f6f9fc] py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-[#0a2540]">
              Consiliere rapidă pentru pachetul de pornire
            </h2>
            <p className="mt-4 text-lg text-[#425466]">
              Într-o discuție rapidă îți poți afla cele mai bune decizii pentru
              prezența ta online
            </p>
            <form onSubmit={handleSubmit(onSubmit)} method="POST">
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  {...register("email", {
                    required: "Emailul este necesar",
                  })}
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Adresa email"
                  autoComplete="email"
                  className="min-w-0 flex-auto rounded-md bg-[#0a2540]/5 px-3.5 py-2 text-base text-[#0a2540] outline-1 -outline-offset-1 outline-[#0a2540]/50 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm">{`${errors.email.message}`}</p>
                )}
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="flex-none rounded-md bg-[#0a2540] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer"
                >
                  Contact
                </button>
              </div>
            </form>
            <ToastContainer position="bottom-right" theme="light" />
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10 text-[#0a2540]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                  />
                </svg>
              </div>
              <p className="mt-4 text-base font-semibold text-[#0a2540]">
                Optimizare SEO pentru a vă ajuta să apăreți mai sus în căutările
                Google
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10 text-[#0a2540]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
              </div>
              <p className="mt-4 text-base font-semibold text-[#0a2540]">
                Contribuim la creșterea vizibilității în domeniul online
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div> */}
    </div>
  );
}
