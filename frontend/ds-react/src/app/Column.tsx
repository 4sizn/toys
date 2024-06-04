import React from "react";

import { MakeProps, initAs } from "@/core";

type _ColumnProps = {
  horizontalAlign: "left" | "center" | "right";
  verticalAlign: "top" | "center" | "bottom";
};

type ColumnProps<T extends React.ElementType> = MakeProps<T, _ColumnProps>;

function Column({ as, ...props }: ColumnProps<"div">) {
  const Element = initAs("div", as);
  return <Element {...props} />;
}

export default React.forwardRef(Column);
