import { Button, ButtonGroup } from "@material-ui/core";
import * as React from "react";
import { Variable } from "../types";
import { maybe, useStateWithPromise } from "../utilities";
import { ElementBase, ElementBaseArgs } from "./base";

export interface IntegerElementProps extends ElementBaseArgs {
  variable: Variable<number>;
}

//todo make it so you can input the number

export function IntegerElement(props: IntegerElementProps) {
  const [num, setNumber] = useStateWithPromise(props.variable.get(), 0);

  /*
  const setVariable = (val: number) =>
    void setNumber((t) => maybe(props.variable.set, val) ?? t);
*/
  const setDifference = (dif: number) => async () => {
    const newVal = await maybe(props.variable.set, num + dif);
    setNumber((t) => newVal ?? t);
  };

  return (
    <ElementBase {...props}>
      <ButtonGroup>
        <Button onClick={setDifference(-1)}>-</Button>
        <Button disabled>{num}</Button>
        <Button onClick={setDifference(+1)}>+</Button>
      </ButtonGroup>
    </ElementBase>
  );
}
