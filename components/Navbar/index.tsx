'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';
import ThemeToggle from '@components/ThemeToggle';
import Container from '@/components/Container';

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();

    const justifyContent = pathname === '/blog' || pathname.startsWith('/blog/') 
        ? 'space-between' 
        : 'flex-end';

    const renderBackButton = () => {
        if (pathname !== '/') {
            return (
                <button
                    className="text-midnight dark:text-white flex items-center"
                    onClick={() => router.back()}
                >
                    <FaArrowLeft className="mr-2" />
                </button>
            );
        }
        return null;
    };

    return (
        <nav style={{ justifyContent }} className="duration-200 w-full py-6 md:py-12 text-midnight dark:text-white flex items-center z-50 transition-all">
            <Container>
                {renderBackButton()}
                <ThemeToggle />
            </Container>
        </nav>
    );
}

export default Navbar; 