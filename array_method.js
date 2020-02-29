// Array Method
var data = ['A', 'B', 'C', 'D']
// push 
// เพิ่มสมาชิกต่อท้าย array
data.push('E')
console.log(data)
// ['A', 'B', 'C', 'D', 'E']

// pop
// ลบสมาชิกตัวสุดท้ายออก
var x = data.pop()
console.log(data)
// ['A', 'B', 'C', 'D']

// shift
// ลบสมาชิกตัวสุดแรกออก
var y = data.shift()
console.log(data)
// ['B', 'C', 'D']

// unshift
// แทรกสมาชิกตัวสุดแรก
data.unshift('X')
console.log(data)
// ['X', 'B', 'C', 'D']

// splice
// ใช้สำหรับแก้ไข Array โดยระบุ
// Array.splice(start, deleteCount, item1, ....., itemX)
// start = ตำแหน่ง
// deleteCount = จำนวนสมาชิกที่ต้องการลบ
// item1, item2, ... = สมาชิกที่ต้องการลบ
var data2 = ['A', 'B', 'C', 'D']
// ตำแหน่ง 0 = A, 1 = B, 2 = C, 3 = D

// ลบ C ออก
console.log((data2.splice(2,1)))
// ABD
console.log((data2.splice(1,1)))
// ACD
console.log((data2.splice(1,5)))
// A

// แทรก X ระหว่าง B กับ C
console.log((data2.splice(2,0,'X')))
// ABXCD
// -----
console.log((data2.splice(2,1,'X')))
// ABXD    
console.log(data2.splice(data2.length, 0, 'E'))
// ABCDE
console.log(data2.splice(data2.length-1, 1))
// ABC
console.log(data2.splice(0,1))
// BCD
console.log(data2.splice(0,1))
// XABCD