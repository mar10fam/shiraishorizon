import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useState, useEffect } from 'react';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

const Admin = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(null);
    const [artworks, setArtworks] = useState([]);
    const [artUrlList, setArtUrlList] = useState([]);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setArtworks(files);
    }

    useEffect(() => {
        console.log("files: ", artworks);
    }, [artworks])

    const uploadArt = () => {   
        if(artworks == null) return;
        
        // clear the artUrlList
        setArtUrlList([]);

        // upload each file to firebase and save to array of file URLs
        artworks.forEach((artwork => {
            const artworkRef = ref(storage, `${artwork.name + v4()}`)
            uploadBytes(artworkRef, artwork).then(() => {
                getDownloadURL(artworkRef).then((url) => {
                    setArtUrlList((prev) => [...prev, url]);
                })
            })
        }))

        // upload to db 
        
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="bg-black h-screen w-screen flex items-center">
                <div id="form-container" className="bg-[#161616] p-14 w-[30vw] h-[90vh] rounded-lg m-auto flex flex-col gap-6 items-center justify-between">
                    <div className="w-full flex flex-col gap-6">
                        <label className="input input-bordered input-secondary w-full flex items-center">
                            <input 
                                type="text" 
                                className="grow" 
                                placeholder="Title" 
                                value={title}
                                onChange={(e) => setTitle(e.target.value)} 
                            />
                        </label>
                        <textarea 
                            className="textarea textarea-secondary w-full min-h-[15vh]" 
                            placeholder="Description" 
                            value={description}
                            onChange={(e) => setDescription(e.target.value)} 
                        />
                        <DatePicker 
                            value={date} 
                            onChange={(newDate) => setDate(newDate)} 
                            className="bg-white rounded w-full" 
                        />
                        <input 
                            type="file" 
                            multiple 
                            className="file-input file-input-bordered file-input-secondary w-full" 
                            onChange={handleFileChange} 
                        />
                    </div>
                    <button className="btn btn-secondary text-white w-full" onClick={uploadArt}>Upload</button>
                </div>
            </div>
        </LocalizationProvider>
    )
}

export default Admin;