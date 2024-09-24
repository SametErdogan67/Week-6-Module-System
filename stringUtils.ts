// stringUtils.ts

// Function to reverse a given string
export function reverseString(input: string): string {
    return input.split('').reverse().join('');
}

// Function to count the number of characters in a string
/*export function countCharacters(input: string): number {
    return input.length;
}*/

// Function to count the number of characters in a string, ignoring spaces
export function countCharacters(input: string): number {
    return input.replace(/\s+/g, '').length;
}

// A creative function: Capitalize the first letter of each word
export function capitalizeWords(input: string): string {
    return input.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

