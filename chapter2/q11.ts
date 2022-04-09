function fibFilter (limit: number) {
	const digitSum = (num: number, result: number = 0): number => {
		if (num == 0) return result
		else return digitSum(
			Math.floor(num / 10),
			result + (num % 10)
		)
	}
	const digitSumDivide = (divisor: number, dividend: number): boolean => {
		return dividend % digitSum(divisor) === 0
	}
	const fibGen = function *() {
		let prev = 1
		let curr = 1
		let result: number[] = []
		while (result.length < limit) {
			[prev, curr] = [curr, prev + curr]
			let effect: boolean = yield curr
			if (effect) result.push(curr)	
		}
		return result
	}
	const filter = (decision: boolean = false, iter: Generator<number, number[], boolean>): number[] => {
		const { value, done } = iter.next(decision)
		if (done) return value
		else {
			if(!Array.isArray(value)) { 
				decision = digitSumDivide(value, value) 
			}
			return filter(decision, iter)
		}
	}
	return filter(false, fibGen())
	
}

function runQ11 () {
	console.log(fibFilter(5))
}

runQ11()