import { container } from 'tsyringe';

import IStorageProviders from '@shared/container/providers/StorageProvider/models/IStorageProviders';
import DiskStorageProvider from '@shared/container/providers/StorageProvider/implementations/DiskStorageProvider';

const providers = {
  disk: DiskStorageProvider,
};

container.registerSingleton<IStorageProviders>(
  'StorageProvider',
  providers.disk,
);
