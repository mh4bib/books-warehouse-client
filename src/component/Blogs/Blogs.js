import React from 'react';
import { Table } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container text-start'>
            {/* pn no 1  */}
            <div className='mt-4 mb-4 my-form p-3 rounded'>
                <h2>Difference between javascript and nodejs</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Javascript</th>
                            <th>NodaJS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1. JavaScript is a programming language. It runs in any web browser with a proper engine.</td>
                            <td>1. NodeJS is a Javascript runtime environment that helps js to run outside the browser.</td>
                        </tr>
                        <tr>
                            <td>2. Javascript is used in the client side</td>
                            <td>2. NodeJS is commonly used in the server side</td>
                        </tr>
                        <tr>
                            <td>3. It is a high level programming language which is the upgraded version of ECMASCRIPT.
                            </td>
                            <td>3. NodeJs is basically written in C++</td>
                        </tr>
                        <tr>
                            <td>4. Main features are a wide range of interfaces and interactivity etc.</td>
                            <td>4. Node.js has a node package manager and the ability to handle concurrent requests.</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            {/* pn no 2  */}
            <div className='text-start mb-4 my-form p-3 rounded'>
                <h2>When should you use nodejs and when should you use mongodb</h2>
                <p className='text-dark'>NodeJS is a javascript runtime environment which allows us to run javascript outside the browser. It is primarily used for non-blocking, event-driven servers, <br />
                    basically for its single-threaded nature. On the other hand, MongoDB is a document-oriented NoSQL database. It is a very easy DBMS system that is scalable. <br />
                    MongoDB offers various methods to perform various  operations.<br />
                    We can use NodeJS to read, write, update etc on  the database or MongoDB.Also if we want to write some server side code in Javascript, then we can use nodejs for it.<br />
                    When we have to keep our local data to a secure remote database, we use mongoDB for it. It is very flexible noSql DB.</p>
            </div>

            {/* pn no 3  */}
            <div className='mb-4 my-form p-3 rounded'>
                <h2>Differences between sql and nosql databases</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Sql</th>
                            <th>NoSql</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1. Sql means structured query language</td>
                            <td>1. NoSql means non structured query language </td>
                        </tr>
                        <tr>
                            <td>2. It is the standard language when using Relational Databases.</td>
                            <td>2.  It is convenient when to use non relational database or to scale vertically.</td>
                        </tr>
                        <tr>
                            <td>3. SQL databases are mainly table-based and can be scale horizontally.</td>
                            <td>3. NoSQL databases are either key-value pairs, document-based</td>
                        </tr>
                        <tr>
                            <td>4. Examples of SQL databases include PostgreSQL, MySQL, Oracle and Microsoft SQL Server
                            </td>
                            <td>4. NoSQL database examples include Redis, RavenDB Cassandra, MongoDB, BigTable, HBase, Neo4j and CouchDB. </td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            {/* pn no 4  */}
            <div className='text-start mb-3 my-form p-3 rounded'>
                <h2>Porpouse of jwt:</h2>
                <p className='text-dark'>JWT or jot is stands for Json Web Token. JWT is  standarda used to share security information between a client and a server. A JWT is cryptographically signed, so there is a guarantee that we can trust it.
                    <br />
                    The most common usage of JWT is to authorization . Once the user is logged in, each request will include the JWT, allowing the user to access resources that are permitted with his token.</p>
                <h2>How it works:</h2>
                <p className='text-dark'>
                    At first user logs in to an application with a username and password, or otherwise proves her identity. The server confirms his identity and sends back an access token.
                    each token has 3 parts <br />
                    A. header. This section contains JWT information about the type of token and the algorithm used to sign it. <br />
                    B. Section two is the payload. This is the content of the token. <br />
                    C. Section three is the signature. This is the SHA256 hash of the encoded header, payload, and a secret. <br />
                </p>
            </div>
        </div>
    );
};

export default Blogs;