class KMP {
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
        let pos = []
        const n = text.length
        const m = pattern.length
      
        const fail = this.computeFail(pattern)
      
        let i = 0;
        let j = 0;
      
        while (i < n) {
            if (pattern.charAt(j) === text.charAt(i)) {
                if (j === m - 1) {
                    pos.push(i - m + 1);
                }
                i++
                j++
            } else if (j > 0) {
                j = fail[j - 1]
            } else {
                i++
            }
        }
        return pos;
    }

    solve() {
        const patterns = this.convertUnique(this.pattern)
        let resMap = new Map()

        for (let i = 0; i < patterns.length; i++) {
            let result = this.kmpMatching(this.text, patterns[i])
            if (result.length != 0) resMap.set(patterns[i], result) 
        }
        return resMap
    }
}

module.exports = KMP