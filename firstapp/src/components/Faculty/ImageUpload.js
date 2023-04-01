import React, { useState, useRef } from 'react'
import axios from 'axios';

const ImageUpload = (props) => {
    const imgref = useRef(null);
    const [upimage, setupimage] = useState(null);
    const SubmitHandler = e => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("imgfile", imgref.current.files[0]);

        console.log(formData);
        var data1 = {imgfile:imgref.current.files[0]};

        axios({
                url: "http:/"+"/localhost:5000/uploadimage",
                method: "POST",
                data: formData,
                header: { "Content-Type": "multipart/form-data" },
            })
            .then((item) => {
                console.log("success in posting data");
            }).catch((err) => {
                console.log("error occurend in posting");
            });
    }

    return (
        <div>
			<h1>Add StudentData</h1>
			<form name="imagename" className="imageform" encType="multipart/form-data" onSubmit={SubmitHandler}>
				<input type="file" name="image" ref={imgref} onChange={(e)=>{setupimage(e.target.files[0]);}}></input>
				<input type="submit" name="submit" value="submit"></input>
			</form>
		</div>
    )
}

export default ImageUpload