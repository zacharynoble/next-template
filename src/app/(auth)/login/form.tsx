'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/use-auth';
import { parseError, setFieldErrors } from '@/lib/errors';

const formSchema = z.object({
    email: z.string().email().min(1, 'Enter your email address'),
    password: z.string().min(1, 'Enter your password'),
});

type FormData = z.infer<typeof formSchema>;

export const LoginForm = () => {
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });
    const { login } = useAuth();
    const searchParams = useSearchParams();
    const verified = searchParams.get('verified');

    const onSubmit = async (data: FormData) => {
        try {
            await login(data.email, data.password);
        } catch (error) {
            const { message, fields } = parseError(error);
            if (fields) {
                setFieldErrors(fields, form.setError);
            } else {
                form.setError('password', { message: message || 'Something went wrong signing in' });
            }
        }
    };

    return (
        <Card className="p-5 w-[90%] max-w-[400px]">
            {verified && (
                <p className="px-3 py-2 mb-5 text-sm font-medium text-green-700 bg-green-300 border border-green-700 rounded-md dark:bg-green-700 dark:text-green-300 dark:border-green-400">
                    Account successfully verified!
                </p>
            )}
            <Form {...form}>
                <h1 className="mb-6 text-lg font-semibold text-center">Sign in to your account</h1>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="space-y-6">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="email@domain.com" autoComplete="current-email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter your password"
                                            type="password"
                                            autoComplete="current-password"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                </form>
            </Form>
        </Card>
    );
};
