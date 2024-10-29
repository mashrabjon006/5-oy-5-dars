// 1. 
function kotta(fullName) {
    return fullName.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
console.log(kotta("john doe"))

// 2.
function strin(str) {
    return str.split('').reverse().join('')
}
console.log(stin("hello"))

// 3.//
function funct(numbers) {
    let total = 0

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }

    return total / numbers.length
}

console.log(funct([1, 2, 3, 4, 5]))


// 4. 
function uzun(words) {
    return words.map(word => word.length)
}
console.log(uzun(["apple", "bananana", "ehr"]))

// 5. 
function oddNum(numbers) {
    return numbers.filter(num => num % 2 !== 0)
}
console.log(oddNum([1, 2, 3, 4, 5]))

// 6. 
function abs(obj1, obj2) {
    const res = {}
    for (let key in obj1) {
        res[key] = obj1[key]
    }

    for (let key in obj2) {
        res[key] = obj2[key]
    }

    return res
}

console.log(abs({ a: 1 }, { b: 2 }))


// 7. 
function trimSpaces(str) {
    return str.split(' ').join('');
}

console.log(trimSpaces(" h e llo "))


// 8. Obyektdagi barcha qiymatlarni massivga o‘tkazuvchi funksiya
function birga(obj) {
    return Object.values(obj)
}
console.log(birga({ a: 1, b: 2 }))

// 9. 
function minMax(numbers) {
    let min = numbers[0]
    let max = numbers[0]

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) min = numbers[i]
        if (numbers[i] > max) max = numbers[i]
    }

    return { min, max }
}

console.log(minMax([1, 2, 3, 4, 5]))


// 10.
function unli(str) {
    let count = 0

    for (let char of str) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
            char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
            count++
        }
    }

    return count
}

console.log(unli("hello"))


// 11.
function addTwo(numbers) {
    return numbers.map(num => num + 2)
}
console.log(addTwo([1, 2, 3]))

// 12. 

// 13. 
function kota(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num
    }

    const avg = sum / numbers.length;
    const result = []

    for (let num of numbers) {
        if (num > avg) {
            result.push(num);
        }
    }

    return result
}

console.log(kota([1, 2, 3, 4, 5])); // [4, 5]

// 14. 
function qwe(str, char) {
    if (str.startsWith(char) && str.endsWith(char)) {
        return str.slice(1, -1)
    }
    return str
}
console.log(qwe("!hello!", "!"))

// 15. 


// 16. 
function reverseAray(arr) {
    return arr.reverse()
}
console.log(reverseAray([1, 2, 3]))

// 17. 
function katta(str) {
    return str.split(' ').map(word => word.toUpperCase()).join(' ')
}
console.log(katta("hello world"))

// 18. 
function abs(people, age) {
    return people.filter(person => person.age > age)
}
console.log(abs([{ name: "Alice", age: 25 }, { name: "Bob", age: 20 }], 21))

// 19. 
function ab(arr, element) {
    return arr.filter(item => item === element).length
}
console.log(ab([1, 2, 2, 3, 2], 2))

// 20. 
