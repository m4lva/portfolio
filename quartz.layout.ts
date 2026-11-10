import { PageLayout, SharedLayout } from "./quartz/cfg"
export const defaultContentPageLayout: PageLayout = {}
export const defaultListPageLayout: PageLayout = {}
export const sharedPageComponents: SharedLayout = {}

Component.Explorer({
  title: "Navigering",
  folderDefaultState: "open",
  folderClickBehavior: "link",
  sortFn: (a, b) => {
    const order = { "process": 1, "contact": 2 }
    const aOrder = order[a.name.toLowerCase()] || 99
    const bOrder = order[b.name.toLowerCase()] || 99
    return aOrder - bOrder
  }
})

