import React from 'react'
import "../styles/review.css"

function ReviewPage() {
  return (
    <>
      <section className="review" id="review">

<div className="container">

<h1 className="heading"><span>'</span> people's review <span>'</span></h1>

<div className="box-container">

    <div className="box" >
        <p>Best service and Website amongst all available. I have been using it for more than 3 months, they have kept their standards high and are delivering the order within 24 hours. Keep up the good work.</p>
        <h3>Darpan Dholakia</h3>
        <span>jan 5, 2021</span>
        <img src="/img/r-1.jpg" alt=""/>
    </div>

    <div className="box" >
        <p>This Website is a game changer for me. I am unable to go out always to buy medicinal products. Web-Care gives me the last liberty to shop essential healthcare products from home. This Website is very user friendly and me being an elderly person do not find any difficulty in using it. They deliver well in time. Thanks😊</p>
        <h3>Lipi Chaudhuri</h3>
        <span>jan 7, 2021</span>
        <img src="/img/r-2.jpg" alt=""/>
    </div>

    <div className="box" >
        <p>Excellent experience. Web-Care has not let it's customers down during lockdown. Thanks team. Great job. The Website is also very smooth. And does its job well with an attractive UI and easy to use features. Good job developer.</p>
        <h3>Debanjan Roy</h3>
        <span>jan 10, 2021</span>
        <img src="/img/r-3.jpg" alt=""/>
    </div>

</div>

</div>

</section>
    </>
  )
}

export default ReviewPage
