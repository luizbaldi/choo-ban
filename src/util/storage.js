const CHOOBAN_KEY = 'chooban:'

class storage {
  static get(key) {
    const data = localStorage.getItem(`${CHOOBAN_KEY}${key}`)
    return JSON.parse(data) || []
  }

  static set(key, value) {
    localStorage.setItem(`${CHOOBAN_KEY}${key}`, JSON.stringify(value))
  }
}

export default storage