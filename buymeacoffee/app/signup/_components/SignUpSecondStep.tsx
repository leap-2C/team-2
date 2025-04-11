'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import axios from 'axios';
import { log } from 'console';

const SignUpSecondStep = ({ formData, onPrev }: { formData: any; onPrev: () => void }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSignUp = async (e) => {
        e.preventDefault();
        console.log("Form submitted");
        console.log("usernameeeee",username);
        

        if (!email || !password || !username) {
            setError('Please fill in all fields.');
            console.log("Validation failed");
            return;
        }

        setLoading(true);
        setError('');
        console.log("Making request with:", { email, password, username });

        try {
            const response = await axios.post('http://localhost:9000/user/signup', { email, password, username });
            console.log('Response:', response);
            if (response.status === 200) {
                console.log('Signup successful');
                router.push("/login");
            }
        } catch (err) {
            console.error('Error during signup:', err);
            setError('Failed to sign up. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex w-full h-screen">
            <div className="absolute top-4 right-4">
                <Button
                    className="bg-gray-300 text-black"
                    onClick={() => window.location.href = '/login'}
                >
                    Log in
                </Button>
            </div>
            <div className="flex justify-center items-center bg-amber-400 w-1/2 h-full">
                <div className="flex flex-col justify-center items-center w-[455px]">
                    <Image
                        src="/images/illustration.png"
                        alt="illustration"
                        width={240}
                        height={240}
                        className="object-cover mb-[40px] rounded-[30px]"
                    />
                    <p className="text-2xl font-bold">Fund your creative work</p>
                    <p className="text-[16px] text-center mt-[12px]">
                        Accept support. Start a membership. Setup a shop. It’s easier than you think.
                    </p>
                </div>
            </div>
            <div className="flex justify-center items-center w-1/2 h-full">
                <div className="flex flex-col justify-start w-[407px]">
                    <div className="py-[24px] gap-[6px]">
                        <p className="text-2xl font-bold">
                            Welcome, {formData.userName}
                        </p>
                        <p>Connect email and set a password</p>
                    </div>
                    <form onSubmit={handleSignUp}>
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                className="w-full mt-[6px]"
                                placeholder="Enter email here"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="mt-[16px]">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                className="w-full mt-[6px]"
                                placeholder="Enter password here"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className="flex justify-between mt-[24px]">
                            <Button type="submit" className="bg-black text-white w-full" disabled={loading}>
                                {loading ? 'Signing Up...' : 'Continue'}
                            </Button>
                        </div>
                    </form>
                    {error && <p className="text-red-500">{error}</p>}
                </div>
            </div>
        </div>
    );
};

export default SignUpSecondStep;
