# Production Files

This files are used in nginx and systemd to lunch the application.

To generate the frontend, the variable 'PUBLIC_DIR' needs to be set. Currently /var/www/depolyment-test/ is assumed on nginx.

The following command builds to 'PUBLIC_DIR' with sudo:
```bash
sudo -E npx vite build
```

The server needs to be generated with tsc:
```bash
cd server
npx tsc
```
