import { useEffect } from 'react';

const useImportCss = resourceUrl=> {
  useEffect(() => {
    const script = document.createElement('link');
    script.href = resourceUrl;
    script.rel="stylesheet";
    script.async = true;
    document.head.appendChild(script);
return () => {
      document.head.removeChild(script);
    }
  }, [resourceUrl]);
};
export default useImportCss;