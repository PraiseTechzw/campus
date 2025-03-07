"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { 
  AlertCircle, 
  Loader2, 
  CheckCircle,
  Lock,
  ShieldCheck,
  Info,
  KeyRound,
  GraduationCap,
  Eye,
  EyeOff,
  RefreshCw,
  Copy,
  Check,
  X
} from "lucide-react"

export default function ResetPasswordPage() {
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [copied, setCopied] = useState(false)

  // Password strength calculation
  const calculatePasswordStrength = (password: string) => {
    let strength = 0
    if (password.length >= 8) strength += 25
    if (/(?=.*[a-z])/.test(password)) strength += 25
    if (/(?=.*[A-Z])/.test(password)) strength += 25
    if (/(?=.*\d)/.test(password)) strength += 25
    return strength
  }

  const passwordStrength = calculatePasswordStrength(password)

  // Generate secure password
  const generateSecurePassword = () => {
    const length = 12
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"
    let newPassword = ""
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length)
      newPassword += charset[randomIndex]
    }
    setPassword(newPassword)
    setConfirmPassword(newPassword)
  }

  // Copy password to clipboard
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    // Validate passwords
    if (password.length < 8) {
      setError("Password must be at least 8 characters long")
      return
    }

    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      setError("Password must contain at least one uppercase letter, one lowercase letter, and one number")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    setIsLoading(true)

    // Simulate API call delay
    setTimeout(() => {
      // Mock successful password reset
      console.log("Password reset successful")
      setIsLoading(false)
      setIsSubmitted(true)

      // Redirect to login after 3 seconds
      setTimeout(() => {
        router.push("/auth/login")
      }, 3000)
    }, 1500)
  }

  return (
    <div className="container flex h-screen max-w-screen-xl flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight flex items-center justify-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            Reset your password
          </h1>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            <Info className="h-4 w-4" />
            Create a new secure password for your account
          </p>
        </div>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl flex items-center gap-2">
              <KeyRound className="h-5 w-5 text-primary" />
              New password
            </CardTitle>
            <CardDescription className="flex items-center gap-1">
              <ShieldCheck className="h-4 w-4" />
              Please enter a new secure password for your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center space-y-3 py-4">
                <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-center text-lg font-medium">Password reset successful</h3>
                <p className="text-center text-sm text-muted-foreground">Your password has been reset successfully.</p>
                <p className="text-center text-xs text-muted-foreground flex items-center gap-1">
                  <Loader2 className="h-3 w-3 animate-spin" />
                  Redirecting to login page...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="flex items-center gap-1">
                      <Lock className="h-4 w-4" />
                      New Password
                    </Label>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={generateSecurePassword}
                      className="flex items-center gap-1"
                    >
                      <RefreshCw className="h-3 w-3" />
                      Generate
                    </Button>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <div className="absolute right-0 top-0 flex h-full items-center gap-1 pr-2">
                      {password && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-full px-2 hover:bg-transparent"
                          onClick={copyToClipboard}
                        >
                          {copied ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4 text-muted-foreground" />
                          )}
                        </Button>
                      )}
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-full px-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  {/* Password Strength Indicator */}
                  {password && (
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Password strength:</span>
                        <span className={passwordStrength >= 75 ? "text-green-500" : passwordStrength >= 50 ? "text-yellow-500" : "text-red-500"}>
                          {passwordStrength >= 75 ? "Strong" : passwordStrength >= 50 ? "Medium" : "Weak"}
                        </span>
                      </div>
                      <Progress value={passwordStrength} className="h-1" />
                    </div>
                  )}

                  <div className="text-xs text-muted-foreground space-y-1">
                    <p className="flex items-center gap-1">
                      <ShieldCheck className="h-3 w-3" />
                      Password requirements:
                    </p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-1">
                        {password.length >= 8 ? (
                          <Check className="h-3 w-3 text-green-500" />
                        ) : (
                          <X className="h-3 w-3 text-red-500" />
                        )}
                        At least 8 characters
                      </li>
                      <li className="flex items-center gap-1">
                        {/(?=.*[A-Z])/.test(password) ? (
                          <Check className="h-3 w-3 text-green-500" />
                        ) : (
                          <X className="h-3 w-3 text-red-500" />
                        )}
                        One uppercase letter
                      </li>
                      <li className="flex items-center gap-1">
                        {/(?=.*[a-z])/.test(password) ? (
                          <Check className="h-3 w-3 text-green-500" />
                        ) : (
                          <X className="h-3 w-3 text-red-500" />
                        )}
                        One lowercase letter
                      </li>
                      <li className="flex items-center gap-1">
                        {/(?=.*\d)/.test(password) ? (
                          <Check className="h-3 w-3 text-green-500" />
                        ) : (
                          <X className="h-3 w-3 text-red-500" />
                        )}
                        One number
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="flex items-center gap-1">
                    <Lock className="h-4 w-4" />
                    Confirm New Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Resetting...
                    </>
                  ) : (
                    "Reset password"
                  )}
                </Button>
              </form>
            )}
          </CardContent>
          <CardFooter className="flex flex-col">
            <div className="mt-2 text-center text-sm text-muted-foreground">
              Remember your password?{" "}
              <Link href="/auth/login" className="font-medium text-primary hover:underline flex items-center gap-1">
                <KeyRound className="h-3 w-3" />
                Sign in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

