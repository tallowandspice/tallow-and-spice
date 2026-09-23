let cart = [];

document.getElementById('year').textContent = new Date().getFullYear();

function add(name, price) {
  let item = cart.find(i => i.name === name);

  if (item) {
    item.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  render();
  openCart();
}

function render() {
  document.getElementById('count').textContent =
    cart.reduce((s, x) => s + x.qty, 0);

  document.getElementById('items').innerHTML = cart.length
    ? cart.map(x =>
        `<div class="row">
          <span>${x.name} × ${x.qty}</span>
          <b>$${(x.price * x.qty).toFixed(2)}</b>
        </div>`
      ).join('')
    : '<p>Your cart is empty.</p>';

  document.getElementById('total').textContent =
    '$' + cart.reduce((s, x) => s + x.price * x.qty, 0).toFixed(2);
}

function openCart() {
  document.getElementById('cart').classList.add('open');
  document.getElementById('shade').classList.add('open');
}

function closeCart() {
  document.getElementById('cart').classList.remove('open');
  document.getElementById('shade').classList.remove('open');
}

function checkout() {
  if (!cart.length) {
    alert('Your cart is empty.');
    return;
  }

  alert('Square checkout will be connected here next.');
}
