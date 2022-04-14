interface gauss <T> {
	(arg0: T, calc: (arg2: T, arg3: T) => T): T
}

const addGauss: gauss<number> = (count, calc) => {
	if (count <= 0) return 0
	else { 
		return calc(count, addGauss(count - 1, calc))
	}
}

console.log(addGauss(10, (a, b) => a + b))