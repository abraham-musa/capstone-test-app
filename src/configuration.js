// This configuration file is a single place to provide any values to set up the app

export const IDENTITY_POOL_ID =
  "us-east-1:531d19f3-4a66-46a5-8a24-c785250864bd"; // REQUIRED - Amazon Cognito Identity Pool ID

export const REGION = "us-east-1"; // REQUIRED - Amazon Cognito Region

export const MAP = {
  NAME: "map1d9a822a-dev", // REQUIRED - Amazon Location Service Map resource name
  STYLE: "Esri Navigation", // REQUIRED - String representing the style of map resource
};
