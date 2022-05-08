import React from 'react'
import { motion } from 'framer-motion'

const Blogs = () => {
  const blogs = [
    {
      ques: 'Difference between javascript and nodejs?',
      ans: 'javascript is a language. where node js is not a language. its a runtime enviroment. javascript code can only be run in browser. node js allow us to run javascript code in out local machine. this why node js made the server side javascript possible. javascript has the capability to manipulate the dom. but node js does not have. nodejs mostly used for server side development.',
    },
    {
      ques: 'Differences between sql and nosql databases?',
      ans: 'sql means relational database and nosql is non-relational database.sql database structre is static. on the other hand, nosql database structre is dynamic. sql database is suitable for complex application.but nosql is not beacuse it is not that much powerful as sql database.hover, nosql database are suited for hierarchical data storage.',
    },
    {
      ques: 'What is the purpose of jwt and how does it work?',
      ans: 'jwt is the shortform of json web token. which ensures security of data without even hiding it. jwt made of three parts- header, playload and signature. header is the part where user information is encoded. jwt used in server side authentication. when a user login to his account server confirms his identity and sends back an access token containing a reference to her identity. the client side then ncludes this access token with every request to the server. this way user gets authenticated every api has jwt security in it.',
    },
  ]
  return (
    <div className='w-[90%] md:w-3/5 xl:w-2/5 mx-auto space-y-8 my-14 bg-white p-10 rounded-2xl shadow-lg shadow-gray-200 border-t-4 border-primary'>
      {blogs.map((blog, index) => (
        <motion.div
          key={index}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.2 }}
        >
          <Blog blog={blog}></Blog>
        </motion.div>
      ))}
    </div>
  )
}

function Blog({ blog }) {
  const { ques, ans } = blog
  return (
    <div>
      <h2 className='font-medium mb-5 text-xl'>{ques}</h2>
      <p>{ans}</p>
    </div>
  )
}

export default Blogs
