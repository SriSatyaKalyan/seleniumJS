// const { Builder, By, Key } = require("selenium-webdriver");
// const assert = require("assert");

import { Builder, By, Key } from "selenium-webdriver";
import assert from "assert";
import { expect } from "chai";

//describe block
// describe("add another todo tests", function () {
// 	//it block
// 	it("successfully adds another todo", async function () {
// 		//launch the browser after building a new Chrome instance
// 		let driver = await new Builder().forBrowser("chrome").build();

// 		//navigate to application
// 		await driver.get("https://lambdatest.github.io/sample-todo-app/");

// 		//add a todo
// 		let currToDo = "Upload To Github";
// 		await driver
// 			.findElement(By.id("sampletodotext"))
// 			.sendKeys(currToDo, Key.RETURN);

// 		//assert
// 		let todoText = await driver
// 			.findElement(By.xpath("//li[last()]"))
// 			.getText()
// 			.then(function (val) {
// 				return val;
// 			});

// 		//assertion using node
// 		// assert.strictEqual(todoText, currToDo);

// 		//chai assertion
// 		expect(todoText).to.equal(currToDo);

// 		//close the browser
// 		await driver.quit();
// 	});
// });
