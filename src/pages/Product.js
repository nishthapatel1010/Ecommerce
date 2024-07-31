import React from 'react';
import './css/Product.css'

const products = [
  {
    id: 1,
    description: 'Product 1',
    price:  799,
    name: 'iPhone 13',
    image: 'https://th.bing.com/th?id=OPAC.LSRUddYAiI0j4A474C474&w=163&h=214&c=17&dpr=1.3&pid=21.1/150'
  },
  {
    id: 2,
    description: 'Product 2',
    price: 999.99,
    name: 'Product: Dell XPS 13',
    image: 'https://th.bing.com/th/id/OIP.3usO4ra11-FvUXTec4A2tAHaE8?rs=1&pid=ImgDetMain/150'
  },
  {
    id: 3,
    description: 'Product 3',
    price: 299,
    name: 'Bose QuietComfort 35 II',
    image: 'https://th.bing.com/th/id/OIP.hTuxfoyUK1VAlpao2SMaYAHaKN?rs=1&pid=ImgDetMain/150'
  },
  {
    id: 4,
    description: 'Product 3',
    price: 399,
    name: 'Apple Watch Series 7',
    image: 'https://th.bing.com/th/id/OIP.HGC_7MEXFhABE7URPqcc-gHaHa?w=1306&h=1306&rs=1&pid=ImgDetMain/150'
  },
  {
    id: 5,
    description: 'Product 3',
    price: 2499.0,
    name: 'Canon EOS R6',
    image: 'https://th.bing.com/th/id/OIP.pM3y3RP_v-S-3qifu0XUYwAAAA?rs=1&pid=ImgDetMain/150'
  },
  {
    id: 6,
    description: 'Product 3',
    price: 150.0,
    name: 'Nike Air Max 270',
    image: 'https://th.bing.com/th/id/OIP.d9Jh4_Kagbldb0j103x_eAHaHa?rs=1&pid=ImgDetMain/150'
  },
  {
    id: 6,
    description: 'Product 3',
    price: 499.0,
    name: 'PlayStation 5',
    image: 'https://th.bing.com/th/id/OIP.HLYVXvjdMEMipi9kSykvhAHaHH?rs=1&pid=ImgDetMain/150'
  },
  {
    id: 6,
    description: 'Product 3',
    price: 399.99,
    name: 'Dyson Supersonic Hair Dryer',
    image: 'https://th.bing.com/th/id/OPAC.FoFD4x1XNJKIoQ474C474?w=199&h=220&rs=1&o=5&dpr=1.3&pid=21.1/150'
  },
 
];

function Products({ addToCart }) {
  return (
    <div className="products-container">
      <h1>Our Products</h1>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">${product.price.toFixed(2)}</p>
            {/* <p className="product-description">{product.description}</p> */}
            <button className="add-to-cart-btn">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
