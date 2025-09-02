// =============================
// filter() + map()
// =============================
const studentScores = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 68 },
    { name: 'David', score: 55 },
    { name: 'Eve', score: 78 },
]

// โจทย์คือดึงรายชื่อคนที่สอบผ่าน (>=70) แล้วแปลงชื่อให้เป็นตัวใหญ่ทั้งหมด
function getPassingNames(studentScores) {
    return studentScores
        .filter((value) => value.score >= 70)   // กรองคนที่คะแนน >= 70
        .map((value) => value.name.toUpperCase()) // แปลงชื่อเป็นตัวใหญ่
}

const passingNames = getPassingNames(studentScores)
console.log(passingNames) // ["ALICE", "BOB", "EVE"]


// =============================
// Array.isArray()
// =============================
console.log(Array.isArray(studentScores))
// วิธีเช็คว่าเป็น array รึป่าว


// =============================
// concat() และ toString()
// =============================
const arr1 = [1, 2, 3]
const arr2 = [4, 5]

// concat = การต่อ array
console.log(arr1.concat(arr2)) // [1, 2, 3, 4, 5]

// toString = เปลี่ยน array เป็น string
console.log(arr1.toString()) // "1,2,3"
// concat ใช้รวม array หลายตัว, toString ใช้แปลง array เป็นข้อความ


// =============================
// การ sort array (primitive)
// =============================
const months2 = ['March', 'jan', 'feb', 'Dec']
months2.sort()
console.log(`months2: ${months2}`) // months2: Dec,March,feb,jan
// sort string เรียงตาม Unicode (ไม่ได้เรียงตามเดือนจริง)

const array14 = [1, 30, 4, 21, 100000]
array14.sort()
console.log(`array14: ${array14}`) 
// array14: 1,100000,21,30,4
// sort number เรียงตาม string ไม่ใช่ตามค่าเลขจริง


// =============================
// การ sort array (object)
// =============================
const products = [
    { id: 123, name: 'bag' },
    { id: 2, name: 'pen' },
    { id: 33, name: 'mouse' }
]

// เรียงตาม id (จากน้อยไปมาก)
console.log(products.sort((a, b) => a.id - b.id))

// =============================
// sort() + localeCompare()
// =============================
const stds = [
    { id: 1, name: "ada", email: "tisanai@sit.kmutt.ac.th" },
    { id: 1, name: "Tisanai", email: "tisanai@sit.kmutt.ac.th" },
    { id: 5, name: "Pornchai", email: "pornchai@sit.kmutt.ac.th" },
    { id: 2, name: "Suda", email: "suda@sit.kmutt.ac.th" },
]

// เรียงตามชื่อ โดยไม่สนตัวเล็ก-ใหญ่
console.log(
    stds.sort((a, b) => 
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    )
)
// localeCompare() ใช้เปรียบเทียบ string ตามภาษา local
