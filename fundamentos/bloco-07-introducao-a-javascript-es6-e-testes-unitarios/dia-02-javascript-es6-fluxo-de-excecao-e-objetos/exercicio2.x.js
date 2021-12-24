const order = {
  name: 'Rafael Andrade',
  // name: 'Luiz Silva',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 20,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const {deliveryPerson} = order.order.delivery
  const {name} = order
  const {phoneNumber} = order
  const {address} = order

  return `Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, ${address.street}, Nº: ${address.number}, AP: ${address.apartment}`
}

// console.log(customerInfo(order)); // "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701"

const orderModifier = (order) => {
  const name = order.name = 'Luiz Silva'
  const consumption = Object.keys(order.order.pizza)
  consumption.push(order.order.drinks.coke.type)
  const totalPrice = order.payment.total = 50

  return `Olá ${name}, o total do seu pedido de ${consumption.join(', ').replace(/(\b, \b)(?!.*\1)/g, ' e ')} é R$ ${totalPrice}`
}

console.log(orderModifier(order)); // Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.