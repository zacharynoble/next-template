'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

import { api } from '@/lib/api';

function AttemptVerification() {
    const [errored, setErrored] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    useEffect(() => {
        api.post('/verify', { token })
            .then(() => router.replace('/login?verified=true'))
            .catch(() => setErrored(true));
    }, [token, router]);

    if (errored) return <p>Sorry, we were unable to verify your account.</p>;

    return <p>Loading...</p>;
}

export default function Verify() {
    return (
        <Suspense>
            <AttemptVerification />
        </Suspense>
    );
}
