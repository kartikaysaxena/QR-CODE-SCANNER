import logo from './logo.svg';
import './App.css';
import Html5QrcodePlugin from './Main';
import zlib from 'react-zlib-js'
import {Buffer} from 'buffer';
function App() {
  const onNewScanResult = (decodedText, decodedResult) => {

    console.log(decodedText)
    const compressedData = decodedText;
    const buffer = Buffer.from(compressedData, 'base64');
    const decompressedData = zlib.inflateSync(buffer).toString('utf8');
    console.log(JSON.parse(decompressedData))
    var JsonData = JSON.parse(decompressedData)
    window.open(JsonData.link,'_blank','noreferrer')
    window.location.href = JsonData.link;
    alert(decompressedData)


};

  return (
    <div className="App">
            <Html5QrcodePlugin
                fps={10}
                qrbox={800}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}
            />
        </div>
  );
}

export default App;
