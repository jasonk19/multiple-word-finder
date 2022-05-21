class BM {
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
    
    buildLast(pattern) {
        let last = [];
        for (let i = 0; i < 128; i++) {
            last[i] = -1;
        }
      
        for (let i = 0; i < pattern.length; i++) {
            last[pattern.charAt(i)] = i;
        }
      
        return last;
      }
      
    bmMatch(text, pattern) {
        let last = []
        last = this.buildLast(pattern);
        const n = text.length;
        const m = pattern.length;
        let i = m - 1;

        let count = 0
      
        if (i > n - 1) {
            return count;
        }
      
        let j = m - 1;
        while (i <= n - 1) {
            if (pattern.charAt(j) === text.charAt(i)) {
                if (j === 0) {
                    count++
                    let lo = last[text.charAt(i)];
                    if (lo == undefined) {
                        lo = 0
                    }
                    i = i + m - Math.min(j, 1 + lo);
                    j = m - 1;
                } else {
                    i--;
                    j--;
                }
            } else {
                let lo = last[text.charAt(i)];
                if (lo == undefined) {
                    lo = 0
                }
                i = i + m - Math.min(j, 1 + lo);
                j = m - 1;
            }
        }
      
        return count;
    }

    solve() {
        const patterns = this.convertUnique(this.pattern)
        const textLength = this.convert(this.text).length
        let countExist = 0

        for (let i = 0; i < patterns.length; i++) {
            let result = this.bmMatch(this.text, patterns[i])
            if (result !== -1) countExist += result
        }
        return Math.round(100 * countExist / textLength)
    }
}

module.exports = BM