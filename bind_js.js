const father = {
    name: "James",
    income: 150000,
    add_money(){
    this.income = this.income + 5000
    } 
}

const son = {
    name:"James jr.",
    father_name: "James",
    income:0
}

console.log("1: ", son)
const add_money = father.add_money.bind(son)
add_money()
console.log("2: ", son)