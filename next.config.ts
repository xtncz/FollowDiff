import type { NextConfig } from "next";

const baseUrl = process.env.NODE_ENV === "production"
    ? "https://follow-diff.vercel.app"
    : "http://localhost:3000";

const nextConfig: NextConfig = {
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "Strict-Transport-Security",
                        value: "max-age=63072000; includeSubDomains; preload"
                    },
                    {
                        key: "X-XSS-Protection",
                        value: "1; mode=block"
                    },
                    {
                        key: "X-Frame-Options",
                        value: "SAMEORIGIN"
                    },
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff"
                    },
                    {
                        key: "Referrer-Policy",
                        value: "strict-origin-when-cross-origin"
                    },
                    {
                        key: "Content-Security-Policy",
                        value: [
                            "default-src 'self'",
                            "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
                            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
                            "img-src 'self' data: blob: https:",
                            "font-src 'self' https://fonts.gstatic.com",
                            "connect-src 'self' https: wss:",
                            "form-action 'self'",
                            "frame-ancestors 'self'",
                            "base-uri 'self'",
                            "object-src 'none'",
                            "upgrade-insecure-requests"
                        ].join("; ")
                    }
                ]
            }
        ];
    },
    async redirects() {
        return process.env.NODE_ENV === "production"
            ? [
                {
                    source: "/:path*",
                    has: [
                        {
                            type: "host",
                            value: "follow-diff.vercel.app"
                        }
                    ],
                    missing: [
                        {
                            type: "header",
                            key: "x-forwarded-proto",
                            value: "https"
                        }
                    ],
                    destination: `${baseUrl}/:path*`,
                    permanent: true
                }
            ]
            : [];
    }
};

export default nextConfig;
