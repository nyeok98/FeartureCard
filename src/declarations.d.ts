declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.json" {
  const value: any; // Replace `any` with a specific type if needed
  export default value;
}
