export class ServerConfig {
  port: number;
  useCache: boolean;
  jwtSecret: string;
  jwtRefreshSecret: string;
}

export default (): ServerConfig => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  useCache: process.env.USE_CACHE == 'true',
  jwtSecret: process.env.JWT_SECRET || '',
  jwtRefreshSecret: process.env.JwT_REFRESH_SECRET || '',
});
