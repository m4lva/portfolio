Component.Explorer({
  title: "Navigering",
  sort: (a, b) => {
    const order: { [key: string]: number } = { "process": 1, "contact": 2 
}
    const aOrder = order[a.displayName.toLowerCase()] || 99
    const bOrder = order[b.displayName.toLowerCase()] || 99
    return aOrder - bOrder
  }
})

