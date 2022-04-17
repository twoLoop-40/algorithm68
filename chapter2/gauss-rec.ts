function gauss (from: number, to: number): number {
	const step = (a: number, b: number): number => {
		return a + b
	}
	const iter = (count: number): number => {
		if (count == to) return to
		else {
			return step (count, iter (count + 1))
		}
	}
	return iter(from)
}

function checkGauss (): void {
	console.log(gauss(5, 11))
}

checkGauss()