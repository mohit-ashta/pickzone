"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/lib/config";

export default function SignupPage() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/dashboard");
  };
  return (
    <main className="min-h-dvh flex items-stretch">
      <div className="hidden lg:flex relative w-2/5 items-center justify-center p-8">
        <div className="absolute inset-0 glass rounded-none lg:rounded-r-2xl bg-neon-gradient" />
        <div className="relative z-10 max-w-md w-full">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-xl glass neon-ring">
            <Image
              src="/images/task-reference.jpeg"
              alt="Racket energy artwork"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="mt-4 space-y-1">
            <h2 className="text-xl font-semibold">
              {siteConfig.tagline}
            </h2>
            <p className="text-sm text-muted-foreground">
              Join a global network of players, improve your skills, and earn
              exclusive rewards while playing the game you love.
            </p>
          </div>
        </div>
      </div>
      <section className="flex-1 flex items-center justify-center p-6 md:p-10">
        <Card className="w-full max-w-lg glass">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Get Started Now!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username" aria-label="Username" placeholder="john_doe"
                  className="glass-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email" aria-label="Email address" type="email"
                  placeholder="you@example.com"
                  className="glass-input"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 555 000 1234"
                  className="glass-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" className="glass-input" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm">Confirm Password</Label>
                <Input id="confirm" type="password" className="glass-input" />
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm text-muted-foreground">
                I have read and agree to the Terms of Service and Privacy
                Policy.
              </Label>
            </div>

            <Button className="w-full" onClick={handleLogin}>
              Sign up
            </Button>

            <div className="text-center text-xs text-muted-foreground">or</div>

            <div className="grid grid-cols-3 gap-3">
              <Button variant="outline" className="glass bg-transparent">
                Google
              </Button>
              <Button variant="outline" className="glass bg-transparent">
                Facebook
              </Button>
              <Button variant="outline" className="glass bg-transparent">
                Apple
              </Button>
            </div>

            <Separator className="my-2" />
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="#" className="underline underline-offset-4">
                Login
              </Link>
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
