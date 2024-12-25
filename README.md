# Next Js (Next-Auth) example with Django backend

## Prerequisites

- Next 14.2.21
- Next-Auth 4.24.11
- React 18
- Django 5.1.4
- djangorestframework 3.15.2

## Architecture / Flow

![image](https://github.com/user-attachments/assets/74b257d1-0421-482c-8afe-18d4140178e3)

## Points to ponder

- It is generally safe to store accessTokens and idTokens in sessions as long as they are protected (According to [Next-Auth](https://next-auth.js.org/faq#json-web-tokens), they are encrypted and `Http-only`, can be read only on the server)
- Additionally, session expiry has been shortened to 1 hour only for additional security.
- TODO: Apparently, Next-Auth v5 has provisions for separating the reresentations of the sessions for client-side and server-side pages. The WAR mentioned [here](https://github.com/nextauthjs/next-auth/issues/7976) must be explored meanwhile.

## Reference:

- https://next-auth.js.org/getting-started/example
- https://mahieyin-rahmun.medium.com/how-to-configure-social-authentication-in-a-next-js-next-auth-django-rest-framework-application-cb4c82be137
- https://stackoverflow.com/questions/69068495/how-to-get-the-provider-access-token-in-next-auth
- https://medium.com/@rishipardeshi/authentication-with-nextjs-14-and-next-auth-b10fe7eb6407
