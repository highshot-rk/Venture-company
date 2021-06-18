import {EgretLoadable} from "../../egret";

const Layout1 = EgretLoadable({
  loader: () => import("./Layout1/Layout1")
});

export const EgretLayouts = {
  layout1: Layout1,
}