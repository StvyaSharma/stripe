import { Inter } from 'next/font/google'
import './globals.css'

import './Hero.scss';
import './Hero-media.scss';

import './NavBar.scss';
import './Navbar-media.scss';
import './Terminal.scss';
import './Terminal-media.scss';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Stripe | Financial Infrastructure for the Internet',
  description: 'Stripe powers online and in-person payment processing and financial solutions for businesses of all sizes. Accept payments, send payouts, and automate financial processes with a suite of APIs and no-code tools.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="https://assets.ctfassets.net/fzn2n1nzq965/01hMKr6nEEGVfOuhsaMIXQ/c424849423b5f036a8892afa09ac38c7/favicon.ico" />

        <link rel="icon" href="https://assets.ctfassets.net/fzn2n1nzq965/01hMKr6nEEGVfOuhsaMIXQ/c424849423b5f036a8892afa09ac38c7/favicon.ico" />
        <link rel="icon" href="https://images.ctfassets.net/fzn2n1nzq965/2EOOpI2mMZgHYBlbO44zWV/5a6c5d37402652c80567ec942c733a43/favicon.png?w=180&amp;h=180"/>

        <meta name="title" content="Stripe | Financial Infrastructure for the Internet" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="description" content="Stripe powers online and in-person payment processing and financial solutions for businesses of all sizes. Accept payments, send payouts, and automate financial processes with a suite of APIs and no-code tools." />


        <meta property="og:image" content="https://images.ctfassets.net/fzn2n1nzq965/3AGidihOJl4nH9D1vDjM84/9540155d584be52fc54c443b6efa4ae6/homepage.png?q=80" />
        <meta property="og:url" content="https://stripe.com/en-au" />

        <script
          defer
          src="https://b.stripecdn.com/site-srv/assets/compiled/js/blog/globe-f22b76d7dcb05af683c3.min.js"
        ></script>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
