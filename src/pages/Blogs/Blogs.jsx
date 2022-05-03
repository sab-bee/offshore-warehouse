import React from 'react'

const Blogs = () => {
  return (
    <div className='w-[90%] md:w-3/5 xl:w-2/5 mx-auto space-y-8 my-12 bg-white p-6 rounded-2xl'>
      <div>
        <h2 className='font-medium mb-4 text-lg'>
          Difference between javascript and nodejs?
        </h2>
        <p>
          javascript is a language. where node js is not a language. its a
          runtime enviroment. javascript code can only be run in browser. node
          js allow us to run javascript code in out local machine. this why node
          js made the server side javascript possible. javascript has the
          capability to manipulate the dom. but node js does not have. nodejs
          mostly used for server side development.
        </p>
      </div>
      <div>
        <h2 className='font-medium mb-4 text-lg'>
          Differences between sql and nosql databases?
        </h2>
        <p>
          sql means relational database and nosql is non-relational database.sql
          database structre is static. on the other hand, nosql database
          structre is dynamic. sql database is suitable for complex application.
          but nosql is not beacuse it is not that much powerful as sql database.
          hover, nosql database are suited for hierarchical data storage.
        </p>
      </div>
      <div>
        <h2 className='font-medium mb-4 text-lg'>
          What is the purpose of jwt and how does it work?
        </h2>
        <p>
          jwt is the shortform of json web token. which ensures security of data
          without even hiding it. jwt made of three parts- header, playload and
          signature. header is the part where user information is encoded. jwt
          used in server side authentication. when a user login to his account
          server confirms his identity and sends back an access token containing
          a reference to her identity. the client side then ncludes this access
          token with every request to the server. this way user gets
          authenticated every api has jwt security in it.
        </p>
      </div>
    </div>
  )
}

export default Blogs
