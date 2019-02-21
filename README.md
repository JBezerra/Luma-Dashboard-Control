# Luma Dashboard![luma-logo](https://i.imgur.com/DCA8QK1.png)
![luma-dashboard](https://i.imgur.com/uqbUimc.png)
<center>The Dashboard Control of your Luma Bot. </center>

## Install Dependencies

``` bash
# install react
npm install -g create-react-app
# install dependencies
npm install
```
## Run Application

``` bash
npm start
```

## What is?
A simple Dashboard in React inspired in [Paper Dashboard React](https://demos.creative-tim.com/paper-dashboard-react/#/dashboard) that shows the information of the database that is fed by Luma Bot.

## How it works?
I open an Observable with ```<FirebaseDatabaseProvider>``` that waits for changes in the database. 

For every time that it's checks, It adds the informations embedded in "Pessoas" (```Pessoas.jsx```) component in an array named ```pessoas```.

After that, It can render all components of the array in a ```<CardBody>```.

## Services
- Database: Firebase Real Time Database 🔥
- Server: Heroku 🚀
- Bot: Dialogflow 🤖

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)


