import configPromise from "@payload-config";
import { getPayload } from "payload";

import { HydrateClient, prefetch, trpc } from "@/trpc/server";
import { ClientGreeting } from "./Test";

const HomePage = async () => {
  const payload = await getPayload({
    config: configPromise,
  });

  prefetch(trpc.categories.getAll.queryOptions());

  const data = await payload.find({
    collection: "categories",
    where: {
      parentCategory: {
        exists: false,
      },
    },
    depth: 1, // Subcategories level
  });
  //console.log("data", data);

  return (
    <main>
      <HydrateClient>
        <div>...</div>
        {/** ... */}
        <ClientGreeting />
      </HydrateClient>
    </main>
  );
};
export default HomePage;
