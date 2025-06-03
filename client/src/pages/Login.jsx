import { AppWindowIcon, CodeIcon, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react"

import { useRegisterUserMutation } from "@/features/api/authApi"
import { useLoginUserMutation } from "@/features/api/authApi"
const Login = () => {
    const [signupInput, setSignupInput] = useState({ name: "", email: "", password: "" });
    const [loginInput, setLoginInput] = useState({ email: "", password: "" });

    const changeInputHandler = (e, type) => {
        const { name, value } = e.target;
        if (type === "signup") {
            setSignupInput({ ...signupInput, [name]: value });
        } else if (type === "login") {
            setLoginInput({ ...loginInput, [name]: value });
        }
    };
    const [registerUser, {
        data: registerData,
        error: registerError,
        isLoading: registerIsLoading,
        isSuccess: registerIsSuccess
    }] = useRegisterUserMutation();
    const [loginUser, {
        data: loginData,
        error: loginError,
        isLoading: loginIsLoading,
        isSuccess: loginIsSuccess
    }] = useLoginUserMutation();
    const handleRegistration = async (type) => {
        const inputData = type === "signup" ? signupInput : loginInput;
        
        // Use the correct function
        if (type === "signup") {
            await registerUser(inputData);
        } else {
            await loginUser(inputData);
        }
    };

    return (
        <div className="flex items-center w-full justify-center h-screen">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <Tabs defaultValue="account">
                    <TabsList>
                        <TabsTrigger value="signup">Signup</TabsTrigger>
                        <TabsTrigger value="login">Login</TabsTrigger>
                    </TabsList>

                    <TabsContent value="signup">
                        <Card>
                            <CardHeader>
                                <CardTitle>Signup</CardTitle>
                                <CardDescription>
                                    Create a new account and click signup when you are done.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="tabs-demo-name">Name</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        value={signupInput.name}
                                        onChange={(e) => changeInputHandler(e, "signup")}
                                        placeholder="enter username"
                                        required
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="tabs-demo-email">Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={signupInput.email}
                                        onChange={(e) => changeInputHandler(e, "signup")}
                                        placeholder="enter email"
                                        required
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="tabs-demo-password">Password</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        value={signupInput.password}
                                        onChange={(e) => changeInputHandler(e, "signup")}
                                        placeholder="enter password"
                                        required
                                    />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    disabled={registerIsLoading}
                                    onClick={() => handleRegistration("signup")}
                                >
                                    {registerIsLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                                            wait
                                        </>
                                    ) : (
                                        "Signup"
                                    )}
                                </Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                    <TabsContent value="login">
                        <Card>
                            <CardHeader>
                                <CardTitle>Login</CardTitle>
                                <CardDescription>
                                    Login with Username or Email id.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="tabs-demo-email">Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={loginInput.email}
                                        onChange={(e) => changeInputHandler(e, "login")}
                                        placeholder="enter email"
                                        required
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="tabs-demo-password">Password</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        value={loginInput.password}
                                        onChange={(e) => changeInputHandler(e, "login")}
                                        placeholder="enter password"
                                        required
                                    />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    disabled={loginIsLoading}
                                    onClick={() => handleRegistration("login")}
                                >
                                    {loginIsLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                                            wait
                                        </>
                                    ) : (
                                        "Login"
                                    )}
                                </Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default Login;
