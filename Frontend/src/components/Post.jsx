import React from 'react'
import "../styles/post.css"

function Post() {
  return (
    <>
      <section className="post" id="post">

<div className="container min-vh-100">

    <h1 className="heading"><span>'</span> out posts <span>'</span></h1>

    <div className="box-container">

        <div className="box">
            <img src="img/po-1(2).jpg" alt=""/>
            <div className="content">
                <span>jan 5, 2021</span>
                <a href="#"><h3>Happy Blood Donation</h3></a>
                <p>They are an essential feature of blood donation, here you can register your lefrslef for a blood donation.you can donate blood whenever you like.so blood donation is now so easy.
                </p>
                {/* <a href="#"><button className="button">learn more</button></a> */}
            </div>
        </div>

        <div className="box" >
            <img src="img/po-2 (4).jpg" alt=""/>
            <div className="content">
                <span>jan 5, 2021</span>
                <a href="#"><h3>Laboratory Tests</h3></a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex porro libero at veniam molestias facere quo necessitatibus ipsum ad?</p>
                {/* <a href="#"><button className="button">learn more</button></a> */}
            </div>
        </div>

        <div className="box" >
            <img src="img/img9.webp" alt=""/>
            <div className="content">
                <span>jan 5, 2021</span>
                <a href="#"><h3>Experienced Doctors</h3></a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex porro libero at veniam molestias facere quo necessitatibus ipsum ad?</p>
                {/* <a href="#"><button className="button">learn more</button></a> */}
            </div>
        </div>

    </div>

</div>

</section>
    </>
  )
}

export default Post
