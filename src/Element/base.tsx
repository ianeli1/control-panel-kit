import {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import * as React from "react";

export interface ElementBaseArgs {
  name: string;
  description?: string;
  icon?: React.ReactElement;
}

interface ElementBaseProps extends ElementBaseArgs {
  children?: React.ReactNode;
}

export function ElementBase(props: ElementBaseProps) {
  return (
    <ListItem>
      {props.icon && <ListItemIcon>{props.icon}</ListItemIcon>}
      <ListItemText primary={props.name} secondary={props.description} />
      <ListItemSecondaryAction>{props.children}</ListItemSecondaryAction>
    </ListItem>
  );
}
