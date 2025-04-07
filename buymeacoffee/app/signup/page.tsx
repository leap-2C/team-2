import React from 'react';
import Image from 'next/image';


const signUpPage = () => {


    return (
        <div>
            <div className='flex justify-center items-center bg-amber-400 w-1/2 h-screen'>
                <div className='flex flex-col justify-center items-center w-[455px]'>
                    <Image
                        src="/images/illustration.png"
                        alt="illustration"
                        width={240}
                        height={240}
                        className="object-cover mb-[40px] rounded-[30px]"
                    />
                    <p className='text-2xl font-bold'>Fund your creative work</p>
                    <p className='text-[16px] text-center mt-[12px]'>Accept support. Start a membership. Setup a shop. It’s easier than you think.</p>


                </div>


            </div>

        </div>
    );
};

export default signUpPage;
