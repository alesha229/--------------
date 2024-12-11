// const calculator = {
//     value: 0,
//     add(n){
//         this.value += n
//         return this
//     },
//     subtract(n){
//         this.value /= n
//         return this
//     },
//     multiply(n){
//         this.value *= n
//         return this
//     }

// }
// calculator.add(10).multiply(10).subtract(10)
// console.log(calculator.value)

// function Animal(name){
//     this.name = name
//     this.speak = function(){
//         console.log(`Animal ${this.name} makes a sound`
//         )
//     }
//     this.eat = function(){
//         console.log(`${this.name} is eating`)
//     }

// }

// function Dog(name, breed){
// Animal.apply(this, arguments)
// this.name = name
// this.breed = breed
// this.speak = this.speak = function(){
//     console.log(`Animal ${this.name} makes a woof`
//     )
// }
// }
// let dog = new Dog('chuppy', 'buldog')

//  console.log(dog)



// function Vehicle(brand){
//     this.brand = brand
// }
// function Car(brand, model){
// Vehicle.apply(this, arguments)
     
// this.model = model
// }
// function ElectricCar(brand, model, batteryLife){
// Car.apply(this, arguments)

// this.batteryLife = batteryLife
// }

// let ElecCar = new ElectricCar('Honda', 'accorde','500km')
// console.log(ElecCar)




// const user = {
//     name: "John",
//     greetings:[],
//     greet(greeting){
//         this.greetings.push(greeting + ", "+ this.name)
//     },
//     getAllGreetings(){
//         return console.log(this.greetings)
//     }
// }



// setTimeout(()=>user.greet('hi'), 1000)

// user.getAllGreetings()

// console.log(user)



// function BankAccount(initialBalance){
// this._balance = initialBalance

    
// this.deposit = function(amount){
//     this._balance += amount    
// }

// this.withdraw = function(amount){
//     this._balance -= amount
// }
// this.getBalance = function(){
//     return this._balance
// }

// }


// let userAcc = new BankAccount(10000)
// userAcc._balance = 0
// console.log(userAcc)


// let people = {
//     name :'vasya'
// }
// let message = {
//     message:"heeelp",
//     sayHi(){
//         console.log('hi '+this.name)
//     }
// }

// function log(){
//     console.log(this.message)
// }
// let logWithNewContext = log.bind(message)
// logWithNewContext()

// let sayHiWithNewContext = message.sayHi.bind(people)

// sayHiWithNewContext()


// let user = {
//     firstName:'Вася',
//     say(phrase){
//         console.log(`${phrase}, ${this.firstName} !`)
//     }
// }

// let say = user.say.bind(user)

// say("привет")
// say("пока")

// function mul(a,b){
//     return a * b
// }

// let double = mul.bind(null,2)
// console.log(double(3))
// console.log(double(2))


// function f(){
//     console.log(this)
// }

// let user = {
//     g: f.bind(null)
// }

// user.g()


// Контекст связанной функции жёстко фиксирован. Изменить однажды привязанный 
// контекст уже нельзя.

// Так что хоть мы и вызываем user.g(), внутри исходная функция будет вызвана 
// с this=null. Однако, функции g совершенно без разницы, какой this она получила. 
// Её единственное предназначение – это передать вызов в f вместе с аргументами и ранее 
// указанным контекстом null, что она и делает.

// Таким образом, когда мы запускаем user.g(), исходная функция вызывается с this=null.

// function f(){
//     console.log(this.name)
// }

// f = f.bind({name:'Вася'}).bind({name:'Валя'})
// f()


// Экзотический объект bound function, возвращаемый при первом вызове f.bind(...), 
// запоминает контекст (и аргументы, если они были переданы) только во время создания.

// Следующий вызов bind будет устанавливать контекст уже для этого объекта.
//  Это ни на что не повлияет.

// Можно сделать новую привязку, но нельзя изменить существующую


// function askPassword(ok, fail){
//     let password = prompt("Password?", '')
//     if(password == "rockstart") ok()
//         else fail()
// }


// let user = {
//     name:'Вася',

//     loginOk(){
//         console.log(this.name + 'logged')
//     },
//     loginFail(){
//         console.log(this.name + "logged out")
//     },
// }



// askPassword(user.loginOk.bind(user), user.loginFail.bind(user))


function askPassword(ok, fail){
    let password = prompt("Password?", '')
    if(password == "rockstart") ok()
        else fail()
}


let user = {
    name:'Вася',

   login(result){
    console.log(this.name + (result ? 'logged in': 'failed to log in'))
   }
}



askPassword(user.login.bind(user,true), user.login.bind(user,false))



// const timer = {
//     seconds: 0,
//     interval: null,
    
//     start() {
//         // this.interval = setInterval(() => {
//         //     this.seconds++
//         //     console.log(this.seconds)
//         // }, 1000)

//         this.interval =  setInterval(function (){
//             this.second++
//             console.log(this.seconds)
//         },1000)
//     },
    
//     stop() {
//         clearInterval(this.interval)
//     }
// }

// timer.start()