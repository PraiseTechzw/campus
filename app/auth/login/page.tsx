"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  AlertCircle, 
  Loader2, 
  Mail, 
  Lock, 
  User, 
  GraduationCap,
  Info,
  KeyRound,
  ShieldCheck,
  HelpCircle
} from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    // Simulate API call delay
    setTimeout(() => {
      // Mock validation
      if (!email.endsWith(".edu")) {
        setError("Please use your university email address (.edu)")
        setIsLoading(false)
        return
      }

      // Mock successful login
      console.log("Login successful", { email, password, rememberMe })

      // Redirect to dashboard
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="container flex h-screen max-w-screen-xl flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight flex items-center justify-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">Enter your credentials to access your account</p>
        </div>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl flex items-center gap-2">
              <KeyRound className="h-5 w-5 text-primary" />
              Sign in
            </CardTitle>
            <CardDescription className="flex items-center gap-1">
              <Info className="h-4 w-4" />
              Use your university email to sign in to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  University Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="user@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Info className="h-3 w-3" />
                  Must be a validemail address
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="flex items-center gap-1">
                    <Lock className="h-4 w-4" />
                    Password
                  </Label>
                  <Link 
                    href="/auth/forgot-password" 
                    className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1"
                  >
                    <HelpCircle className="h-3 w-3" />
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3" />
                  Enter your secure password
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-1"
                >
                  <User className="h-4 w-4" />
                  Remember me
                </label>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign in"
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col">
            <div className="mt-2 text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link href="/auth/signup" className="font-medium text-primary hover:underline flex items-center gap-1">
                <GraduationCap className="h-3 w-3" />
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

