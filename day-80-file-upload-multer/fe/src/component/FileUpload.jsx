import { useEffect, useState } from "react";

export default function FileUpload() {
  const [imageUrl, setImageUrl] = useState([]);
  const FILE_URL = "http://localhost:8181/files";
  const URL = "http://localhost:8181/fileUpload";
  async function fetchFiles() {
    const FETCHED_DATA = await fetch(FILE_URL);

    const FETCHED_JSON = await FETCHED_DATA.json();
    setImageUrl(FETCHED_JSON.data);
    console.log(FETCHED_JSON.data);
  }
  useEffect(() => {
    fetchFiles();
  }, []);

  const handleFileUpload = async (event) => {
    event.preventDefault();
    console.log(event.target.image.files[0]);
    const data = new FormData();
    const files = event.target.image.files;
    data.append("image", files[0]);
    const options = {
      method: "POST",
      body: data,
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    setImageUrl(FETCHED_JSON.data);
  };
  return (
    <div>
      <form
        onSubmit={handleFileUpload}
        method="post"
        encType="multerpart/form-data"
        style={{ padding: 15 }}
      >
        <label>
          <input type="file" name="image" multiple />
        </label>
        <button type="submit">Submit</button>
      </form>
      <ul>
        <li>
          {imageUrl.map((element, index) => {
            return <img key={index} src={element} />;
          })}
        </li>
      </ul>
      {/* <img src="http://localhost:8181/uploads/copy.jpg" alt="" />
      <img src="http://localhost:8181/uploads/middle.jpg" alt="" /> */}
    </div>
  );
}
