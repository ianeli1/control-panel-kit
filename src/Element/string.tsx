import { TextField } from "@material-ui/core";
import * as React from "react";
import { Variable } from "../types";
import { maybe, useStateWithPromise } from "../utilities";
import { ElementBase, ElementBaseArgs } from "./base";

interface StringElementProps extends ElementBaseArgs {
  variable: Variable<string>;
}

export function StringElement(props: StringElementProps) {
  const [val, setToggle] = useStateWithPromise(props.variable.get(), "");

  const setVariable = async (val: string) => {
    const newVal = await maybe(props.variable.set, val);
    setToggle((t) => newVal ?? t);
  };

  return (
    <ElementBase {...props}>
      <TextField
        variant="outlined"
        value={val}
        onChange={(e) => void setVariable(e.target.value)}
      />
    </ElementBase>
  );
}
