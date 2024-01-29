/* eslint-disable react/display-name */
import React, { forwardRef } from "react";

const Button = forwardRef<HTMLButtonElement, any>((props, ref) => {
  const { className, ...rest } = props;
  return <button ref={ref} {...rest} />;
});

export { Button };
