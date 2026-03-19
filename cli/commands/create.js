// CLI command for application creation with template selection

const prompt = require('prompt-sync')();

function createApp() {
    console.log('Welcome to the App Creation CLI');
    console.log('Please select a template:');
    console.log('1: Next.js App');
    console.log('2: Node API');
    console.log('3: Fullstack App');

    const choice = prompt('Enter your choice (1/2/3): ');

    switch (choice) {
        case '1':
            console.log('You have selected Next.js App template.');
            // Logic to create a Next.js App
            break;
        case '2':
            console.log('You have selected Node API template.');
            // Logic to create a Node API
            break;
        case '3':
            console.log('You have selected Fullstack App template.');
            // Logic to create a Fullstack App
            break;
        default:
            console.log('Invalid choice. Please select a valid option.');
    }
}

createApp();