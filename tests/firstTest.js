const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");

async function example() {
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

	//assertion
	assert.strictEqual(todoText, "slkndfglj");

	//close the browser
	await driver.quit();
}

example();
