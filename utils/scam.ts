export const pleaseFuckOff = (message: string) => {
    const cipher = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const originalAlpha = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return message.replace(/[a-z]/gi, letter => cipher[originalAlpha.indexOf(letter)])
  }