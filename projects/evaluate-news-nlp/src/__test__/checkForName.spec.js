import { checkForName } from '../client/js/nameChecker.js'

describe("Checking name functionality", () => {

    test("Running a test to make sure that it passes", () => {
        const input = 'Picard';

        const output = "Welcome, Captain!"

        expect(checkForName(input)).toEqual(output);

    })
});

describe("Checking name functionality again", () => {

    test("Running a second test in this suite to make sure that this works", () => {
        const input = 'Rayshawn';

        const output = "I Love Udacity!"

        expect(checkForName(input)).toEqual(output);

    })
});

