export const DOMAIN = process.env.APP_DOMAIN ?? 'localhost';
export const PROTOCOL = process.env.APP_PROTOCOL ?? 'http';
export const PORT = process.env.APP_PORT ?? 3000;

export const PORT_SSL = process.env.APP_PORT_SSL ?? 3000;
export const HOST = `${PROTOCOL}://${DOMAIN}:${PORT}`;

export const HOST_SSL = `https://${DOMAIN}:${PORT_SSL}`;
