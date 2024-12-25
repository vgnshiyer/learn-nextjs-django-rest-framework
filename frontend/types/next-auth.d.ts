import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    accessToken: string;
    idToken: string;
    idpId: string;

    // TODO: make use of refresh token if available from OP
  }
}
