import { Client, Account, Databases, Storage, Teams } from "appwrite";
import conf from "../conf/conf";

// Initialize Appwrite Client
export const client = new Client();

client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);

// Initialize Services
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const teams = new Teams(client);
