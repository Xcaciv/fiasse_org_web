const { app } = require('@azure/functions');

// URL validation and sanitization utilities
function sanitizeUrl(url) {
    if (!url || typeof url !== 'string') {
        return '[INVALID_URL]';
    }
    
    try {
        // Parse the URL to validate its structure
        const parsedUrl = new URL(url);
        
        // Remove sensitive query parameters that shouldn't be logged
        const sensitiveParams = ['password', 'token', 'key', 'secret', 'api_key', 'auth'];
        const searchParams = new URLSearchParams(parsedUrl.search);
        
        sensitiveParams.forEach(param => {
            if (searchParams.has(param)) {
                searchParams.set(param, '[REDACTED]');
            }
        });
        
        // Reconstruct URL with sanitized parameters
        parsedUrl.search = searchParams.toString();
        
        // Limit URL length to prevent log injection
        const sanitizedUrl = parsedUrl.toString();
        return sanitizedUrl.length > 200 ? sanitizedUrl.substring(0, 200) + '...[TRUNCATED]' : sanitizedUrl;
        
    } catch (error) {
        // If URL parsing fails, return a safe placeholder
        return '[MALFORMED_URL]';
    }
}

function validateUrl(url) {
    if (!url || typeof url !== 'string') {
        return { isValid: false, error: 'URL is required and must be a string' };
    }
    
    // Length validation
    if (url.length > 2048) {
        return { isValid: false, error: 'URL exceeds maximum length' };
    }
    
    try {
        const parsedUrl = new URL(url);
        
        // Protocol validation - only HTTPS allowed
        if (parsedUrl.protocol !== 'https:') {
            return { isValid: false, error: 'Invalid protocol. Only HTTPS is allowed' };
        }
        
        // Domain validation (optional - add your allowed domains)
        const allowedDomains = ['localhost', 'your-domain.com', 'fiasse.org'];
        // Uncomment the following lines if you want to restrict domains:
        // if (!allowedDomains.some(domain => parsedUrl.hostname === domain || parsedUrl.hostname.endsWith('.' + domain))) {
        //     return { isValid: false, error: 'Domain not allowed' };
        // }
        
        // Check for suspicious patterns
        const suspiciousPatterns = [
            /javascript:/i,
            /data:/i,
            /vbscript:/i,
            /<script/i,
            /on\w+=/i,
            /\\x/i,
            /%00/i
        ];
        
        if (suspiciousPatterns.some(pattern => pattern.test(url))) {
            return { isValid: false, error: 'URL contains suspicious content' };
        }
        
        return { isValid: true, url: parsedUrl.toString() };
        
    } catch (error) {
        return { isValid: false, error: 'Malformed URL' };
    }
}

app.http('smmsg', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        // Validate the URL before processing
        const validation = validateUrl(request.url);
        
        if (!validation.isValid) {
            context.log(`Invalid URL received: ${validation.error}`);
            return { 
                status: 400, 
                body: { error: 'Invalid request URL' } 
            };
        }
        
        // Sanitize URL for logging (removes sensitive data)
        const sanitizedUrl = sanitizeUrl(request.url);
        context.log(`Http function processed request for url "${sanitizedUrl}"`);

        return { body: 'Relentlessly Practical. Relentlessly Securable.' };
    }
});
