import { SignIn } from "@clerk/nextjs"

const SignInPage = () => {
  return (
    <main className="auth-page">
      <SignIn routing="path" path="/sign-in"/>
    </main>
  )
}

export default SignInPage
