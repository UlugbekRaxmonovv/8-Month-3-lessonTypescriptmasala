console.log("typescript");
// let add:(a:number, b:number) => number = (a:number,  b:number) : number =>
//     a + b
// console.log( add(10,20));
// uyga vazifa
// Encapsulation
// 1-masala
// class YEAR {
//   public yanvar: string;
//   public fevral: string;
//   public mart: string;
//   public aprel: string;
//   public may: string;
//   public iyun: string;
//   public iyul: string;
//   public avqust: string;
//   public sentyabr: string;
//   public oktyabr: string;
//   public noyabr: string;
//   public dekabr: string;
//   constructor(
//     yanvar: string,
//     fevral: string,
//     mart: string,
//     aprel: string,
//     may: string,
//     iyun: string,
//     iyul: string,
//     avqust: string,
//     sentyabr: string,
//     oktyabr: string,
//     noyabr: string,
//     dekabr: string
//   ) {
//     this.yanvar = yanvar;
//     this.fevral = fevral;
//     this.mart = mart;
//     this.aprel = aprel;
//     this.may = may;
//     this.iyun = iyun;
//     this.iyul = iyul;
//     this.avqust = avqust;
//     this.sentyabr = sentyabr;
//     this.oktyabr = oktyabr;
//     this.noyabr = noyabr;
//     this.dekabr = dekabr;
//   }
//   getMonth(month: string): string {
//     return this[month];
//   }
//   setMonth(month: string, value: string): void {
//     this[month] = value;
//   }
// }
// let newYear = new YEAR(
//   "Yanvar",
//   "Fevral",
//   "Mart",
//   "Aprel",
//   "May",
//   "Iyun",
//   "Iyul",
//   "Avqust",
//   "Sentyabr",
//   "Oktyabr",
//   "Noyabr",
//   "Dekabr"
// );
// console.log(newYear);
// console.log(newYear.getMonth("yanvar"));
// newYear.setMonth("yanvar", "yangi month");
// console.log(newYear.getMonth("yanvar"));
// Inheritence
// 1-masala
// class Numbers extends YEAR {
//   public one: number;
//   public two: number;
//   public three: number;
//   public four: number;
//   public five: number;
//   public six: number;
//   public seven: number;
//   public eight: number;
//   public nine: number;
//   public ten: number;
//   public eleven: number;
//   public twelve: number;
//   constructor(
//     yanvar: string,
//     fevral: string,
//     mart: string,
//     aprel: string,
//     may: string,
//     iyun: string,
//     iyul: string,
//     avqust: string,
//     sentyabr: string,
//     oktyabr: string,
//     noyabr: string,
//     dekabr: string,
//     one: number,
//     two: number,
//     three: number,
//     four: number,
//     five: number,
//     six: number,
//     seven: number,
//     eight: number,
//     nine: number,
//     ten: number,
//     eleven: number,
//     twelve: number,
//   ) {
//     super(yanvar, fevral, mart, aprel, may, iyun, iyul, avqust, sentyabr, oktyabr, noyabr, dekabr);
//     this.one = one;
//     this.two = two;
//     this.three = three;
//     this.four = four;
//     this.five = five;
//     this.six = six;
//     this.seven = seven;
//     this.eight = eight;
//     this.nine = nine;
//     this.ten = ten;
//     this.eleven = eleven;
//     this.twelve = twelve;
//   }
//   Add(): void {
//     console.log("Yanvar:", this.one);
//     console.log("Fevral:", this.two);
//     console.log("Mart:", this.three);
//     console.log("Aprel:", this.four);
//     console.log("May:", this.five);
//     console.log("Iyun:", this.six);
//     console.log("Iyul:", this.seven);
//     console.log("Avqust:", this.eight);
//     console.log("Sentyabr:", this.nine);
//     console.log("Oktyabr:", this.ten);
//     console.log("Noyabr:", this.eleven);
//     console.log("Dekabr:", this.twelve);
//   }
// }
// let numbers = new Numbers(
//   'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avqust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr',
//   31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
// );
// numbers.Add()
// Encapsulation
// 2-masala
// class LearningCenter{
//   public Frontend: string;
//   public Backend: string;
//   public Paytin: string;
//   public GrahicDesign: string;
//   constructor(frontend: string, backend: string,  Paytin: string, GrahicDesign: string){
//     this.Frontend = frontend;
//     this.Backend = backend;
//     this.Paytin = Paytin;
//     this.GrahicDesign = GrahicDesign;
//   }
//   get(obj: string, value: string ): string {
//    if(this[obj] == value){
//     return `2ta qiymat bir biriga teng ${obj}`
//    }
//    else{
//     return `2ta qiymat bir biriga teng emas ${value}`
//    }
//   }
// }
// let resualt = new LearningCenter('HTML / SASS', 'Node.js', 'Paytin','Moshin Graphics')
// console.log(resualt);
// console.log(resualt.get('frontend','sass'));
// console.log(resualt.get('backend','node.js'));
// console.log(resualt.get('Paytin','Goo'));
// console.log(resualt.get('GrahicDesign','Moshin Graphics'));
// Inheritence
// 2-masala
// class Calculet extends LearningCenter{
//   public numberOfStudentsFrontend: number;
//   public numberOfStudentsBackend: number;
//   public numberOfStudentsPaytin: number;
//   public numberOfStudentsGrahicDesign: number;
//   constructor(frontend: string, backend: string,  Paytin: string, GrahicDesign: string){
//     super(frontend, backend,  Paytin, GrahicDesign);
//     this.Frontend = frontend;
//     this.Backend = backend;
//     this.Paytin = Paytin;
//     this.GrahicDesign = GrahicDesign;
//     this.numberOfStudentsFrontend = 800;
//     this.numberOfStudentsBackend = 1000;
//     this.numberOfStudentsPaytin = 300;
//     this.numberOfStudentsGrahicDesign = 600;
//   }
//  add():number{
//   let javob = this.numberOfStudentsBackend % this.numberOfStudentsFrontend
//   let javob1 = this.numberOfStudentsGrahicDesign / this.numberOfStudentsPaytin
//   return javob1 + javob
//  }
// }
// const calculator = new Calculet("HTML / SASS", "Node.js", "Paytin", "Moshin Graphics");
// let resualt1 = calculator.add()
// console.log(resualt1);
// Encapsulation
// 3-masala
// class Car{
//   public color: string;
//   public model: string;
//   readonly year: number;
//   private price: number;
//   constructor(color: string, model: string, year: number, price: number){
//     this.color = color;
//     this.model = model;
//     this.year = year;
//     this.price = price;
//   }
//   Malumot():string{
//     return `Toyota mashinasi haqida malumot:
// Brendi:${this.model}
// Rangi:${this.color}
// Yil:${this.year}
// Narxi:${this.price}.000`
//   }
// }
// let car1 = new Car('black','Toyoto',2021,200);
// console.log(car1.Malumot());
// Inheritence
// 3-masala
// class Cars extends Car{
//   public Credit: number;
//   public CreditIsOneyear: number;
//   constructor(color: string, model: string, year: number, price: number){
//     super(color, model, year, price);
//     this.Credit = 3000;
//     this.CreditIsOneyear = 15;
//   }
//   add():boolean{
//     return this.Credit % this.CreditIsOneyear == 0 ;
//   }
// }
// let students = new Cars('black','Toyoto',2021,200)
// let javob2 = students.add()
// console.log(javob2);
// / Encapsulation
// 4-masala
// class Mevalar{
//   public  olma: string;
//   public  banan: string;
//   public  uzum: string;
//   constructor(olma: string,   uzum: string, banan: string){
//     this.olma = olma;
//     this.banan = banan;
//     this.uzum = uzum;
//   }
//   get(obj: string, value: string ): string {
//     let javob = this[obj] + this[value];
//     return javob
//   }
// }
// let resualt = new Mevalar('Olma','uzum','banan')
// let javob = resualt.get('olma','banan')
// console.log(javob);
// Inheritence
// 4-masala
// class Price extends Mevalar{
//   public olma1: number;
//   public banan1: number;
//   public uzum1: number;
//   constructor(olma: string,   uzum: string, banan: string){
//     super(olma, uzum, banan);
//     console.log(`Olma  ${this.olma1 = 100}`);
//     console.log(`Banan ${this.banan1 = 200}`);
//     console.log(`Uzum ${this.uzum1 = 300}`);
//   }
//   add():number{
//     return `Mevalarning narxi ${this.olma1 + this.banan1 + this.uzum1}`;
//   }
// }
// let resualt1 = new Price('Olma','uzum','banan')
// let javob1 = resualt1.add()
// console.log(javob1);
// / Encapsulation
// 5-masala
// class Phone {
//   private samsung: string;
//   public price: number;
//   private apple: string;
//   public price1: number;
//   private huawei: string;
//   public price2: number;
//   constructor(
//     samsung: string,
//     apple: string,
//     huawei: string,
//     price: number,
//     price1: number,
//     price2: number
//   ) {
//     this.samsung = samsung;
//     this.apple = apple;
//     this.huawei = huawei;
//     this.price = price;
//     this.price1 = price1;
//     this.price2 = price2;
//   }
//   get(): void {
//     let javob = `Telfon nomi:${this.samsung} narxi:${this.price}$`;
//     console.log(javob);
//     let javob1 = `Telfon nomi:${this.apple} narxi:${this.price1}$`;
//     console.log(javob1);
//     let javob2 = `Telfon nomi:${this.huawei} narxi:${this.price2}$`;
//     console.log(javob2);
//   }
// }
// let resualt = new Phone("samsung", "apple", "huawei", 200, 1000, 4000);
// let javob = resualt.get();
// Inheritence
// 5-masala
// class Phones extends Phone {
//   public price3: number;
//   constructor(
//     samsung: string,
//     apple: string,
//     huawei: string,
//     price: number,
//     price1: number,
//     price2: number,
//     price3: number
//   ) {
//     super(samsung, apple, huawei, price, price1, price2);
//     this.price3 = price3;
//   }
//   add(): number {
//     let total = this.price + this.price1 + this.price2 + this.price3;
//     return `Telefoning jami price: ${total}`;
//   }
// }
// let resualt1 = new Phones("samsung", "apple", "huawei", 200, 1000, 4000, 5000);
// let javob1 = resualt1.add();
// console.log(javob1);
