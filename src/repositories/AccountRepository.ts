import db from "../db/connection";
import AccountModel from "../models/AccountModel";

export class AccountRepository {
	private connection: any;
	
	constructor() {
		this.connection = db;
	}
	
	public async getByEmail(email: String): Promise<AccountModel> {
		const [account] = await this.connection.query(
			"select * from ccca.account where email = $1",
			[email]
		);
		return new AccountModel(account.account_id, account.name, account.email, account.cpf, account.car_plate, account.is_passenger, account.is_driver, null);
	}
	
	public async save(account: AccountModel): Promise<string> {
	  const id = crypto.randomUUID();
		await this.connection.query(
			"insert into ccca.account (account_id, name, email, cpf, car_plate, is_passenger, is_driver, password) values ($1, $2, $3, $4, $5, $6, $7, $8)",
			[
				id, 
				account.getName(),
				account.getEmail(),
				account.getCpf(),
				account.getCarPlate(),
				account.getIsPassenger(),
				account.getIsDriver(),
				account.getPassword()
			]
		);
    return id;
	}
}