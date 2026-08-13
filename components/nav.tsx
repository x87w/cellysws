import Link from "next/link";
import { Icon } from "./icons";

export function TopAppBar({ showSignIn = true }: { showSignIn?: boolean }) {
  return (
    <header className="fixed inset-x-0 top-0 z-[100] flex h-[72px] items-center justify-between bg-surface/82 px-5 backdrop-blur-xl">
      <Link
        href="/"
        aria-label="Hack Club"
        className="relative flex h-full items-center"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="absolute left-2 top-0 block w-[120px]"
          src="https://assets.hackclub.com/flag-orpheus-top.svg"
          alt="Hack Club"
          aria-hidden="true"
        />
      </Link>

      {showSignIn && (
        <Link
          href="/auth"
          className="flex h-10 items-center gap-2 rounded-full bg-secondary-container px-5 pl-4 text-sm font-medium tracking-[0.1px] text-on-secondary-container transition-all duration-200 hover:bg-secondary-container/85 hover:shadow-[0_1px_3px_rgba(0,0,0,0.15),0_1px_2px_rgba(0,0,0,0.1)] active:scale-95"
        >
          <Icon name="account_circle" className="text-[28px]" />
          <span className="max-sm:hidden">Sign in</span>
        </Link>
      )}
    </header>
  );
}
