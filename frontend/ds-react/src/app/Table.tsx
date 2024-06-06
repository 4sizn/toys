import { forwardRef } from "react";

import { MakeProps, PolymorphicRef, initAs } from "@/core";

type _TableProps = {
  horizontalAlign: "left" | "center" | "right";
  verticalAlign: "top" | "center" | "bottom";
};

type TableProps<T extends React.ElementType> = MakeProps<T, _TableProps>;

function Table(
  {
    as,
    horizontalAlign = "left",
    verticalAlign = "top",
    ...props
  }: TableProps<"div">,
  ref: PolymorphicRef<"div">
) {
  const Element = initAs("div", as);
  return <Element ref={ref} {...props} />;
}

export default forwardRef(Table);
