import { Button } from "reactstrap";
import { useNavigate, createSearchParams } from "react-router-dom";
const PreView = (props) => {
  //   console.log(props.imgforProc);
  let navigate = useNavigate();

  const displayImgBack = () => {
    props.displayImgBack();
  };
  const proceedTOEdit = () => {

    localStorage.setItem("file",JSON.stringify(props.imgforProc));

    navigate({
      pathname: "/processing", // /viewCase
      search: createSearchParams({
        base64: JSON.stringify(props.imgforProc.byte64),
      }).toString(),
    });

  }
  return (
    <>
      <div style={{ display: "inline-flex" }}>
        <img
          alt=""
          src={URL.createObjectURL(props.imgforProc.file)}
          style={{
            height: "500px",
            width: "600px",
            margin: "0 5px",
          }}
        ></img>
        <div style={{ borderLeft: "1px solid black", marginLeft: "5px" }}></div>
        <div style={{ marginLeft: "20px", backgroundColor: "#ebeded", borderRadius: "10px",height:"300px", width:"550px" }}>
          <div style={{margin:"20px 0 0 20px",padding:"5px"}}>
            <p><b>File Name :</b> {(props.imgforProc.file.name).split(".")[0]}</p><br />
            <p><b>File Type :</b> {props.imgforProc.file.type}</p><br></br>
            <p><b>File Size :</b> {Math.floor(((props.imgforProc.file.size)/1024)/1024)}MB</p>
            
          </div>
          <div style={{marginTop:"50px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Button onClick={displayImgBack} outline style={{ marginRight: "10px", marginLeft: "5px",width:"150px" }}>Back</Button>
            <Button onClick={proceedTOEdit} outline style={{width:"150px"}}>Proceed</Button>
          </div>
        </div>
      </div>


    </>
  );
};
export default PreView;
