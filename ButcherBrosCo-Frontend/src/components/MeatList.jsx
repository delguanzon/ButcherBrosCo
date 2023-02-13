import React from 'react';
import MeatCard from './MeatCard';
import {v4 as uuidv4} from 'uuid';


export default function MeatList() {

  const meatList = [
    {
      id: uuidv4,
      name: "AMERICAN WAGYU BONELESS GOLD LABEL RIBEYE",
      grading: "6 or above on Japanese grading scale (For reference, USDA Prime graded cattle fall in the 4 to 5 range)  This is the highest rating offered by Snake River Farms.",
      price: 130,
      imgUrl: "https://cdn.shopify.com/s/files/1/0025/9076/9210/products/Ribeye-Wagyu-0324_1_1024x1024@2x.jpg",
      stats: {
          rating: 5.0,
          reviewCount: 6
      },
      breed: "Wagyu Bulls crossed with Black Angus Heifers",
      source: "Snake River Farms, Eastern Idaho",
      weight: "American Wagyu Boneless Ribeye steak cuts weigh approximately 20 oz.",
      quantity: 70,
    },
    {
      id: 2,
      name: "AMERICAN WAGYU BONELESS GOLD LABEL RIBEYE",
      grading: "6 or above on Japanese grading scale (For reference, USDA Prime graded cattle fall in the 4 to 5 range)  This is the highest rating offered by Snake River Farms.",
      price: 130,
      imgUrl: "https://www.culinaryschools.org/clipart/meat/beef.gif",
      stats: {
          rating: 5.0,
          reviewCount: 6
      },
      breed: "Wagyu Bulls crossed with Black Angus Heifers",
      source: "Snake River Farms, Eastern Idaho",
      weight: "American Wagyu Boneless Ribeye steak cuts weigh approximately 20 oz.",
      quantity: 80,        
    }
  ]

  const meatCards = meatList.map(meat => {
    return (
            <MeatCard
                key={meat.id}
                {...meat}                
            />
        )
    })  


  return (
    <section className="meat-list">
      {meatCards}
    </section>
  )
}