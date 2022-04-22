import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xceB4a6446b1aE08984F622c6B5d2e3dD1f81d410");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Compass",
        description: "This NFT will give you access to HikerDAO!",
        image: readFileSync("scripts/assets/compass.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();