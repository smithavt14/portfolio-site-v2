'use client';

import React, { Suspense, useEffect } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';

const GA_TRACKING_ID = 'G-L03HCBHKHQ';

declare global {
    interface Window {
        gtag: (command: string, target: string, config?: object) => void;
        dataLayer: any[];
    }
}

// Create a separate component for the part using useSearchParams
function GoogleAnalyticsTracker() {
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

    return null;
}

export default function GoogleAnalytics() {
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
            <Suspense fallback={null}>
                <GoogleAnalyticsTracker />
            </Suspense>
        </>
    );
} 