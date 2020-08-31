declare module "*.css" {
  const css: { [key: string]: string };
  export default css;
}

declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
