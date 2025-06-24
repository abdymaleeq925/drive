export const appwriteConfig = {
  endpointUrl: process.env.APPWRITE_ENDPOINT!,
  projectId: process.env.APPWRITE_PROJECTID!,
  databaseId: process.env.APPWRITE_DATABASEID!,
  usersCollectionId: process.env.APPWRITE_USERS_COLLECTION!,
  filesCollectionId: process.env.APPWRITE_FILES_COLLECTION!,
  bucketId: process.env.APPWRITE_BUCKETID!,
  secretKey: process.env.APPWRITE_KEY!,
};
