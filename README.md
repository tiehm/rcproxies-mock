# RCProxies API Mock

Original API can be found [here](https://app.swaggerhub.com/apis-docs/rcproxies/RCProxies-Reseller-API/1.0.1-oas4). While I am trying to copy their API as much as possible, I left out methods I do not need at this moment.

This is a mock API for the rcproxies API. I made this as I, obviously, needed a mock for it which responds with real data. This is a very simple API which uses a JSON file in ``data/data.json`` to get the saved users etc. 

I might add database support in the future, although I do not see a reason for it as JSON only becomes problematic with concurrent read and writes which shouldn't happen on not much requested mocks. 

The API is designed to be the exact same at a different host, so you can just switch out the host from ``https://api2.rcproxies.com`` to ``http://localhost:8888`` for example.

### Project Setup

You'll need to have node js and npm installed. Simply run ``npm i`` or ``yarn install``

### Environment Setup

An example can be seen at ``.sample``

````dotenv
PORT #The Port the API is listening on
EMAIL #The Email needed to authenticate with the API
PASSWORD #The Password needed to authenticate with the API
TOKEN #The Token which you'll get after successfull Authentication
````

### Directory Setup

Create a ``data`` directory with a ``data.json`` file with an empty array inside.

````bash
mkdir data
touch data/data.json
echo "[]" > data/data.json
````

### License

Please look at ``LICENSE``.
