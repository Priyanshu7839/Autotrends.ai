import { useScreenResizeValue } from '../../ScreenSizeFunction'
import React from 'react'

const DAN = () => {

    const breakpoint = useScreenResizeValue()
  return (
    <div className='w-full h-[100vh] flex items-center justify-center '>

            <div className='h-[70%] w-[70%] border-[1px] rounded-[12px] overflow-hidden relative'>
                <div className='w-full h-[20%] bg-[white] absolute top-0 left-0  flex items-center justify-center'>
                     <div className='w-fit flex items-center justify-center bg-gray-50 ml-[8%]'>
      <style>{`
        @keyframes waveAnimation {
          0% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.3);
          }
          70% {
            box-shadow: 0 0 0 40px rgba(59, 130, 246, 0);
          }
          100% {
            box-shadow: 0 0 0 40px rgba(59, 130, 246, 0);
          }
        }

        .dan-circle {
          animation: waveAnimation 3s infinite;
        }
      `}</style>

      <div className='relative flex items-center justify-center'>
        {/* Outer light circle layer */}
        <div
          className='absolute dan-circle'
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, rgba(219, 234, 254, 0.8) 0%, rgba(191, 219, 254, 0.4) 50%, rgba(147, 197, 253, 0) 100%)',
          }}
        />

        {/* Medium circle layer */}
        <div
          className='absolute'
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, rgba(147, 197, 253, 0.9) 0%, rgba(96, 165, 250, 0.6) 50%, rgba(59, 130, 246, 0.2) 100%)',
          }}
        />

        {/* Inner circle layer */}
        <div
          className='absolute'
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: '#085ff33',
          }}
        />

        {/* Center circle with text */}
        <div
          className='relative z-10 flex items-center justify-center'
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: '#0b85ff',
            boxShadow: '0 20px 50px rgba(29, 78, 216, 0.3), inset -2px -2px 8px rgba(0, 0, 0, 0.1), inset 2px 2px 8px rgba(255, 255, 255, 0.2)',
          }}
        >
          <span
            style={{
              fontSize: '12px',
              fontWeight: '700',
              color: 'white',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
              letterSpacing: '2px',
            }}
          >
            DAN
          </span>
        </div>
      </div>
    </div>
                </div>


<iframe id="JotFormIFrame-0199065060d37472a13c07caff64718a191b" title="DAN "
  onload="window.parent.scrollTo(0,0)" allowtransparency="true"
  allow="geolocation; microphone; camera; fullscreen"
  src="https://agent.jotform.com/0199065060d37472a13c07caff64718a191b?embedMode=iframe&background=1&shadow=1"
  frameborder="0"  style={{
            width: "100%",
            maxWidth: "100%",
            height: "100%",
            border: "none",
            display: `flex`,
            marginTop:`${breakpoint <=600 ?'0px':'35px'} `
          }} scrolling="no">
</iframe>
<script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
<script>
  window.jotformEmbedHandler("iframe[id='JotFormIFrame-0199065060d37472a13c07caff64718a191b']",
    "https://www.jotform.com")
</script>



            </div>
      


    </div>
  )
}

export default DAN