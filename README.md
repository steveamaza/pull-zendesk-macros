# Zendesk API Macro Fetcher

This project is a Node.js script that allows you to call the Zendesk API, fetch all active macros, and list them in a CSV file. It provides a convenient way to export and analyze macros in a structured format.

## Why this project exists

The purpose of this project is to automate the retrieval of active macros from a Zendesk account and store them in a CSV file. It can be useful for various purposes, such as:

- Auditing and reviewing macros
- Analyzing macro usage and performance
- Sharing macro data with stakeholders

## How to use the project

To use this project for your own Zendesk account, follow these steps:

1. **Clone the repository**: Start by cloning this repository to your local machine.
```
git clone https://github.com/your-username/your-repository.git
```

2. **Install dependencies**: Navigate to the project directory and install the required dependencies using npm or yarn.
```
cd your-repository
npm install
```

3. **Set up your Zendesk subdomain**: Replace the `api_url` variable in the code with the URL for your Zendesk subdomain.
```
var api_url = 'https://your-subdomain.zendesk.com/api/v2/macros/active.json?active=true';
```

4. **Set up your Zendesk API token**: Create a `.env` file in the project directory and add your Zendesk API token.
```
ZENDESK_TOKEN=your-api-token
```

5. **Run the script**: Execute the script by running the following command in the project directory.
```
node script.js
```
The script will fetch the active macros from your Zendesk account, create a CSV file named `output.csv`, and store the macro data in it.

6. **Analyze the CSV file**: Once the script completes execution, you can open the `output.csv` file to analyze the fetched macro data using spreadsheet software or any CSV reader.

## License

This project is licensed under the MIT License. You can find the full license text in the [LICENSE](./LICENSE) file.

Feel free to customize and modify the code according to your needs. Contributions are also welcome! If you encounter any issues or have suggestions, please open an issue or submit a pull request.

Happy macro fetching!
