class KMP {
    constructor(pattern, text) {
        this.pattern = pattern.toLowerCase()
        this.text = text.toLowerCase()
    }

    convert(pattern) {
        const newPattern = pattern.split(" ")
        return newPattern
    }

    computeFail(pattern) {
        let fail = []
        fail[0] = 0
      
        const m = pattern.length
        let j = 0
        let i = 1
      
        while (i < m) {
            if (pattern.charAt(j) === pattern.charAt(i)) {
                fail[i] = j + 1
                i++
                j++
            } else if (j > 0) {
                j = fail[j - 1]
            } else {
                fail[i] = 0
                i++
            }
        }
      
        return fail
      }
      
    kmpMatching(text, pattern) {
        const n = text.length
        const m = pattern.length
      
        const fail = this.computeFail(pattern)
      
        let i = 0;
        let j = 0;
      
        while (i < n) {
            if (pattern.charAt(j) === text.charAt(i)) {
                if (j === m - 1) {
                    return i - m + 1
                }
                i++
                j++
            } else if (j > 0) {
                j = fail[j - 1]
            } else {
                i++
            }
        }
        return -1;
    }

    solve() {
        const patterns = this.convert(this.pattern)
        const textLength = this.convert(this.text).length
        let countExist = 0

        for (let i = 0; i < patterns.length; i++) {
            let result = this.kmpMatching(this.text, patterns[i])
            if (result !== -1) countExist++
        }
        return Math.round(100 * countExist / textLength)
    }
}

module.exports = KMP