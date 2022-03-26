import Navigation from './Navigation'
import Head from 'next/head'

const Container = (props) => (
  
    <div>
    <Head>
        <title>Next JS Project</title>
        <link 
         rel="stylesheet"
         href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/journal/bootstrap.min.css" />
    </Head>
    <Navigation />
    <div className='container p-4'>
        {props.children}
    </div>
    </div>
  )


export default Container;
//container es como la etiqueta body