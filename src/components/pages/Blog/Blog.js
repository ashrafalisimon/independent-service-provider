import React from "react";

const Blog = () => {
  return (
    <div className="container">
      <div className="my-5">
        <h2 className="fs-2 text-black fw-bold my-3">
          1. Difference between authorization and authentication
        </h2>
        <p className="fs-5 text-black-50">
          <span className="fw-bold">Ans:</span> Authentication, in the form of a
          key. The lock on the door only grants access to someone with the
          correct key in much the same way that a system only grants access to
          users who have the correct credentials. Authorization, in the form of
          permissions. Once inside, the person has the authorization to access
          the kitchen and open the cupboard that holds the pet food. The person
          may not have permission to go into the bedroom for a quick nap.
        </p>
      </div>
      <div className="my-5">
        <h2 className="fs-2 text-black fw-bold my-3">
          2. Why are you using firebase? What other options do you have to implement authentication?
        </h2>
        <p className="fs-5 text-black-50">
          <span className="fw-bold">Ans:</span> 
          Firebase is a web app development platform created by Google. It lets you develop the whole app on the front end without any server-side code. At the same time, it does let you set up some server-side logic via Firebase Functions if you need to react to certain events (creation of data, login) so you can send emails or push notifications or process the data after it is written.My other options implement authentication retina scans
        </p>
      </div>
      <div className="my-5">
        <h2 className="fs-2 text-black fw-bold my-3">
          3. What other services does firebase provide other than authentication?
        </h2>
        <p className="fs-5 text-black-50">
          <span className="fw-bold">Ans:</span> 
          There are many other services which Firebase provides, Most useful of them are:
            <ul>
                <li>Cloud Firestore.</li>
                <li>Cloud Functions.</li>
                <li>Hosting.</li>
                <li>Cloud Storage.</li>
                <li>Google Analytics..</li>
                <li>Predictions.</li>
                <li>Cloud Messaging</li>
            </ul>
        </p>
      </div>
    </div>
  );
};

export default Blog;
