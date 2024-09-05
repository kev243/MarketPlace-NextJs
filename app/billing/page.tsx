import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import prisma from "@/lib/prisma";
import AccessRestricted from "../components/AcccessRestricted";
import { unstable_noStore as noStore } from "next/cache";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { CreateStripeAccoutnLink, GetStripeDashboardLink } from "../actions";
import { Submitbutton } from "../components/Submitbutton";

async function getData(userId: string) {
  const data = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      stripeConnectedLinked: true,
    },
  });

  return data;
}

export default async function BillingRoute() {
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
    <section className="max-w-7xl mx-auto px-4 md:px-8">
      <Card>
        <CardHeader>
          <CardTitle>Billing</CardTitle>
          <CardDescription>
            Find all your details regarding your payments
          </CardDescription>
        </CardHeader>
        <CardContent>
          {data?.stripeConnectedLinked === false && (
            <form action={CreateStripeAccoutnLink}>
              <Submitbutton title="Link your Accout to stripe" />
            </form>
          )}

          {data?.stripeConnectedLinked === true && (
            <form action={GetStripeDashboardLink}>
              <Submitbutton title="View Dashboard" />
            </form>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
