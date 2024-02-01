"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Navigation from "./_components/Navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size={"lg"} />
      </div>
    );
  }
  if (!isAuthenticated) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold">Welcome to Jotion</h1>
          <p className="text-xl">Please login to continue</p>
          <SignInButton mode="modal" afterSignInUrl="/documents">
            <Button className="w-fit">
              Login <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </SignInButton>
        </div>
      </div>
    );
  }
  return (
    <div className="h-full flex dark:bg-[#1f1f1f]">
      <Navigation/>
      <main className="flex-1  h-full overflow-y-auto">{children}</main>
    </div>
  );
};

export default MainLayout;
