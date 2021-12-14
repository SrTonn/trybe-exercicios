const recursive = num => {
  return num <= 1 ? 1 : num * recursive(num - 1)
}

console.log(recursive(5), 24)