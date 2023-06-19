const http = require('http');
const fs = require('fs');

// Read the bank data from JSON file
const bankData = JSON.parse(fs.readFileSync('bankData.json'));

// Function to retrieve the list of banks and branch details
function getBankBranches() {
  return bankData.map(branch => ({
    bank: branch.bank,
    branch: branch.branch,
    address: branch.address,
    city: branch.city,
    country: branch.country
  }));
}

// Function to retrieve the branch details for a specific branch
function getBranchDetails(branchId) {
  const branch = bankData.find(branch => branch.id === branchId);
  if (branch) {
    return {
      bank: branch.bank,
      branch: branch.branch,
      address: branch.address,
      city: branch.city,
      country: branch.country
    };
  } else {
    return null;
  }
}

// Create an HTTP server
const server = http.createServer((req, res) => {
  const { method, url } = req;

  // Handle GET requests to retrieve bank list and branch details
  if (method === 'GET') {
    if (url === '/banks') {
      const bankBranches = getBankBranches();
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(bankBranches));
    } else if (url.startsWith('/branches/')) {
      const branchId = parseInt(url.split('/')[2]);
      const branchDetails = getBranchDetails(branchId);
      if (branchDetails) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(branchDetails));
      } else {
        res.statusCode = 404;
        res.end('Branch not found');
      }
    } else {
      res.statusCode = 404;
      res.end('Not found');
    }
  } else {
    res.statusCode = 405;
    res.end('Method not allowed');
  }
});

// Set the port for the server
const port = process.env.PORT || 3000;

// Start the server
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
