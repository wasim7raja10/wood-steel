import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  const { isSignedIn } = useUser();
  return (
    <>
      <nav className="bottom-2 flex h-10 items-center justify-between border px-6">
        <div>
          <Link href={"/"}>Wood-Steel</Link>
        </div>
        <div className="flex items-center gap-6">
          <Link href={"/checkout/cart"}>cart</Link>
          <Link href={"/wishlist"}>wishlist</Link>
          <Link href={"/profile"}>profile</Link>
          <span className=" border-2 px-4">
            {!isSignedIn && (
              <div className="flex justify-center">
                <SignInButton />
              </div>
            )}
            {!!isSignedIn && (
              <div className="flex justify-center">
                <SignOutButton />
              </div>
            )}
          </span>
        </div>
      </nav>
    </>
  );
}
