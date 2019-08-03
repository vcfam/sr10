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
export const isBrowser = () => typeof window !== "undefined"
export const handleLogin = (password) => {
  if (myChipher(password) === a2a2ae2dbcce4) {
    window.localStorage.setItem("loggedIn", password)
    return true
  }
  return false
}
export const isLoggedIn = () => {
  if (!window.localStorage.getItem("loggedIn")) return false
  return isBrowser() && myChipher(window.localStorage.getItem("loggedIn")) === a2a2ae2dbcce4
  ? true
  : false
}
export const logout = callback => {
  window.localStorage.removeItem("loggedIn")
  callback()
}