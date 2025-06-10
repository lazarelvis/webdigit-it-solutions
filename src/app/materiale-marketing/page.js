"use client";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { sendContactForm } from "@/app/Lib/api";

export default function MaterialeMarketing() {
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
      toast.error("Eroare la trimiterea mesajului");
    }
    reset();
  };
  return (
    <div className="h-screen relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-xl lg:max-w-lg">
          <h1 className="text-4xl font-semibold tracking-tight text-[#0a2540]">
            🎁 Materiale pentru promovarea pe Social Media:
          </h1>
          <p className="mt-4 text-lg text-[#425466]">
            📌 idei de postări <br />
            📌 modele grafice <br />
            📌 sugestii de texte
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
                Primeste
              </button>
            </div>
          </form>
          <ToastContainer position="bottom-right" theme="light" />
        </div>
      </div>
    </div>
  );
}
