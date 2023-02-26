import React from 'react';
import UseTitle from '../../UseTitle/UseTitle';

const Bolage = () => {
  UseTitle('blog')
    return (
      <section className="bg-gray-800 text-gray-100 rounded-lg">
        <div className="container flex flex-col justify-center px-4 my-8 py-8 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-gray-700">
            <div className="py-6 space-y-2 gap-8 md:space-y-0">
              <h3 className="font-semiboldmy-3 text-2xl text-center">
                Difference between sql and nosql..
              </h3>
              <p className="md:pl-0 md:col-span-7">
                When it comes to choosing a database the biggest decisions is
                picking a relational (SQL) or non-relational (NoSQL) data
                structure. While both the databases are viable options still
                there are certain key differences between the two that users
                must keep in mind when making a decision.
              </p>
            </div>
            <div className="py-6 space-y-2 gap-8 md:space-y-0">
              <h3 className="font-semibold my-3 text-2xl text-center">
                What is JWT, and how does it work?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                JWT are digitally signed using either a secret (HMAC) or a
                public/private key pair (RSA or ECDSA) which safeguards them
                from being modified by the client or an attacker. Stored only on
                the client: You generate JWTs on the server and send them to the
                client. The client then submits the JWT with every request.
              </p>
            </div>
            <div className="py-6 space-y-2  gap-8 md:space-y-0">
              <h3 className="font-semibold my-3 text-2xl text-center">
                * What is the difference between javascript and Node JS?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                JavaScript is a simple programming language that can be used
                with any browser that has the JavaScript Engine installed. Node.
                js, on the other hand, is an interpreter or execution
                environment for the JavaScript programming
              </p>
            </div>
            <div className="py-6 space-y-2  gap-8 ">
              <h3 className="font-semibold my-3 text-2xl text-center">
                * How does Node JS handle multiple requests at the same time?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                We know NodeJS application is single-threaded. Say, if
                processing involves request A that takes 10 seconds, it does not
                mean that a request which comes after this request needs to wait
                10 seconds to start processing because NodeJS event loops are
                only single-threaded. The entire NodeJS architecture is not
                single-threaded.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Bolage;