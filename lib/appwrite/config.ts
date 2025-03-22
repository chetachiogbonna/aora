import { Account, Client, Databases } from "react-native-appwrite"

const client = new Client()
client
    .setProject(process.env.APPWRITE_PROJECT_ID!)
    .setEndpoint(process.env.APPWRITE_ENDPOINT!)

export const account = new Account(client)
export const databases = new Databases(client)