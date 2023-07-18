import Layout from "@component/components/Layout"
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


export default function Login() {
    return (
      <>
      <Layout>
      </Layout>
        <div class = "min-h-full flex items-center justify-center mt-32 py-12 px-4 sm:px-6 lg:px-8">
            <div class = "max-w-md w-full space-y-8">
                <div>
                    <h2 class = "mt-6 text-center text-3xl fond-extrabold text-gray-900">Sign in to your account</h2>
                    <p class = "mt-2 text-center text-sm text-gray-600">
                        Or
                        <a href ="a" class = "font-medium text-blue-600 hover:text-blue-500 px-2">Sign Up</a>
                    </p>
                </div>
                <form class ="mt-8 space-y-6">
                    <div class = "rounded-md shadow-sm -space-y-px">
                        <div>
                            <input type = "email" autoComplete="none" required 
                            class = "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Email address">
                            </input>
                        </div>

                        <div>
                            <input type = "password" autoComplete="none" required 
                            class = "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="Password">
                            </input>
                        </div>
                    </div>

                    <div class = "flex items-center justify-between">
                        <div class = "flex items-center">
                            <input type="checkbox" class = "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                            <label class = "ml-2 block text-sm text-gray-900">Remember username</label>
                        </div>

                        <div class = "text-sm">
                            <a href="a" class = "font-medium text-blue-600 hover:text-blue-500"> Forgot password?</a>
                        </div>
                    </div>

                    <div>
                        <button class="group relative w-full flex justify-center py-2 px-4 border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-blue-600">Sign In</button>
                    </div>

                </form>
            </div>
        </div>
      </>
    )
  }