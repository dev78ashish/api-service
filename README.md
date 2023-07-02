# Bank Branch API

This is a simple Node.js API that provides endpoints to retrieve a list of banks and branch details. It uses the HTTP module and file system module (`fs`) to read bank data from a JSON file and serves the data over HTTP.

## Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/bank-branch-api.git

2. Navigate to the project directory:
```cd bank-branch-api```

3. Install the dependencies:
```npm install```

## Usage

1. Start the server:
```node index.js```

The server will start running on port 3000 by default.

2. Retrieve the list of banks and branch details:
You can use any HTTP client or browser to make GET requests to the following endpoints:

Get the list of banks:
```GET http://localhost:3000/banks```

Get branch details for a specific branch:
```GET http://localhost:3000/branches/:branchId```

Replace :branchId with the ID of the desired branch.
The server will respond with the requested data in JSON format.

## Example
Here's an example of how to retrieve the bank list using JavaScript's fetch:

   ```shell
// Retrieve bank lists
fetch('http://localhost:3000/banks')
  .then(response => response.json())
  .then(bankList => {
    console.log(bankList);
  })
  .catch(error => {
    console.error(error);
  });
```
  
## Bank Data
The bank data is stored in the bankData.json file. You can modify this file to add, remove, or update bank and branch information. The file follows the JSON format and contains an array of bank objects, where each object represents a branch with properties such as ID, bank name, branch name, address, city, and country.


