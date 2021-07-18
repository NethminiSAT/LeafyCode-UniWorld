import NavBar from "./NavBar";
import client from "../../apollo-client";
import {gql} from "@apollo/client";
import Link from "next/link";

const Login = ({users}) => {


  // onChange handler for email
  function onChangeEmail(event)
  {
    const { name, value } = event.target;
    localStorage.setItem('Email', value);
  }

  // onChange handler for password
  function onChangePassword(event)
  {
    const { name, value } = event.target;
    localStorage.setItem('Password', value);
  }

  // onClick handler for submit
  function onSubmit()
  {
    let checker = false
    users.map((user) => (

      user.email == localStorage.getItem('Email') && user.password == localStorage.getItem('Password') ?  checker = true : []
    ))

    checker !=  true ? alert("Your credintials is  Invalid..!") :  window.location = '/'
    checker !=  true ? window.location = '/components/login' :  []
  }


  return (
    <div className="w-full flex flex-col">
      <NavBar/>
      <div className="min-h-screen bg-white py-6 flex flex-col justify-center ">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div
            className="absolute inset-0  bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
          </div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">Login </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input autoComplete="off" id="email" name="email" type="text" onChange={event => { onChangeEmail(event) }}
                           className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                           placeholder="Email address"/>
                    <label htmlFor="email"
                           className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email
                      Address</label>
                  </div>
                  <div className="relative">
                    <input autoComplete="off" id="password" name="password" type="password" onChange={event => { onChangePassword(event) }}
                           className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                           placeholder="Password"/>
                    <label htmlFor="password"
                           className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                  </div>
                  <div className="relative">
                    <button type="submit" className="bg-blue-500 text-white rounded-md px-2 py-1" onClick={() => { onSubmit() }} >Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login


export async function getStaticProps() {
  const {data} = await client.query({
    query: gql`
      query users {
        users {
          email
          name
          password
          _id
        }
      }
    `,
  });

  return {
    props: {
      users: data.users,
    },
  };
}
