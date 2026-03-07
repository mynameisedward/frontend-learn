const arr = ['im', 'bo', 'yo']
arr.size = 12
arr.yo = 'AYOO'

for(const key in arr) {
    console.log(key)
}