class BruteForce {
  constructor(pattern, text) {
      this.pattern = pattern.toLowerCase()
      this.text = text.toLowerCase()
  }

  convert(pattern) {
      const newPattern = pattern.split(" ")
      return newPattern
  }

  bruteForce(text, pattern) {
      const n = text.length
      const m = pattern.length
      let j
      for (let i = 0; i <= (n - m); i++) {
          j = 0
          while (j < m && (text.charAt(i+j) == pattern.charAt(j))) {
              j++
          }
          if (j == m) return i
      }
      return -1
  } 

  solve() {
      const patterns = this.convert(this.pattern)
      const textLength = this.convert(this.text).length
      let countExist = 0

      for (let i = 0; i < patterns.length; i++) {
          let result = this.bruteForce(this.text, patterns[i])
          if (result !== -1) countExist++
      }
      return Math.round(100 * countExist / textLength)
  }
}

module.exports = BruteForce