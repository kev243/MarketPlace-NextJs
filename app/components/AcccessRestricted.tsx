import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function AccessRestricted() {
  return (
    // <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
    <div className="flex min-h-[100dvh] flex-col items-center  bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <Lock className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Access Restricted
        </h1>
        <p className="mt-4 text-muted-foreground">
          You must be logged in to view this content. Please sign in to
          continue.
        </p>
        <div className="mt-6">
          <Button asChild>
            <LoginLink>Login</LoginLink>
          </Button>
        </div>
      </div>
    </div>
  );
}
