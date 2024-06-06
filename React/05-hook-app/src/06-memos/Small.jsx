import { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("Me redibuje");
  return <small>{value}</small>;
});
