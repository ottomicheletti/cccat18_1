export default class AccountModel {
    private id: String;
    private name: String;
    private email: String;
    private cpf: String;
    private carPlate: String;
    private isPassenger: boolean;
    private isDriver: boolean;
    private password: String|null;

    constructor(id: String, name: String, email: String, cpf: String, carPlate: String, isPassenger: boolean, isDriver: boolean, password: String|null) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.cpf = cpf;
        this.carPlate = carPlate;
        this.isPassenger = isPassenger;
        this.isDriver = isDriver;
        this.password = password;
    }

    public setId(id: String): void {
        this.id = id;
    }

    public getId(): String {
        return this.id;
    }

    public setName(name: String): void {
        this.name = name;
    }

    public getName(): String {
        return this.name;
    }

    public setEmail(email: String): void {
        this.email = email;
    }

    public getEmail(): String {
        return this.email;
    }

    public setCpf(cpf: String): void {
        this.cpf = cpf;
    }

    public getCpf(): String {
        return this.cpf;
    }

    public setCarPlate(carPlate: String): void {
        this.carPlate = carPlate;
    }

    public getCarPlate(): String {
        return this.carPlate;
    }

    public setIsPassenger(isPassenger: boolean): void {
        this.isPassenger = isPassenger;
    }

    public getIsPassenger(): boolean {
        return this.isPassenger;
    }

    public setIsDriver(isDriver: boolean): void {
        this.isDriver = isDriver;
    }

    public getIsDriver(): boolean {
        return this.isDriver;
    }

    public setPassword(password: String): void {
        this.password = password;
    }

    public getPassword(): String|null {
        return this.password;
    }
}