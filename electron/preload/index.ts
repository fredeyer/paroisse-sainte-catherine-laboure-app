import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
  register: (data) => ipcRenderer.invoke('register', data),
  getDashboardData: () => ipcRenderer.invoke('get-dashboard-data'),
});
