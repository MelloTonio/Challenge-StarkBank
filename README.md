# Challenge StarkBank

## Instructions to Run a local test

### 1. Setup environment
- First you need to generate a private key and create a project in StarkBank sandbox
- Then you need to create a ".env" file with two variables:
    ```
    PRIVATE_KEY=fake_private_key
    PORT=4567 
    ```
### Local
- `make setup-dev` will install the application dependencies and run in the specified port
- Setup ngrok pointing to the application port, example: `ngrok http 4567`
- Wait for the invoice cronjob to run


