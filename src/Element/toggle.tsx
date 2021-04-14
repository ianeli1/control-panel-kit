import { Variable } from "../types";
import { ElementBase, ElementBaseArgs } from "./base";
import { Switch } from "@material-ui/core";
import { maybe, useStateWithPromise } from "../utilities";
import * as React from "react";

interface ToggleElementProps extends ElementBaseArgs {
  variable: Variable<boolean>;
}

export function ToggleElement(props: ToggleElementProps) {
  const [val, setToggle] = useStateWithPromise(props.variable.get(), false);

  const setVariable = async (_: any, val: boolean) => {
    const newVal = await maybe(props.variable.set, val);
    setToggle((t: boolean) => newVal ?? t);
  };

  return (
    <ElementBase {...props}>
      <Switch checked={val} onChange={setVariable} />
    </ElementBase>
  );
}
