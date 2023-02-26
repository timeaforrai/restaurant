import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='uk' className='h-full'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Hanken+Grotesk:wght@300;400;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='relative h-full min-h-max bg-dark text-slate-100 font-body font-light tracking-wide'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
