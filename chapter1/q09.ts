function findNotSameMenWomen (m: number, w: number) {
  const makeTwoDimStorage = (row: number, col: number) => {
   const bin = Array.from({ length: row + 1 }, 
     () => Array.from({ length: col + 1 }, () => 0))
   
   return (row: number, col: number, value?: number) => {
     if (!value) {				
       return bin[row][col]
     }
     else {
       bin[row][col] = value
       return value
     }
   }
  }
 const findPath = (men: number, women: number): number => {
   if (men == m && women == w) return 1
   if (men > m || women > w) return 0
   if (men == women) return 0
   if (m - men == w - women) return 0
   if (twoDimBin(men, women) != 0) return twoDimBin(men, women)
   else {
     const value = findPath(men + 1, women) + findPath(men, women + 1)
     return twoDimBin(men, women, value)
   }
  }
  const twoDimBin = makeTwoDimStorage(m, w)
  twoDimBin(0, 0, 1)
  if (m == w) return findPath(1, 0) + findPath(0, 1)
  if (m > w) return findPath(1, 0)
  else return findPath(0, 1)  
}

function runQ09 () {
 console.log(findNotSameMenWomen(20, 10))
}

runQ09()