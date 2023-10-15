'use client';
import { useState } from 'react';
import Head from 'next/head';
import InterestButton from '@components/InterestButton';
import Button from '@components/Button';
import { useRouter } from 'next/navigation';

export default function Home() {
    const [interests, setInterests] = useState<string[]>([]);
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const response = await fetch('/api/student/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ interests: interests }),
        });

        return await response.json().then((data) => {
            localStorage.setItem('studentID', data['id']['$oid']);
            router.push('/practice');
        });
    };

    const handleInterestClick = (interest: string) => {
        if (interests.includes(interest)) {
            setInterests(interests.filter((i) => i !== interest));
        } else {
            setInterests([...interests, interest]);
        }
    };

    return (
        <div className="min-h-screen bg-main bg-emerald-600 p-20">
            <Head>
                <title>Settle</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <div className="space-y-10 flex flex-col items-center">
                <div className="space-y-4">
                    <h1 className="text-5xl font-semibold text-white text-center">
                        Welcome, Dilan!
                    </h1>
                    <p className="text-2xl text-white text-center">
                        What are your interests?
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4 mb-4">
                    <div className="space-y-10 flex flex-col items-center">
                        <div className="flex flex-wrap justify-center gap-4 mb-4">
                            <InterestButton
                                label="Sports"
                                callback={() => handleInterestClick('Sports')}
                            />
                            <InterestButton
                                label="Video Games"
                                callback={() =>
                                    handleInterestClick('Video Games')
                                }
                            />
                            <InterestButton
                                label="Art"
                                callback={() => handleInterestClick('Art')}
                            />
                            <InterestButton
                                label="Theater"
                                callback={() => handleInterestClick('Theater')}
                            />
                            <InterestButton
                                label="Music"
                                callback={() => handleInterestClick('Music')}
                            />
                            <InterestButton
                                label="Technology"
                                callback={() =>
                                    handleInterestClick('Technology')
                                }
                            />
                            <InterestButton
                                label="Fashion"
                                callback={() => handleInterestClick('Fashion')}
                            />
                            <InterestButton
                                label="Food and Drink"
                                callback={() =>
                                    handleInterestClick('Food and Drink')
                                }
                            />
                            <InterestButton
                                label="Travel"
                                callback={() => handleInterestClick('Travel')}
                            />
                            <InterestButton
                                label="Science"
                                callback={() => handleInterestClick('Science')}
                            />
                            <InterestButton
                                label="Movies"
                                callback={() => handleInterestClick('Movies')}
                            />
                            <InterestButton
                                label="Fitness"
                                callback={() => handleInterestClick('Fitness')}
                            />
                            <InterestButton
                                label="Environment"
                                callback={() =>
                                    handleInterestClick('Environment')
                                }
                            />
                            <InterestButton
                                label="History"
                                callback={() => handleInterestClick('History')}
                            />
                            <InterestButton
                                label="Politics"
                                callback={() => handleInterestClick('Politics')}
                            />
                        </div>
                        <Button
                            type="submit"
                            label="Let's start"
                            className="w-1/3 bg-red-400"
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
