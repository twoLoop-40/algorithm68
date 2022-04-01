function collaz (n: number): boolean {
	const start: (arg: number) => number = (n: number) => 3 * n + 1
	const forEven: (arg:number) => boolean = (trial: number): boolean => {
		const next = trial / 2
		return iter(next)
	}
	const forOdd: (arg: number) => boolean = (trial: number): boolean => {
		const next = trial * 3 + 1
		return iter(next)
	}
	const iter: (arg: number) => boolean = (trial: number): boolean => {
		if (trial === n) return true
		if (trial === 1) return false
		if (trial % 2 === 1) return forOdd (trial)
		else return forEven (trial)
	}
	return iter (start(n))
}

function findCollaz (from: number, to: number) {
	let count = 0
	for (let i = from; i <= to ; i++) {
		if (collaz(i)) count++
	}
	return count
}

function runQ06 () {
	console.log(findCollaz(2, 10000))
}

runQ06()
