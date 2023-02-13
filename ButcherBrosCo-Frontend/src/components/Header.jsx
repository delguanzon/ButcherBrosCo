import React from 'react';
import headerImage from '../assets/images/header-meats.jpg';

export default function Header() {
  return (
    <section className="header container">
      <img src={headerImage} className ="header--image" alt="logo" />
      <div>
        <h1 className="hero--header">Only the best selection of meats</h1>
        <p className="hero--text">View our selection of the best quality meats; USDA Prime, A5 Japanese Wagyu  and a lot more!</p>
      </div>
    </section>
  )
}