import React from 'react';

const StripeGlobeIframe = () => {
  return (
    <iframe
      title="Stripe Globe"
      scrolling="no"
      style={{ width: '100%', height: '100vh', border: 'none',position: 'absolute',
    
      height: '200%' }}
      className='frame'

      height={'100%'}
      srcDoc={`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width" />
            <title>Stripe Globe</title>
            <script
              defer
              src="https://b.stripecdn.com/site-srv/assets/compiled/js/blog/globe-f22b76d7dcb05af683c3.min.js"
            ></script>
            <style type="text/css" media="all">
              .Satellite {
                position: relative;
                left: -20px;
                width: calc(100% + 40px);
                overflow-x: hidden;
                padding-top: calc(100% + 40px);
                background: #11253e;

              }
              .Satellite {
                left: -150px;
                width: calc(100% + 300px);
                padding-top: calc(100% + 300px);
              }
              .Satellite__globe {
                position: absolute;
                top: 0;
                left: 40vw;
                width: 100%;
                height: 100%;
                cursor: move;
                cursor: -webkit-grab;
                cursor: -moz-grab;
                cursor: grab;
                display: -webkit-box;
                display: -moz-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: box;
                display: flex;
                -webkit-box-pack: center;
                -moz-box-pack: center;
                -o-box-pack: center;
                -ms-flex-pack: center;
                -webkit-justify-content: center;
                justify-content: center;
                will-change: transform;
              }
            </style>
          </head>
          <body>
            <section class="Satellite">
              <div class="Satellite__globe js-globe"></div>
              <span class="array"></span>
            </section>
          </body>
        </html>
      `}
 
    />
  );
};

export default StripeGlobeIframe;
