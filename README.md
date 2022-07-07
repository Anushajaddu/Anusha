
# BEES Project


created five live bees with health values of 100, along with their names, and an input box with a 0 to 100 range.
In order to decrease Bee health, the user can increase the value from 1 to a maximum of 100 values by clicking on the "up" and "down" arrows that are visible in the input box.


The health of the bee will decline in accordance with the user-entered value after selecting a value and pressing the enter, and a progress bar will display the bee's current health.



If the value falls to zero, the bee dies and is disabled, making it impossible for the user to act further against that bee.

The user can improve the health of bees by clicking the "Reset Bee Health" button.
## API Reference
Static data file - Utils.js
#### Get all items

```http
  GET /api/BEESArr

```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/BEESArr/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Bees to fetch |

#### getData()

get the Bees infomation


## INSTALLATION
Node install v16.15.1
NPM install 8.11.0
react 18.0.0
Typescript
## Run Project
Run npm install
Run npm start