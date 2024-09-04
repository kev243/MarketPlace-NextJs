import { Card } from "@/components/ui/card";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import { SellForm } from "../components/form/SellForm";
import prisma from "@/lib/prisma";
import AccessRestricted from "../components/AcccessRestricted";

async function getData(userId: string) {
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      stripeConnectedLinked: true,
    },
  });

  if (data?.stripeConnectedLinked === false) {
    return redirect("/billing");
  }

  return null;
}

export default async function SellRoute() {
  noStore();
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();
  const userIsAuthenticated = await isAuthenticated();

  if (!userIsAuthenticated) {
    return <AccessRestricted />; // Si aucun utilisateur n'est récupéré, affiche AccessRestricted
  }
  if (!user) {
    throw new Error("Unauthorized");
  }

  const data = await getData(user.id);
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mb-14">
      <Card>
        <SellForm />
      </Card>
    </section>
  );
}
