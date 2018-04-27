# Project Title

events-sever

## Getting Started

Showcase nodejs events-server

Client app part is [HERE](https://github.com/mateuszklinowski/events-client-app)

### Installing

1.Navigate to folder & install events-server:

```
git clone https://github.com/mateuszklinowski/events-server.git
```

2.Install dependencies:

```
npm install
```
3.Configurate mongoDB connection and socket.io port for 
[CLIENT](https://github.com/mateuszklinowski/events-client-app) app

```
./server.config.json
```
2.Start server:

```
npm start
```
> Note: Node.js and mongodb are required

mongodb local installation guide can be found [HERE](https://docs.mongodb.com/manual/administration/install-community/)
after installation start mongodb and create db (default: "eventsDB");

## Running the tests

npm test

## Demo

* [Here](http://events.mateuszklinowski.com) -> coming soon


## Built With

* [mongodb](https://www.mongodb.com) - Database 
* [Redux](https://redux.js.org/) - Server store
* [Socket.io](https://socket.io/) - Server communication


## Authors

* **Mateusz Klinowski** - *Initial work* - [Github](https://github.com/mateuszklinowski)



## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

