'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';

const GA_TRACKING_ID = 'G-L03HCBHKHQ';

declare global {
    interface Window {
        gtag: (command: string, target: string, config?: object) => void;
        dataLayer: any[];
    }
}

export default function GoogleAnalytics() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (pathname) {
            // Construct the full URL
            const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
            
            // Track page view
            window.gtag('config', GA_TRACKING_ID, {
                page_path: url,
            });
        }
    }, [pathname, searchParams]);

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                strategy="afterInteractive"
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
            >
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}');
                `}
            </Script>
        </>
    );
} 