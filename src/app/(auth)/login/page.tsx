import { Metadata } from "next"
import Link from "next/link"

import AuthForm from "@/components/authForm"
import { Icons } from "@/components/ui/icons"

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
}

export default function LoginPage() {
  return (
    <div className="container flex h-screen w-screen items-center justify-center">
      <Link
        href="/"
        className="absolute left-4 top-4 flex items-center md:left-8 md:top-8"
      >
        <>
        <Icons.chevronLeft className="mr-2 mt-1 h-4 w-4" />
          Back
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email to sign in to your account
          </p>
        </div>
        <AuthForm />
      </div>
    </div>
  )
}