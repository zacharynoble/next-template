import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { getUser } from '@/lib/dal';

import { RegisterForm } from './form';

export const metadata: Metadata = {
    title: 'Register',
    description: 'Create an account to start using our app',
};

export default async function Register() {
    const user = await getUser();
    if (user) redirect('/');

    return (
        <div className="flex justify-center mt-20">
            <RegisterForm />
        </div>
    );
}
