// const { Builder, By, Key } = require("selenium-webdriver");
// const assert = require("assert");

import { Builder, By, Key, until } from "selenium-webdriver";
import assert from "assert";
import { expect } from "chai";

//describe block
describe("add todo tests", function () {
	//it block
	it("successfully adds todo", async function () {
		//launch the browser after building a new Chrome instance
		let driver = await new Builder().forBrowser("chrome").build();

		//navigate to application
		await driver.get("https://lambdatest.github.io/sample-todo-app/");

		//add a todo
		let currToDo = "Build Selenium Framework";
		await driver
			.findElement(By.id("sampletodotext"))
			.sendKeys(currToDo, Key.RETURN);

		//assert
		let todoText = await driver
			.findElement(By.xpath("//li[last()]"))
			.getText()
			.then(function (val) {
				return val;
			});

		//assertion using node
		// assert.strictEqual(todoText, currToDo);

		//chai assertion
		expect(todoText).to.equal(currToDo);

		//close the browser
		await driver.quit();
	});
});

describe("check login functionality", function () {
	it("checks title of login page", async function () {
		let driver = await new Builder().forBrowser("chrome").build();
		await driver.get("https://magento.softwaretestingboard.com/");

		await driver.findElement(By.linkText("Sign In")).click();

		let titleOfPage = await driver.getTitle().then(function (val) {
			return val;
		});

		// console.log("The title is", titleOfPage);
		expect(titleOfPage).to.equal("Customer Login");

		await driver.quit();
	});
});

describe("checking customer login functionality", function () {
	it("checks title of login page again", async function () {
		let driver = await new Builder().forBrowser("chrome").build();
		await driver.get("https://magento.softwaretestingboard.com/");

		await driver.findElement(By.linkText("Sign In")).click();

		let titleOfPage = await driver.getTitle().then(function (val) {
			return val;
		});

		console.log("The title is", titleOfPage);
		expect(titleOfPage).to.equal("Customer Login");

		driver.findElement(By.linkText("Create an Account")).click();
		await driver.sleep(3000);

		let titleOfCreateNewCustomerAccountPage = driver.findElement(
			By.xpath("//span[contains(text(),'Create New Customer Account')]")
		);

		let titleOfNewAccountPage = await driver
			.getTitle()
			.then(function (val) {
				return val;
			});
		console.log("The title is", titleOfNewAccountPage);
		expect(titleOfNewAccountPage).to.equal("Create New Customer Account");

		await driver.quit();
	});
});
