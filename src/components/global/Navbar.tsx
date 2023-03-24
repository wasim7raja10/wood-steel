import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

export default function Navbar() {
  const { isSignedIn } = useUser();
  return (
    <>
      <nav className="bottom-2 h-10 border">
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
      </nav>
    </>
  );
}
