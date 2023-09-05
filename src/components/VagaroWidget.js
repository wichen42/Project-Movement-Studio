import { useState, useEffect } from 'react'

const VagaroWidget = () => {
    const [scriptLoaded, setScriptLoaded] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.vagaro.com//resources/WidgetPopupLoader/OZqoEJ0uD3KcT3qmV35y6RuRFXoSlXYO61Ctdg4tjxMG9pUxapkUcvCu7gevEhAJDXwOapcUbfY?v=zqlK3Z3DHozd4Kv8OuHTnZRgLHC8XiY7wJim2c2gmKC#';
      if (!scriptLoaded) {
        script.async = true;

        document.body.appendChild(script);
        setScriptLoaded(true);
      }
    
      return () => {
        document.body.removeChild(script);
      }
    }, []);
    
    
    return (
        <div class="vagaro">
            <a href="https://www.vagaro.com/pro/">Powered by Vagaro</a>&nbsp;
            <a href="https://www.vagaro.com/pro/salon-software">Salon Software</a>,&nbsp;
            <a href="https://www.vagaro.com/pro/spa-software">Spa Software</a>&nbsp;&amp;&nbsp;
            <a href="https://www.vagaro.com/pro/fitness-software">Fitness Software</a>
        </div>
    );
};

export default VagaroWidget;