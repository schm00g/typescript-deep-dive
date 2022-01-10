export const delayMillis = (delayMs: number): Promise<void> => new Promise(resolve => setTimeout(resolve, delayMs));

export const greet = (subject: string): string => `Hello ${subject}`

export const foo = async (): Promise<boolean> => {
  console.log(greet('World'))
  await delayMillis(1000)
  console.log('done')
  return true
}
