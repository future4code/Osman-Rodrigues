export class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(
		id: string,
		email: string,
		name: string,
		password: string
	){
		console.log("Chamando o construtor da classe User")
		this.id = id
		this.email = email
		this.name = name 
		this.password = password
	}

	public getId(): string {
		return this.id
	}

	public getEmail(): string {
		return this.email
	}

	public getName(): string {
		return this.name
	}
	//4.
	public introduceYourself(): void{
		//5.
		console.log(`Olá, sou ${this.name}. Boa tarde!`)
	}
};
export class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
		super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
		this.creditCard = creditCard;
  }

  public getCreditCard(){
    return this.creditCard;
  }
};
export class Employee extends User{
	static BENEFITS_VALUE: number = 400;


	protected admissionDate: string;
	protected baseSalary: number;

	constructor(
		id: string, name: string, email: string, password: string,
		baseSalary: number, admissionDate: string
		){
		super(id, name,email, password);
		this.admissionDate = admissionDate;
		this.baseSalary = baseSalary;
	};

	getAdmissionDate = (): string => this.admissionDate;
	getBaseSalary = (): number => this.baseSalary; 
	//7. e 11.
	calculateTotalSalary = (): number => this.baseSalary += Employee.BENEFITS_VALUE;
};
export class Seller extends Employee{
	static SELLING_COMMISSION: number = 5;
	private salesQuantity: number = 0;

	setSalesQuantity = (quantity: number): void =>{
		this.salesQuantity += quantity
		console.log(this.salesQuantity)
	}; 

	//10. e 11.
	calculateTotalSalary =() => this.baseSalary += 400 + 
	(Seller.SELLING_COMMISSION * this.salesQuantity);
};
