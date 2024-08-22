const samllLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const capitalLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ';', ':', '"', "'", '<', '>', ',', '.', '/', '?'];
const passLength = 32;

const generatePassword = () => {
  let password = '';
  for (let i = 0; i < passLength; i++) {
    const randomIndex = Math.floor(Math.random() * 4);
    switch (randomIndex) {
      case 0:
        password += samllLetters[Math.floor(Math.random() * 26)];
        break;
      case 1:
        password += capitalLetters[Math.floor(Math.random() * 26)];
        break;
      case 2:
        password += numbers[Math.floor(Math.random() * 10)];
        break;
      case 3:
        password += specialCharacters[Math.floor(Math.random() * 26)];
        break;
    }
  }
  return password;
}

console.log(generatePassword());