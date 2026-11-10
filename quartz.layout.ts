Component.Explorer({
  title: "Navigering", // Renames your sidebar title
  sort: (a, b) => {
    const order = { "process": 1, "contact": 2 }
    const aOrder = order[a.name.toLowerCase()] || 99
    const bOrder = order[b.name.toLowerCase()] || 99
    return aOrder - bOrder
  }
})

