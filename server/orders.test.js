const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Order = require('APP/db/models/orders')
const app = require('./start')


describe.only('/api/orders', () => {

  describe('when ', () => {
    before('wait for the db', () => db.didSync);
    beforeEach(function() {
      return Order.create({
          books: [
            {id: 1, price: 1.00, quantity: 1},
            {id: 2, price: 2.00, quantity: 2},
            {id: 3, price: 3.21, quantity: 3}
          ]
        })
    });

    afterEach(function(){
      return db.sync({force: true});
    });

    it('GET / returns all orders', () =>
      request(app)
        .get(`/api/orders`)
        .expect(200)
    )

    it('GET /:id returns one order', () =>
      request(app)
        .get(`/api/orders/1`)
        .expect(200)
        .then( res => {
           return expect(res.body.books.length).to.equal(3);
        })
    )

    it('POST creates an order', () =>
      request(app)
        .post('/api/orders')
        .send({
          books: [
          {id: 1, price: 1, quantity: 2},
          {id: 2, price: 5, quantity: 4}]
        })
        .expect(201)
    )

    it('PUT undates the element ', () =>
      request(app)
        .put('/api/orders/1')
        .send({books: [
          {id: 1, price: 1, quantity: 2},
          {id: 2, price: 5, quantity: 4}]
        })
        .then(updatedOrder => {
          return Order.findById(1)
          .then( order => {
            return expect(order.books[1].price).to.equal(5);
          })
        })
    )

    it('DELETE removes an order', () =>
      request(app)
        .delete('/api/orders/1')
        .expect(202)
    )
  })
})
