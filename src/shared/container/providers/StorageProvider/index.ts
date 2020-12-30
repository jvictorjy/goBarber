import { container } from 'tsyringe';
import uploadCofig from '@config/upload';

import IStorageProviders from '@shared/container/providers/StorageProvider/models/IStorageProviders';
import DiskStorageProvider from '@shared/container/providers/StorageProvider/implementations/DiskStorageProvider';
import S3StorageProvider from '@shared/container/providers/StorageProvider/implementations/S3StorageProvider';

const providers = {
  disk: DiskStorageProvider,
  s3: S3StorageProvider,
};

container.registerSingleton<IStorageProviders>(
  'StorageProvider',
  providers[uploadCofig.driver],
);
