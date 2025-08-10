export default function generatePass() {
    let password: string = '';
    let characters: string = 'Aa0$#%&*-_/123456789abcdefghijklmnopqrstuvwxyzBCDEFGHIJKLMNOP!';
    let passwordLength = 12;

    for (let index = 0; index < passwordLength; index++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }
    return password
}