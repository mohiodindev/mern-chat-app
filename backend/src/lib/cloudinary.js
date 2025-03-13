import { v2 as cloudinary } from "cloudinary";

import { config } from "dotenv";

config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME ?? "dzfohgboo",
  api_key: process.env.CLOUDINARY_API_KEY ?? "387528738572351",
  api_secret:
    process.env.CLOUDINARY_API_SECRET ?? "lXmcixw2P8q3MW9aQTD1y1_nDSA",
});

export default cloudinary;
