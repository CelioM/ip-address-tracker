import Document, {Html, NextScript, Main, Head} from 'next/document'

export default class MyDocument extends Document {
        render() {
            return(
                <Html>
                    <Head>
                        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin=""/>
                        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
                        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
                        crossorigin=""></script>
                        <link rel="preconnect" href="https://fonts.gstacic.com"/>
                        <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@600&display=swap" rel="stylesheet"/>
                    </Head>
                    <body>
                        <Main/>
                        <NextScript/>
                    </body>

                </Html>
            );
        }
}