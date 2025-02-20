export const initMockAPI = async (): Promise<void> => {
  if (typeof window !== 'undefined') {
    const { worker } = await import('./browser');
    await worker.start({ onUnhandledRequest: 'bypass' });
  }
};
