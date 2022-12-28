import Script from 'next/script'

export const Scripts = () => (
	<>
		<Script
			async
			src='https://www.googletagmanager.com/gtag/js?id=UA-116617834-1'
		/>

		<Script id='script-1'>{`
        window.dataLayer = window.dataLayer || [];

        function gtag() {
          dataLayer.push(arguments);
        }
        
        gtag('js', new Date());
        gtag('config', 'UA-116617834-1');
      `}</Script>

		<Script id='script-2'>{`
        (function (w, d, s, l, i) {
          w[l] = w[l] || []; w[l].push({
            'gtm.start':
              new Date().getTime(), event: 'gtm.js'
          }); var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
              'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-5LPTJT2');
      `}</Script>

		<Script
			src='https://leads.funildevendas.com.br/WhatsApp/Whats.js'
			id='KeyWhatsFunil'
			data-name='KOF6J20220720173630'></Script>

		<noscript>
			<iframe
				src='https://www.googletagmanager.com/ns.html?id=GTM-5LPTJT2'
				height='0'
				width='0'
				style={{ display: 'none', visibility: 'hidden' }}></iframe>
		</noscript>
	</>
)
