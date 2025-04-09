"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const SignUpSecondStep = ({ formData, onPrev }: { formData: any; onPrev: () => void }) => {
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            email: formData.email || '',
            password: '',
        },
        validate: (values) => {
            const errors: any = {};
            if (!values.email) {
                errors.email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(values.email)) {
                errors.email = 'Email is invalid';
            }

            if (!values.password) {
                errors.password = 'Password is required';
            } else if (values.password.length < 6) {
                errors.password = 'Password must be at least 6 characters long';
            }

            return errors;
        },
        onSubmit: (values) => {
            console.log('Form submitted:', { ...formData, ...values });
            router.push('/login');
        },
    });

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
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                className="w-full mt-[6px]"
                                placeholder="Enter email here"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <div className="text-red-500">{formik.errors.email}</div>
                            )}
                        </div>
                        <div className="mt-[16px]">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                className="w-full mt-[6px]"
                                placeholder="Enter password here"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.password && formik.errors.password && (
                                <div className="text-red-500">{formik.errors.password}</div>
                            )}
                        </div>
                        <div className="flex justify-between mt-[24px]">
                            <Button type="submit" className="bg-black text-white w-full">
                                Continue
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUpSecondStep;
