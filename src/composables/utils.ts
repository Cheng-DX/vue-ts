export function writableComputed<T>(getter: () => T) {
  const innerRef = ref(getter()) as Ref<T>
  watch(getter, () => {
    innerRef.value = getter()
  })

  return innerRef
}
