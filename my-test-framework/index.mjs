const chalk = require('chalk');

class Matchers {
	constructor(actual) {
		this.actual = actual;
	}

	toBe(expected) {
		if (expected === this.actual) {
			console.log(chalk.greenBright(`    Succeeded`));
		} else {
			throw new Error(`Fail - Actual: ${this.actual}, Expected: ${expected}`);
		}
	}

	toBeTruthy() {
		if (actual) {
			console.log(chalk.greenBright(`    Succeeded`));
		} else {
			throw new Error(
				`Fail - Expected value to be truthy but got ${this.actual}`
			);
		}
	}
}

function expect(actual) {
	return new Matchers(actual);
}

function describe(suiteName, fn) {
	try {
		console.log('\n');
		console.log(`suite: ${chalk.green(suiteName)}`);
		fn();
	} catch (err) {
		console.log(chalk.redBright(`[${err.message.toUpperCase()}]`));
	}
}

function it(testName, fn) {
	console.log(`  test: ${chalk.yellow(testName)}`);
	try {
		fn();
	} catch (err) {
		console.log(`    ${chalk.redBright(err)}`);
		throw new Error('test run failed');
	}
}

describe('a suite', () => {
	it('a test that will fail', () => {
		expect(true).toBe(false);
	});

	it('a test that will never run', () => {
		expect(1).toBe(1);
	});
});

describe('another suite', () => {
	it('should succeed, true === true', () => {
		expect(true).toBe(true);
	});

	it('should succeed, 1 === 1', () => {
		expect(1).toBe(1);
	});
});
