function echo(value) {
  return value
}
function getLength(str) {
  return str.length
}
const TAX = 0.07
let x = 1

class Book {
    constructor(isbn, title) {
        this.isbn = isbn
        this.title = title
    }
}

//export list
export { 
  Book,             // export class
  echo,             // export function
  getLength as default, // export function โดยตั้งชื่อ default
  TAX as VAT        // export constant โดยเปลี่ยนชื่อเป็น VAT
}