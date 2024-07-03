import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname: 'ui.shadcn.com'
            }
        ]
    }
};

export default nextConfig;
