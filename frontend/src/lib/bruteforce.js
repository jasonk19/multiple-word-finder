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
      let pos = []
      for (let i = 0; i <= (n - m); i++) {
          j = 0
          while (j < m && (text.charAt(i+j) == pattern.charAt(j))) {
              j++
          }
          if (j == m) pos.push(i)
      }
      return pos
  } 

  solve() {
      const patterns = this.convertUnique(this.pattern)
      let resMap = new Map()

      for (let i = 0; i < patterns.length; i++) {
          let result = this.bruteForce(this.text, patterns[i])
          if (result.length != 0) resMap.set(patterns[i], result)
      }
      return resMap
  }
}

module.exports = BruteForce