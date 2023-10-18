# CryptoMarket App

![CryptoMarket App](crypto-market-app.png)

CryptoMarket App is a cryptocurrency data display application developed using Angular. It allows users to explore and analyze the latest cryptocurrency market data. This app fetches real-time cryptocurrency information from Coinmarketcap APIs and provides an interactive interface for users to view and manipulate the data.

## Features

CryptoMarket App includes the following key features:

1. **Cryptocurrency Data Display:**
   - Display essential information for each cryptocurrency, including name, symbol, price, 24-hour percentage change, and market cap.

2. **Sorting:**
   - Sort cryptocurrency entries by various criteria, such as market cap, name, price, and circulating supply.

3. **Filtering:**
   - Easily filter cryptocurrency entries by name and symbol.

4. **Pagination:**
   - Implement pagination to view data in chunks with a specified number of items per page.

## Technologies Used

This project was built using the following technologies and tools:

- **Angular:** The front-end of the application is developed using Angular, providing a dynamic and responsive user interface.

- **TypeScript:** The project uses TypeScript for client-side functionality and API interactions.

- **Coinmarketcap API:** Real-time cryptocurrency data is fetched from Coinmarketcap using their API.

- **HttpClient:** HttpClient is used for making HTTP requests to the Coinmarketcap API.

## Usage

To run the CryptoMarket App locally, follow these steps:

1. Clone this repository to your local machine.
   
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory.

   ```bash
   cd crypto-market-app
   ```

3. Install the required dependencies.

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root directory and add your Coinmarketcap API key.

   ```env
   APP_API_KEY=YOUR_API_KEY
   ```

5. Start the development server.

   ```bash
   ng serve
   ```

6. Open your browser and visit [http://localhost:4200](http://localhost:4200) to use the CryptoMarket App.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

Special thanks to Coinmarketcap for providing access to their cryptocurrency data.

---

Feel free to explore and extend this project. If you have any questions or feedback, please don't hesitate to reach out. Happy crypto-trading!