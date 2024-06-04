import React from "react";

import { MakeProps, initAs } from "@/core";

type _RowProps = Partial<{
  horizontalAlign:
    | "left"
    | "center"
    | "right"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch";
  verticalAlign: "top" | "center" | "bottom" | "stretch";
}>;

type RowProps<T extends React.ElementType> = MakeProps<T, _RowProps>;

function Row({
  as,
  horizontalAlign = "left",
  verticalAlign = "top",
  ...props
}: RowProps<"div">) {
  const Element = initAs("div", as);
  return <Element {...props} />;
}

export default React.forwardRef(Row);
