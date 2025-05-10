

import configPromise from "@payload-config";
import { getPayload } from "payload";

const HomePage = async () => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
    where: {
      parentCategory: {
        exists: false,
      },
    },
    depth: 1, // Subcategories level
  });
  console.log("data", data);

  return (
    <main>
      
    </main>
  );
};
export default HomePage;
