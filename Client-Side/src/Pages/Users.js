import React,{useState} from 'react'
import axios from "axios"

function Users() {
  // const [file,setFile]=useState()
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState('');

  
  const uploadFileHandler = (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setUploading(true);
    axios
      .post('/upload', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        setImage(response.data);
        setUploading(false);
      })
      .catch((err) => {
        console.log(err);
        setUploading(false);
      });
     
    
  };
  console.log(image)
 
  
  return (
    <div className="container">
    <form>
    <label htmlFor="image">Image</label>
                <input
                  type="text"
                  name="image"
                  value={image}
                  id="image"
                  onChange={(e) => setImage(e.target.value)}
                ></input>
                <input type="file" onChange={uploadFileHandler}/>
                <div>
                {uploading && <div>Uploading...</div>}
                </div>
                </form>
                <div>
                
                </div>
    </div>
  )
}

export default Users