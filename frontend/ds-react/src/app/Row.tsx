import { MakeProps, initAs } from "@/core";
import React from "react";

type _RowProps = {
  horizontalAlign: "left" | "center" | "right";
  verticalAlign: "top" | "center" | "bottom";
};

type RowProps<T extends React.ElementType> = MakeProps<T, _RowProps>;

function Row({ as, ...props }: RowProps<"div">) {
  const Element = initAs("div", as);
  return <Element {...props} />;
}

export default React.forwardRef(Row);
