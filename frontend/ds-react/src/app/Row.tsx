import React from "react";

import { MakeProps, PolymorphicRef, initAs } from "@/core";

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

const flexAlign = {
  ["left"]: "justify-start",
  ["center"]: "justify-center",
  ["right"]: "justify-end",
  ["space-between"]: "justify-between",
  ["space-around"]: "justify-around",
  ["space-evenly"]: "justify-evenly",
  ["stretch"]: "justify-stretch",
};

const flexItems = {
  ["top"]: "items-start",
  ["center"]: "items-center",
  ["bottom"]: "items-end",
  ["stretch"]: "items-stretch",
};

type RowProps<T extends React.ElementType> = MakeProps<T, _RowProps>;

function Row(
  {
    as,
    horizontalAlign = "left",
    verticalAlign = "top",
    ...props
  }: RowProps<"div">,
  ref: PolymorphicRef<"div">
) {
  const Element = initAs("div", as);
  props.className = [
    props.className,
    "flex",
    `${flexAlign[horizontalAlign]}`,
    `${flexItems[verticalAlign]}`,
  ]
    .filter(Boolean)
    .join(" ");
  return <Element ref={ref} {...props} />;
}

export default React.forwardRef(Row);
