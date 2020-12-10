const restaurantData = require('../data/restaurant-data.json')

function getAllRestaurants() {
  return restaurantData.data
}

module.exports = {
  getAllRestaurants
}
