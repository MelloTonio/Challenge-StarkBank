# Challenge StarkBank

## Instructions to Run a local test

### 1. Setup environment
- First you need to generate a private key and create a project in StarkBank sandbox
- Then you need to create a ".env" file with two variables (the values are just an example):
    ```
    PRIVATE_KEY=fake_private_key
    PORT=4567 
    ```
### Local
- `make setup-dev` will install the application dependencies and run in the specified port (you can do this manually too, the scripts are in makefile)
- Setup ngrok pointing to the application port, example: `ngrok http 4567`
- Setup webhook in StarkBank sandbox by using ngrok generated url
- Now you just have to wait the invoice cronjob to run

## How does it work?
- The core of the application is to schedule a invoice cronjob to generate invoices every 3 hours to random people and after receiving the invoice credit by webhook a transfer is triggered from our account to other StarBank account


