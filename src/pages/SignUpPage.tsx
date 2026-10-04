import { SignUpForm } from "../components/SignUpForm";

export function SignUpPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-white sm:px-6 lg:min-h-screen lg:px-12 lg:py-10">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-[1240px] flex-col items-center justify-center gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
        <section className="w-full max-w-[520px] text-center lg:max-w-[560px] lg:pb-2 lg:text-left">
          <h1 className="text-[2.55rem] font-bold leading-[0.9] tracking-[-0.07em] text-white sm:text-[3.2rem] lg:text-[4.6rem] lg:leading-[0.9]">
            Learn to code by
            <span className="block">watching others</span>
          </h1>

          <p className="mx-auto mt-6 max-w-[430px] text-base leading-7 text-white/90 sm:text-lg lg:mx-0 lg:mt-8 lg:max-w-[520px] lg:text-[1.17rem] lg:leading-[1.55]">
            See how experienced developers solve problems in real time. Watching
            scripted tutorials is great, but understanding how developers think is
            invaluable.
          </p>
        </section>

        <section className="w-full max-w-[520px] lg:max-w-[520px]">
          <div className="mb-5 rounded-xl bg-[#5d56a8] px-5 py-4 text-center shadow-[0_8px_0_rgba(45,38,104,0.12)] lg:mb-5 lg:rounded-[12px] lg:px-6 lg:py-4">
            <span className="font-bold lg:text-[1.12rem]">Try it free 7 days </span>
            <span className="text-white/75 lg:text-[1.12rem]">then $20/mo. thereafter</span>
          </div>

          <div className="rounded-[18px] bg-white p-4 shadow-[0_18px_28px_rgba(62,49,72,0.18)] sm:p-5 lg:rounded-[18px] lg:p-5">
            <SignUpForm />
          </div>
        </section>
      </div>
    </main>
  );
}
