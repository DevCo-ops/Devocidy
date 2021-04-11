import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  site: process.env.NEXTAUTH_URL,
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],

  database: process.env.MONGODB_URI,

  pages: {
    // custom signin/signup/error pages
  },
});
