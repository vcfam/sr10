const cipher = salt => {
  const textToChars = text => text.split('').map(c => c.charCodeAt(0))
  const byteHex = n => ("0" + Number(n).toString(16)).substr(-2)
  const applySaltToChar = code => textToChars(salt).reduce((a,b) => a ^ b, code)    

  return text => text.split('')
      .map(textToChars)
      .map(applySaltToChar)
      .map(byteHex)
      .join('')
}
const myChipher = cipher('isladog')
const a2a2ae2dbcce4 = "3f121e18123a1515123d1a"
const g = typeof window !== "undefined" ? window : 0
export const isBrowser = () => typeof window !== "undefined"
export const handleLogin = (password) => {
  if (myChipher(password) === a2a2ae2dbcce4) {
    g.localStorage.setItem("loggedIn", password)
    return true
  }
  return false
}
export const isLoggedIn = () => {
  if (isBrowser()) {
    if (!g.localStorage.getItem("loggedIn")) return false
    return isBrowser() && myChipher(g.localStorage.getItem("loggedIn")) === a2a2ae2dbcce4
    ? true
    : false
  }
  return false
}
export const logout = callback => {
  g.localStorage.removeItem("loggedIn")
  callback()
}