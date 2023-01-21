const numers=[1,2,3,3,4,4]
let uniqeNumbers=new Set(numers)
console.log(uniqeNumbers)
const string12=["apple","boll","apple","cat"]
let uniqeStrings=new Set(string12)
console.log(uniqeStrings)
const objects=[{apple:"apple"},{boll:"boll"},{apple:"apple"},{cat:"cat"}]
let uniqeobjectsgs=new Set([...objects])
console.log(uniqeobjectsgs)
