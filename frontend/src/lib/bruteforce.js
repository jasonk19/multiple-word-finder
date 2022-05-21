class BruteForce {
  constructor(pattern, text) {
      this.pattern = pattern.toLowerCase()
      this.text = text.toLowerCase()
  }

  convert(pattern) {
    return pattern.split(" ")
  }

  convertUnique(pattern) {
      let newPattern = []
      pattern.split(" ").forEach(function(e, i) {
          if (newPattern.indexOf(e) == -1) {
              newPattern.push(e)
          }
      })
      return newPattern
  }

  bruteForce(text, pattern) {
      const n = text.length
      const m = pattern.length
      let j
      let count = 0
      for (let i = 0; i <= (n - m); i++) {
          j = 0
          while (j < m && (text.charAt(i+j) == pattern.charAt(j))) {
              j++
          }
          if (j == m) count++
      }
      return count
  } 

  solve() {
      const patterns = this.convertUnique(this.pattern)
      const textLength = this.convert(this.text).length
      let countExist = 0

      for (let i = 0; i < patterns.length; i++) {
          let result = this.bruteForce(this.text, patterns[i])
          if (result !== -1) countExist += result
      }
      return Math.round(100 * countExist / textLength)
  }
}

module.exports = BruteForce