import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
  ],
  callbacks: {
    async jwt(params) {
      const { token, account, profile } = params;
      if (account) {
        // persist the accessToken and idToken in the session JWT
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
        token.idpId = profile?.sub;  // this is the ID assigned by the IdP
        // TODO: can also store actual accessToken expiry from OAuth provider
      }
      return token;
    },
    async session(params) {
      const { session, token, user } = params;
      // TODO: later we want to make this information available to only server-side
      // https://github.com/nextauthjs/next-auth/issues/7976#issuecomment-2334444572
      session.accessToken = token.accessToken;
      session.idToken = token.idToken;
      session.idpId = token.idpId;
      return session;
    }
  },
  session: {
    maxAge: 60 * 60,  // 1 hour
  }
});

export { handler as GET, handler as POST };
