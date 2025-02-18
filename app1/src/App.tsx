import CustomButton from "./ui/CustomButton.tsx";

function App() {

    const handleDownloadFunction = () => {
        console.log('Download button clicked');
    }

    const handleUploadFunction = () => {
        console.log('Upload button clicked');
    }

    return (
      <div>
          <CustomButton label={'Download'} onClick={handleDownloadFunction} style={{}} otherData={{}}/>
          <CustomButton label={'Upload'} onClick={handleUploadFunction} style={{}} otherData={{}}/>
      </div>

  )
}

export default App
