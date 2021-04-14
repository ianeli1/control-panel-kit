import { Card, List, ListSubheader } from "@material-ui/core";
import * as React from "react";
import { ElementBase } from "./Element/base";
import { IntegerElement } from "./Element/integer";
import { StringElement } from "./Element/string";
import { ToggleElement } from "./Element/toggle";
import { Variable } from "./types";

export interface PageArgs {
  title: string;
  icon?: React.ReactElement;
  elements: Variable[];
}

export function Page(props: PageArgs) {
  const elements = props.elements.map((x, i) => {
    const mode = x.type ?? typeof x.get();
    const key = props.title + i + mode + x.name;
    switch (mode) {
      case "boolean":
        return (
          <ToggleElement
            name={x.name}
            variable={x as Variable<boolean>}
            key={key}
          />
        );
      case "integer":
        return (
          <IntegerElement
            name={x.name}
            variable={x as Variable<number>}
            key={key}
          />
        );
      case "string":
        return (
          <StringElement
            name={x.name}
            variable={x as Variable<string>}
            key={key}
          />
        );
      default:
        return <ElementBase name="undefined" key={key} />;
    }
  });

  return (
    <Card>
      <List subheader={<ListSubheader>{props.title}</ListSubheader>}>
        {elements}
      </List>
    </Card>
  );
}
