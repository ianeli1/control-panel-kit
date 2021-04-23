# control-panel-kit

Let's you create a control panel very easily and without any complex React innuendos

### What you need

This library and the code the control panel is for!

### How do I use it

You'll need to import the library's main object, `ControlPanel`. It's a standard React object.

```ts
import { ControlPanel, PageArgs } from "control-panel-kit";

const pages: PageArgs[] = [
  {
    title: "Name Of The Section",
    icon: <StandardIconFromMaterialUI />,
    elements: [
      {
        type: "integer", //optional, depends on what you're doing
        name: "Some Number",
        get() {
          //code time!
        },
        set(x: number) {
          //some more code
          return 69; //don't forget to return the new value
        },
        //both get and set can be async
      },
    ],
  },
];

function YourSite() {
  return (
    <YourSiteContainer>
      <ControlPanel name="NameOfTheCP" />
    </YourSiteContainer>
  );
}
```

### How does it look?

![screenshot](https://cdn.discordapp.com/attachments/790307229336469544/835011898130300948/Screenshot_from_2021-04-22_22-38-14.png)
