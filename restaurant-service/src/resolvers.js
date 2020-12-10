const restaurantData = require('../data/restaurant-data.json')

const resolvers = {
  Query: {
    restaurants: () => restaurantData.data
  }
}

module.exports = resolvers
