"use client"
import React from 'react';
import GradientComponent from './GradientComponent';
import GlobeComponent from './GlobeComponent';
// import GlobeVisualization from './GlobeVisualization';

import dynamic from 'next/dynamic';

const DynamicGlobeComponent = dynamic(() => import('./GlobeComponent'), {
  ssr: false, // This ensures the component is only rendered on the client-side
});

const QuadranglePage = () => {
  const transparentTextStyle = {
    color: 'rgba(0, 0, 0, 0.5)', // 0.5 represents 50% transparency, you can adjust it as needed
  };
  return (
    <div className='w-full bg-slate-50 relative'>
      <GradientComponent />
      <div className="flex items-center justify-center h-screen absolute top-0 left-0 right-0 bottom-0">
        <div className="max-w-lg text-left -top-100">
          <p className="text-7xl" style={transparentTextStyle}>
            Financial infrastructure for the internet
          </p>
          <p className="text-md" style={transparentTextStyle}>
            Millions of companies of all sizes use Stripe online and in person to accept payments, send payouts, automate financial processes, and ultimately grow revenue.
          </p>
        </div>
      </div>

      <div className='globe'>
      <DynamicGlobeComponent />
      </div>

      {/* <GlobeVisualization /> */}


      <br/>
      <br/>

        <br/>
        <br/>

        <br/>
        <br/>

        <br/>
    </div>
  );
};

export default QuadranglePage;
