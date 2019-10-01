require('dotenv').config();
const knex = require('knex');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL
});

/* 
// drill 1
  function searchByItemName(searchTerm) {
  knexInstance
    .select('*')
    .from('shopping_list')
    .where('name', 'ILIKE', `%${searchTerm}%`)
    .then(result => {
      console.log('SEARCH TERM', { searchTerm });
      console.log(result);
    });
} 

searchByItemName('Kale'); */

/* 
// drill 2
  function paginateFood(pageNumber) {
  const limit = 6;
  const offset = limit * (pageNumber - 1);

  knexInstance
    .select('*')
    .from('shopping_list')
    .limit(limit)
    .offset(offset)
    .then(result => {
      console.log('PAGINATE FOOD', { pageNumber });
      console.log(result);
    });
}

paginateFood(6) */

/* //drill 3
function addedDaysAgo(daysAgo) {
  knexInstance
    .select('id', 'name', 'price', 'date_added', 'checked', 'category')
    .from('shopping_list')
    .where(
      'date_added',
      '<',
      knexInstance.raw(`now() - \'?? days\':: INTERVAL`, daysAgo)
    )
    .then(result => {
      console.log('PRODUCTS ADDED DAYS AGO');
      console.log(result);
    });
}

addedDaysAgo(10); */

function costPerCat() {
  knexInstance
    .select('category')
    .sum('price')
    .from('shopping_list')
    .groupBy('category')
    .then(result => {
      console.log('PRICE PER CATEGORY');
      console.log(result);
    });
}

costPerCat();