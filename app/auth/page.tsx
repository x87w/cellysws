import type { Metadata } from "next";
import { TopAppBar } from "@/components/nav";
import { ShapeField } from "@/components/shapes";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Sign in",
};

export default function AuthPage() {
  return (
    <>
      <TopAppBar showSignIn={false} />

      <main className="relative flex min-h-screen items-center justify-center px-6 pb-[60px] pt-[100px]">
        <ShapeField />

        <div className="relative z-10 w-full max-w-[460px] rounded-extra-large border border-outline-variant bg-surface/85 p-10 shadow-[0_8px_30px_rgba(32,26,25,0.08)] backdrop-blur-xl max-sm:rounded-[22px] max-sm:p-[30px_22px]">
          <div className="mb-[30px] text-center">
            <h1 className="m-0 mb-2 text-[32px] font-bold tracking-[-0.5px] max-sm:text-[28px]">
              Welcome back
            </h1>
            <p className="m-0 text-[15px] text-on-surface-variant">
              Don&apos;t have an account?{" "}
              <a href="#" className="text-primary">
                Sign up!
              </a>
            </p>
          </div>

          <form className="flex flex-col gap-[18px]">
            <div className="flex flex-col gap-[7px]">
              <label htmlFor="email" className="text-[14px] font-medium">
                Email
              </label>
              <div className="flex h-[52px] items-center gap-[10px] rounded-medium border border-outline bg-surface px-4 transition-all duration-200 focus-within:border-primary focus-within:shadow-[0_0_0_3px_rgba(236,55,80,0.12)]">
                <Icon name="mail" className="text-[28px] text-on-surface-variant" />
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="h-full w-full border-0 bg-transparent text-[15px] font-display text-on-surface outline-0 placeholder:text-outline"
                />
              </div>
            </div>

            <div className="flex flex-col gap-[7px]">
              <label htmlFor="password" className="text-[14px] font-medium">
                Password
              </label>
              <div className="flex h-[52px] items-center gap-[10px] rounded-medium border border-outline bg-surface px-4 transition-all duration-200 focus-within:border-primary focus-within:shadow-[0_0_0_3px_rgba(236,55,80,0.12)]">
                <Icon name="lock" className="text-[28px] text-on-surface-variant" />
                <input
                  id="password"
                  type="password"
                  placeholder="Your password"
                  autoComplete="current-password"
                  required
                  className="h-full w-full border-0 bg-transparent text-[15px] font-display text-on-surface outline-0 placeholder:text-outline"
                />
              </div>
            </div>

            <div className="mt-[-4px] flex items-center justify-between text-[13px] max-sm:text-[12px]">
              <label className="flex items-center gap-[7px] text-on-surface-variant">
                <input
                  type="checkbox"
                  className="accent-[var(--color-primary)]"
                />
                Remember me
              </label>
              <a
                href="#"
                className="font-medium text-primary no-underline hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="mt-1 flex h-[50px] w-full items-center justify-center gap-2 rounded-full bg-primary text-[15px] font-medium text-white shadow-[0_1px_3px_rgba(0,0,0,0.2)] transition-all duration-150 hover:shadow-[0_3px_8px_rgba(0,0,0,0.2)] active:scale-[0.98]"
            >
              <span>Sign in</span>
              <Icon name="arrow_forward" className="text-[28px]" />
            </button>
          </form>

          <div className="my-[25px] flex items-center gap-[14px] text-[13px] text-on-surface-variant before:h-px before:flex-1 before:bg-outline-variant after:h-px after:flex-1 after:bg-outline-variant">
            or
          </div>

          <button
            type="button"
            className="flex h-[50px] w-full items-center justify-center gap-[10px] rounded-full border border-outline bg-transparent text-[15px] font-medium text-on-surface transition-all duration-200 hover:bg-surface-container active:scale-[0.98]"
          >
            <span className="text-[18px] font-bold text-[#4285F4]">
              G
            </span>
            <span>Continue with Google</span>
          </button>

          <p className="mt-6 text-center text-[14px] text-on-surface-variant">
            Don&apos;t have an account?{" "}
            <a href="#" className="font-medium text-primary no-underline hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </main>
    </>
  );
}