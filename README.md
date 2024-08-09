# Cool-Connect

Welcome to Cool-Connect! This package, developed by Aukfa Inc., allows seamless integration with the Paycool+ wallet.

## Description

Cool-Connect enables developers to easily connect to the Paycool+ wallet, facilitating various interactions and transaction signing.

## Features

- Create and close socket connections
- Retrieve wallet information
- Check connection status
- Send signing data to the wallet

## Installation

To install the Cool-Connect package, use the following command:

```shell
npm install cool-connect
```

## Usage
Integrating with the Paycool+ wallet involves three main steps:

1. URL Initialization
Extract language and device information from the URL provided by Paycool. Here's an example of how to do this in your dApp:

URL Example: http://domain.com/?locale=en&utm_source=paycool&deviceId=C1F19DF6-F224-4B73-B82A-247CCBD8BE4D

```ts
private initializeUrlParams(): void {
  const urllang = window.location.pathname.split('/')[1];
  this.urllang = urllang || 'en';
  const queryString = window.location.href.split('?')[1];
  if (queryString) {
    const params = new URLSearchParams(queryString);
    this.device_id = params.get('deviceId') ? decodeURIComponent(params.get('deviceId')!) : '';
    this.urllang = params.get('locale') ? decodeURIComponent(params.get('locale')!) : this.urllang;
  }
}
```

2. Event Handling
Set up an event listener to handle wallet information from Paycool. Define the event name and handle the received data accordingly:

```ts
private readonly PAYCOOL_EVENT_NAME = 'Paycool-Data';

// Event listener implementation
window.addEventListener(this.PAYCOOL_EVENT_NAME, (event: CustomEvent) => {
  // Handle wallet information
  const walletInfo = event.detail;
  console.log('Received wallet information:', walletInfo);
});
```

3. Using the Cool-Connect Package

Connection Management
Establish a connection with the Paycool system using the createConnection function:

```ts
import { createConnection, closeConnection } from 'cool-connect';

const connection = createConnection(deviceId);

// Listen for responses
connection.subscribe((response) => {
  switch (response.source) {
    case 'paycool-result':
      const txId = response.data;
      console.log('Transaction ID:', txId);
      break;
    case 'paycool-connect':
      const walletInfo = response.data;
      console.log('Wallet information:', walletInfo);
      break;
  }
});

// Close the connection when needed
closeConnection();
```

Wallet Interaction
Retrieve wallet information using the getWalletAddress function if required:

```ts
const walletAddress = connection.getWalletAddress();
console.log('Wallet Address:', walletAddress);
```

Transaction Signing
Sign transactions using the send function, providing the necessary data structure:

```ts
const transaction = {
  source: 'appName-appFunction',
  chain: 'ETH',
  data: [
    {
      // Transaction data
    },
  ],
};

connection.send(transaction);
```

## Contributing
We welcome contributions! Please follow these guidelines when contributing to the project:

Report issues via the GitHub issue tracker.
Submit pull requests with clear descriptions of changes.

## Contact
For any inquiries, please contact us at marketing@pay.cool.

This updated `README.md` provides a comprehensive guide to integrating the `cool-connect` package with a focus on Paycool+ wallet interactions. Let me know if you need any more changes or additional details!
