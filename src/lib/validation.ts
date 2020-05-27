class Validation {
    private static testRegex(input: string, regex: string): boolean {
        return input.match(regex) !== null;
    }

    static validateName(name: string): boolean {
        const regex = '^[a-zA-Z]+$';
        return Validation.testRegex(name, regex);
    }

    static validateEmail(email: string): boolean {
        const regex = '[^@]+@[^@]+\\.[^@]+';
        return Validation.testRegex(email, regex);
    }

    static validatePassword(password: string): boolean {
        const passwordLength = 8;
        return (
            password.length >= passwordLength &&
            Validation.testRegex(password, '[0-9]') &&
            Validation.testRegex(password, '[a-zA-Z]')
        );
    }
}

export default Validation;
