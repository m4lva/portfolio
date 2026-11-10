Component.Explorer({
  title: "Navigering",
  sortFn: (a, b) => {
    const order = { "process": 1, "contact": 2 }
    const aName = a.name.toLowerCase()
    const bName = b.name.toLowerCase()
    const aOrder = order[aName] || 99
    const bOrder = order[bName] || 99
    return aOrder - bOrder
  }
})

