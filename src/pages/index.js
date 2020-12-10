
import React from "react";
import { graphql, useStaticQuery } from "gatsby"

export default function Home() {
  const data = useStaticQuery(graphql`
    query MyQuery {
        allStripePrice {
          edges {
            node {
              product {
                images
                id
                name
                description
              }
              id
              unit_amount
            }
          }
        }
      }
      
    `)
  console.log(data);

  return <div>
    <h1>My Products</h1>
    {
      data.allStripePrice.edges.map(({ node }) => {
        return <div key={node.id}>
          <p><b>{node.product.name}</b></p>
          <p><i>{node.product.description}</i></p>
          <img src={node.product.images[0]} alt={node.product.images[0]} height="200" />
          <br />
          <button className="snipcart-add-item"
            data-item-id={node.id}
            data-item-price={node.unit_amount}
            data-item-url="https://checkout-work.netlify.app/"
            data-item-description={node.product.description}
            data-item-image={node.product.images[0]}
            data-item-name={node.product.name}>
            Add to cart
</button>
          < hr />
        </div>
      })
    }
  </div>
}
