import { TopAppBar } from "@/components/nav";
import { ShapeField } from "@/components/shapes";
import { Icon } from "@/components/icons";

export default function Home() {
  return (
    <>
      <TopAppBar />

      <main className="relative flex min-h-screen items-center justify-center px-6 pb-20 pt-[120px]">
        <ShapeField />

        <div className="relative z-10 flex max-w-[920px] flex-col items-center gap-6 text-center">
          <h1 className="m-0 text-[clamp(40px,7vw,84px)] font-bold leading-[1.05] tracking-[-1.5px] text-on-surface">
            Make an app,
            <br />
            get a{" "}
            <span className="relative inline-block whitespace-nowrap px-[0.28em] py-[0.06em] text-primary">
              <span
                className="absolute inset-y-[2%] inset-x-0 -z-10 rounded-extra-large bg-primary-container"
                aria-hidden="true"
              />
              cellphone
            </span>
          </h1>

          <p className="m-0 text-[clamp(16px,2.2vw,20px)] font-medium tracking-[0.1px] text-on-surface-variant">
            a Hack Club YSWS - get a Google Pixel 10a!
          </p>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              className="flex h-12 items-center gap-2 whitespace-nowrap rounded-full bg-primary px-6 text-[15px] font-medium leading-none text-on-primary shadow-[0_1px_3px_rgba(0,0,0,0.2)] transition-all duration-200 hover:shadow-[0_2px_6px_rgba(0,0,0,0.25)] active:scale-95"
            >
              <Icon name="rocket_launch" className="text-[28px]" />
              Start building
            </button>

            <button
              type="button"
              className="flex h-12 items-center gap-2 whitespace-nowrap rounded-full border border-outline bg-transparent px-6 text-[15px] font-medium leading-none text-primary transition-all duration-200 hover:bg-primary-container active:scale-95"
            >
              <Icon name="menu_book" className="text-[28px]" />
              Read the rules
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
