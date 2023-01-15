import React, { useState } from "react";
import firebase from "firebase";
import "./Drawer.css";
import { db } from "./firebase";

function Drawer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [header, setHeader] = useState("");

  const sendInfo = (e) => {
    e.preventDefault();

    db.collection("info").add({
      name: name,
      email: email,
      comment: comment,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setName("");
    setEmail("");
    setComment("");
    setDrawer(!drawer);
  };

  // var onClick = function() {                    //when this is activated the site works and givesm you an output until you refresh
  //   console.log(this.id)
  //   setHeader = this.id;
  // }
  // document.getElementById('1').onclick = onClick;
  // document.getElementById('2').onclick = onClick;
  // document.getElementById('3').onclick = onClick;

  const [drawer, setDrawer] = useState(false);

  const showDrawer = () => setDrawer(!drawer);

  return (
    <>
      <>
        <div className="main">
          <div className={drawer ? "drawer__active" : "drawer"}>
            <h1 classname="cross" onClick={showDrawer}>x</h1>
            <h1>Title</h1> {/*the header is not showing */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ex
              perspiciatis,
            </p>
            <div className="input__main">
              <h1>Let us know!</h1>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Username"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
              />
              <input
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                type="text"
                placeholder="Comment"
              />
              <button onClick={sendInfo}>Submit</button>
            </div>
          </div>
        </div>
      </>
      <div
        id="1"
        className={drawer ? "hello " : "hello_active"}
        onClick={showDrawer}
      >
        <h1 id="title">Nature</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          libero sunt nam ab fugit possimus maxime hic officia nesciunt
          exercitationem! Aperiam corrupti cumque corporis doloribus quod.
          Necessitatibus cupiditate voluptatem fuga, laborum nostrum quo
          molestias vitae laudantium ipsam adipisci dolorum nobis aperiam natus
          consequuntur nulla sint.
        </p>
      </div>
      <div
        id="2"
        className={drawer ? "hello1 " : "hello_active1"}
        onClick={showDrawer}
      >
        <h1 id="title">Fun</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          libero sunt nam ab fugit possimus maxime hic officia nesciunt
          exercitationem! Aperiam corrupti cumque corporis doloribus quod.
          Necessitatibus cupiditate voluptatem fuga, laborum nostrum quo
          molestias vitae laudantium ipsam adipisci dolorum nobis aperiam natus
          consequuntur nulla sint.
        </p>
      </div>
      <div
        id="3"
        className={drawer ? "hello2 " : "hello_active2"}
        onClick={showDrawer}
      >
        <h1 id="title">Mountains</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
          libero sunt nam ab fugit possimus maxime hic officia nesciunt
          exercitationem! Aperiam corrupti cumque corporis doloribus quod.
          Necessitatibus cupiditate voluptatem fuga, laborum nostrum quo
          molestias vitae laudantium ipsam adipisci dolorum nobis aperiam natus
          consequuntur nulla sint.
        </p>
      </div>
    </>
  );
}

export default Drawer;
