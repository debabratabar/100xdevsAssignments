/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let categories = new Set() // creating set to get the unique categories 
  let total = 0;
  let result = []

  transactions.forEach((ele) => {
    categories.add(ele['category']) // loading all the category name in a set 
  })


  for (const item of categories) {
    total = 0
    for (let j = 0; j < transactions.length; j++) {
      if (transactions[j]['category'] == item) {
        total += transactions[j]['price'] // calculating the total price 
      }
    }
    result.push(
      { category: item, totalSpent: total } // adding results in "result" arr 
    )
  }
  return result;
}


module.exports = calculateTotalSpentByCategory;
