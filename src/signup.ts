import crypto from "crypto";
import express from "express";

import { validateCpf } from "./validateCpf";
import AccountModel from "./models/AccountModel";
import { AccountRepository } from "./repositories/AccountRepository";

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
	const input = req.body;
	const accountRepository = new AccountRepository();
	if (!input.email.match(/^(.+)@(.+)$/)) throw new Error("Email doesn't match the expected pattern.");
	if (!input.name.match(/[a-zA-Z] [a-zA-Z]+/)) throw new Error("Name doesn't match the expected pattern.");
	if (!validateCpf(input.cpf)) throw new Error("CPF is invalid!");
	if (input.is_driver && !input.car_plate.match(/[A-Z]{3}[0-9]{4}/)) throw new Error("Car plate doesn't match the expected pattern.");
	const account: AccountModel = await accountRepository.getByEmail(input.email); 
	if (account) throw new Error("Account already exists");
	const newAccount = new AccountModel(crypto.randomUUID(), input.name, input.email, input.cpf, input.car_plate, input.password, input.is_passenger, input.is_driver);
	const id: String = await accountRepository.save(newAccount);
	res.json({
		accountId: id
	});
});

app.listen(3000);
