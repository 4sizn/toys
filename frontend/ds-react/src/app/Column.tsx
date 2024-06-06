import { forwardRef } from "react";

import { MakeProps, PolymorphicRef, initAs } from "@/core";

type _ColumnProps = {
  horizontalAlign: "left" | "center" | "right";
  verticalAlign: "top" | "center" | "bottom";
};

const flexAlign = {
  ["top"]: "justify-start",
  ["center"]: "justify-center",
  ["bottom"]: "justify-end",
  ["stretch"]: "justify-stretch",
};

const flexItems = {
  ["left"]: "items-start",
  ["center"]: "items-center",
  ["right"]: "items-end",
  ["stretch"]: "items-stretch",
};

type ColumnProps<T extends React.ElementType> = MakeProps<T, _ColumnProps>;

function Column(
  {
    as,
    horizontalAlign = "left",
    verticalAlign = "top",
    ...props
  }: ColumnProps<"div">,
  ref: PolymorphicRef<"div">
) {
  const Element = initAs("div", as);
  props.className = [
    props.className,
    "flex",
    "flex-col",
    `${flexItems[horizontalAlign]}`,
    `${flexAlign[verticalAlign]}`,
  ]
    .filter(Boolean)
    .join(" ");
  return <Element ref={ref} {...props} />;
}

export default forwardRef(Column);
