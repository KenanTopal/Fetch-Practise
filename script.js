// fetch products data from https://fakestoreapi.com/products/
// apply a filter to list products that has price lower than $50
// apply a filter to list products that has rating over 4
// filter the products according to a category
// list the name of categories
// search item by given text
// find the index of a product that has price $15.99
// generate a html card for products
// generate a card container to display all of the products

const url = 'https://fakestoreapi.com/products/';
const main = document.getElementById('main');

async function productsData() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);

  //! apply a filter to list products that has price lower than $50
  console.log(data.filter(item => item.price < 50));

  //! apply a filter to list products that has rating over 4
  console.log(data.filter(item => item.rating.rate > 4));

  //! filter the products according to a category
  console.log(data.filter(item => item.category === 'jewelery'));

  //! list the name of categories
  console.log(
    data.reduce((acc, item) => {
      if (!acc.includes(item.category)) {
        acc.push(item.category);
      }
      return acc;
    }, [])
  );

  //! search item by given text
  console.log(data.filter(item => item.title.includes('Hard')));

  //! find the index of a product that has price $15.99
  console.log(
    data
      .map(item => {
        if (item.price === 15.99) {
          return data.indexOf(item);
        }
      })
      .filter(item => item !== undefined)
  );

  //! generate a html card for products
  let cards = ``;
  data.forEach(item => {
    cards += `<div class="card mb-3" style="width: 18rem">
    <img src="${item.image}" class="card-img-top" alt="${item.title}" />
    <div class="card-body">
      <h4 class="card-title">${item.title}</h4>
      <h6 class="card-title">$${item.price}</h6>
      <h6 class="card-title"><strong>${item.category}</strong></h6>
      <p class="card-text">${item.description}</p>
      <p class="card-text"><small>Rate: ${item.rating.rate} Stars</small></p>
      <p class="card-text"><small>Count: ${item.rating.count} User</small></p>
    </div>
  </div>`;
  });
  console.log(cards);

  //! generate a card container to display all of the products
  main.innerHTML = cards;
}

productsData();
