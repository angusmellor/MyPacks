'use client'

import { signIn } from 'next-auth/react'
import { Button } from './ui/button'
import { Icons } from './ui/icons'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { useState } from 'react'

export default function AuthForm() {

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    const target = event.target as typeof event.target & {
      email: { value: string }
    }
    const email = target.email.value
    signIn('email', { email })
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative flex justify-center text-xs uppercase">
        <span className="bg-background px-2 text-muted-foreground">
          Or continue with
        </span>
      </div>
      <Button
        variant="default"
        onClick={() => {
          setIsLoading(true)
          signIn('google')
        }}
        disabled={isLoading}
      >
        {isLoading ?
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> :
          <Icons.google className="w-5 h-5 mr-2" />
        }
          Google
      </Button>
    </>
  )
}