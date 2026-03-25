import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.domniot.app',
  appName: 'Domniot',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    // ESP32'ye HTTP erişim için cleartext izni (AndroidManifest'te de açılacak)
    cleartext: true,
  },
  android: {
    allowMixedContent: true,
    backgroundColor: '#000000',
  },
  plugins: {
    Camera: {
      permissions: ['camera'],
    },
  },
};

export default config;
