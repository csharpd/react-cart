module.exports = {
  // Load Mock Product Data Into localStorage
  init: function () {
    localStorage.clear();
    localStorage.setItem('product', JSON.stringify([
      {
        id: '0011001',
        name: 'Dramatically Different Moisturizing Lotion+',
        image: 'clinique.png',
        description: 'Our new formula now helps strengthen skins own moisture barrier. More moisture stays in.  Skin feels soft, springy. Has a healthy-looking glow. ',
        variants: [
          {
            sku: '123123',
            type: '50ml (Tube)',
            price: 18.00,
            inventory: 2

          },
          {
            sku: '123124',
            type: '125ml (With cap)',
            price: 29.00,
            inventory: 2
          },
          {
            sku: '1231235',
            type: '125ml (With pump)',
            price: 30.00,
            inventory: 3
          }
        ]
      }
    ]));
  }

};