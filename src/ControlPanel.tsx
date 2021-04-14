import {
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@material-ui/core";
import * as React from "react";
import { useState } from "react";
import { Page, PageArgs } from "./Page";

export interface ControlPanelArgs {
  name: string;
  pages: PageArgs[];
}

export function ControlPanel(props: ControlPanelArgs) {
  const [index, setIndex] = useState(0);
  const setIndexPadded = (index: number) => () =>
    void setIndex(index >= props.pages.length ? 0 : index);
  const drawerElements = React.useMemo(
    () => (
      <>
        <List subheader={<ListSubheader>{props.name}</ListSubheader>}>
          {props.pages.map(({ title, icon }, key) => (
            <>
              <ListItem key={key} button onClick={setIndexPadded(key)}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItem>
            </>
          ))}
        </List>
      </>
    ),
    props.pages
  );

  return (
    <Box>
      <Drawer variant="permanent" anchor="left">
        {drawerElements}
      </Drawer>
      <Container>
        <Page {...props.pages[index]} />
      </Container>
    </Box>
  );
}
